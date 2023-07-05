<template>
  <div class="card-principal">
    <div class="contenedor-spinner" v-if="loading == true">
      <ProgressSpinner
        aria-label="Basic ProgressSpinner"
        style="margin: auto"
      />
    </div>

    <div v-if="loading == false">
      <div class="contenedor-header">
        <div class="header">
          <div class="btn-hamburguesa animate__animated animate__fadeInLeft">
            <Button
              icon="pi pi-angle-left"
              class="p-button-rounded p-button-text p-button-plain icono-atras"
              @click="volverHome()"
            />
          </div>

          <div class="titulo animate__animated animate__fadeInDown">
            <h1>Rincón de tentaciones</h1>
          </div>

          <div class="adicional animate__animated animate__fadeInRight">
            <Button
              icon="pi pi-bars"
              class="p-button-rounded p-button-text p-button-plain icono-contacto"
              @click="irContacto()"
            />
          </div>
        </div>

        <div class="contenedor-buscador animate__animated animate__fadeInUp">
          <div class="p-inputgroup">
            <InputText
              placeholder="Buscar"
              class="input-buscar"
              type="text"
              v-model="textoBuscar"
              @change="getProductos()"
            />
          </div>
        </div>
      </div>

      <div class="scroll-container" id="scroll-container">
        <div class="contenedor-spinner" v-if="loadingBuscar == true">
          <ProgressSpinner
            aria-label="Basic ProgressSpinner"
            style="margin: auto"
          />
        </div>

        <div
          class="contenedor-total animate__animated animate__fadeInUp"
          v-else
        >
          <div v-if="cantProductos == 0" class="contenedor-sin-datos">
            <div class="sin-datos">
              <h3 class="texto-sin-productos">Sin productos</h3>
            </div>
          </div>

          <div
            v-for="(categoria, index) in arrayCategorias"
            :key="index"
            class="home"
            v-loading="loading"
            v-else
          >
          <Accordion :multiple="true">
            <AccordionTab 
              :header="categoria.name"
              v-if="
                categoria.subcategorias.length > 0 &&
                categoria.cantProductosCat > 0
              "
              class="mt-10"
            >
              <div
                v-for="(subcategoria, index) in categoria.subcategorias"
                :key="index"
                style="z-index: 1"
              >
                <div v-if="subcategoria.productos.length > 0">
                  <h2 class="subcategorias">{{ subcategoria.name }}</h2>

                  <div
                    v-for="(producto, index) in subcategoria.productos"
                    :key="index"
                    style="padding: 7px"
                  >
                    <div
                      class="carta-producto"
                      @click="
                        $refs.modalDetalles.abrir(
                          categoria,
                          subcategoria,
                          producto
                        )
                      "
                    >
                      <div class="imagen-producto">
                        <Image
                          v-if="producto.imageID != 'null'"
                          :src="producto.image"
                          alt="Image"
                          width="40"
                          class="ver-imagen"
                          imageStyle="border-radius: 8px; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);padding: 3px; height: 6vh; width: 6vh; margin: auto"
                        />

                        <img
                          v-else
                          src="../assets/productosinimagen.png"
                          class="producto-sin-imagen"
                        />
                      </div>
                      <div class="descripcion-producto">
                        <div class="descripcion-producto-nombre">
                          <p>{{ producto.name }}</p>
                        </div>
                        <div class="descripcion-producto-detalles">
                          <p>
                            <b>$ {{ producto.price }}</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionTab>
          </Accordion>
          </div>
        </div>
      </div>

      <modal-resenia ref="modalResenia"></modal-resenia>
      <modal-detalles ref="modalDetalles"></modal-detalles>
      <ConfirmDialog></ConfirmDialog>
      <Toast />
    </div>
  </div>
</template>

<script>
import ModalResenia from "./modales/resenia.vue";
import ModalDetalles from "./modales/detalles.vue";

export default {
  name: "Home",

  components: {
    ModalResenia,
    ModalDetalles,
  },

  data() {
    return {
      loading: true,
      loadingBuscar: false,
      arraySubcategorias: [],
      arrayCategorias: [],
      arrayProductos: [],
      arrayCategoriasMostrar: [],

      cantidadTotalPedido: 0,
      precioTotalPedido: 0,
      arrayPedidos: [],
      idMesa: null,
      textoBuscar: null,
      cantProductos: null,

      // TIRED MENU
      menu: null,
      items: [
        {
          label: "File",
          icon: "pi pi-fw pi-file",
          to: "/",
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
        },
        {
          label: "Users",
          icon: "pi pi-fw pi-user",
        },
        {
          label: "Events",
          icon: "pi pi-fw pi-calendar",
        },
        {
          separator: true,
        },
        {
          label: "Quit",
          icon: "pi pi-fw pi-power-off",
        },
      ],

      countries: [
        { label: "Australia", value: "AU" },
        { label: "Brazil", value: "BR" },
        { label: "China", value: "CN" },
        { label: "Egypt", value: "EG" },
        { label: "France", value: "FR" },
        { label: "Germany", value: "DE" },
        { label: "India", value: "IN" },
        { label: "Japan", value: "JP" },
        { label: "Spain", value: "ES" },
        { label: "United States", value: "US" },
      ],
    };
  },

  created() {
    this.getSubcategorias();
    this.getQuery();
  },

  watch: {
    textoBuscar() {
      this.getProductos();
    },
  },

  methods: {
    getQuery() {
      this.idMesa = this.$route.query.mesa;
    },

    async getSubcategorias() {
      this.loading = true;
      await this.axios
        .get("/api/subcategoria-listar-todas")
        .then((response) => {
          if (response.data.code == 200) {
            this.arraySubcategorias = response.data.data;
            this.getCategorias();
          }
        });
    },

    async getCategorias() {
      await this.axios.get("/api/categoria").then((response) => {
        if (response.data.code == 200) {
          this.arrayCategorias = response.data.data;
          this.arrayCategoriasMostrar = this.arrayCategorias;
          let arrayAux = [];

          this.arrayCategoriasMostrar.forEach((elemento) => {
            arrayAux = [];
            this.arraySubcategorias.forEach((ele) => {
              if (elemento.id == ele.id_category) {
                arrayAux.push(ele);
              }
            });

            elemento.subcategorias = arrayAux;
          });
        }

        this.getProductos();
      });
    },

    async getProductos() {
      this.loadingBuscar = true;

      if (this.textoBuscar == "") {
        this.textoBuscar = null;
      }

      this.arrayProductos = [];

      await this.axios
        .get("/api/productoCarta/" + this.textoBuscar)
        .then((response) => {
          if (response.data.code == 200) {
            this.arrayProductos = [];

            response.data.data.forEach((elemento) => {
              if (elemento.stock == 1) {
                this.arrayProductos.push(elemento);
              }
            });

            this.cantProductos = this.arrayProductos.length;

            let arrayProductoAux = [],
              cantProductosCat = 0;
            this.arrayCategoriasMostrar.forEach((elemento) => {
              cantProductosCat = 0;

              elemento.subcategorias.forEach((ele) => {
                arrayProductoAux = [];
                this.arrayProductos.forEach((el) => {
                  if (ele.id == el.id_category) {
                    cantProductosCat++;
                    el.cantidad = 0;
                    arrayProductoAux.push(el);
                  }
                });

                ele.productos = arrayProductoAux;
              });

              elemento.cantProductosCat = cantProductosCat;
            });
          }
        });

      this.loading = false;
      this.loadingBuscar = false;
    },

    async getProductosBuscar() {
      this.arrayProductos = [];

      await this.axios
        .get("/api/productoBuscar/" + this.textoBuscar)
        .then((response) => {
          if (response.data.code == 200) {
            response.data.data.forEach((elemento) => {
              if (elemento.stock == 1) {
                this.arrayProductos.push(elemento);
              }
            });

            this.arrayProductos = response.data.data;
            this.cantProductos = this.arrayProductos.length;

            let arrayProductoAux = [];
            this.arrayCategoriasMostrar.forEach((elemento) => {
              elemento.subcategorias.forEach((ele) => {
                arrayProductoAux = [];
                this.arrayProductos.forEach((el) => {
                  if (ele.id == el.id_category) {
                    el.cantidad = 0;
                    arrayProductoAux.push(el);
                  }
                });

                ele.productos = arrayProductoAux;
              });
            });
          }
        });

      this.loading = false;
    },

    volverHome() {
      this.loadingBtnAbrirCarta = true;
      this.$router.push("/");
    },

    irContacto() {
      this.loadingBtnAbrirCarta = true;
      this.$router.push("/contact");
    },

    toggle(event) {
      this.$refs.menu.toggle(event);

      var btn = document.getElementById("btn-buscador");
      btn.style.backgroundColor = "#f6f6f6";
      // btn.style.rotate = "90deg";


      if (btn.style.rotate == "90deg") {
        btn.style.transition = "4seg";
        btn.style.rotate = "0deg";
      } else {
        btn.style.transition = "4seg";
        btn.style.rotate = "90deg";
      }
    },

    cambia() {
      console.log("cambia");
    },

    buscar() {
      console.log("this.textoBuscar");
    },

    agregarProductoNuevo(producto) {
      console.log("producto");
      producto.cantidad = 1;

      let existeProducto = this.arrayPedidos.find(
        (element) => element.id == producto.id
      );

      if (existeProducto == undefined) {
        this.arrayPedidos.push(producto);
      }

      // recorro el array de los pedidos para sumar la cantidad de prodcutos pedidos y mostrarlos
      this.cantidadTotalPedido = 0;
      this.precioTotalPedido = 0;
      this.arrayPedidos.forEach((elemento) => {
        this.cantidadTotalPedido = this.cantidadTotalPedido + elemento.cantidad;
        this.precioTotalPedido =
          this.precioTotalPedido +
          parseFloat(elemento.price) * elemento.cantidad;
      });

    },

    agregarCantidadProducto(producto) {
      let existeProducto = this.arrayPedidos.find(
        (element) => element.id == producto.id
      );

      if (!existeProducto) {
        this.arrayPedidos.push(producto);
      }

      // recorro el array de los pedidos para sumar la cantidad de prodcutos pedidos y mostrarlos
      this.cantidadTotalPedido = 0;
      this.precioTotalPedido = 0;

      this.arrayPedidos.forEach((elemento) => {
        this.cantidadTotalPedido = this.cantidadTotalPedido + elemento.cantidad;
        this.precioTotalPedido =
          this.precioTotalPedido +
          parseFloat(elemento.price) * elemento.cantidad;
      });

    },

    abrirDetalles() {
      console.log("abrir detalles");
    },

    usoBlur() {
      // recorro el array de los pedidos para sumar la cantidad de prodcutos pedidos y mostrarlos
      this.cantidadTotalPedido = 0;
      this.arrayPedidos.forEach((elemento) => {
        this.cantidadTotalPedido = this.cantidadTotalPedido + elemento.cantidad;
      });
    },

    confirmarPedido() {
      // tomo solo los elementos que tienen cantidaa mayor que 0
      let arrayPedidosEnviar = this.arrayPedidos.filter(
        (elemento) => elemento.cantidad > 0
      );

      this.$confirm.require({
        header: "Confirmación",
        message: "¿Está seguro que desea confirmar el pedido?",
        icon: "pi pi-info-circle",
        acceptClass: "p-button-success",
        acceptIcon: "pi pi-check",
        rejectIcon: "pi pi-times",
        accept: () => {
          this.enviarPedido(arrayPedidosEnviar);
        },
        reject: () => {
          // this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
        },
        onHide: () => {
          // this.$toast.add({severity:'error', summary:'Hide', detail:'You have hidden', life: 3000});
        },
      });
    },

    async enviarPedido(arrayPedidosEnviar) {
      let params = {
        idMesa: this.idMesa,
        arrayOrden: JSON.stringify(arrayPedidosEnviar),
        precio: this.precioTotalPedido,
        estado: "Comenzada",
      };

      await this.axios.post("/api/orden", params).then((response) => {
        if (response.data.code == 200) {
          this.$toast.add({
            severity: "success",
            summary: "Pedido confirmado con éxito",
            detail: "En breve te traeremos tu pedido. Muchas gracias!",
            life: 3000,
          });
        }
      });
    },

    async contactarWhatsApp() {
      let mensaje = `¡Hola Fernando!"`;

      mensaje = mensaje + "\n";

      mensaje =
        mensaje +
        " Te envío este mensaje porque estoy interesado en contactarme con vos por motivos laborales, por favor contactame a la brevedad ";

      mensaje = mensaje + "\n";

      mensaje = mensaje + "¡¡¡Saludos!!!";

      let url = encodeURI("https://wa.me/" + 3843407142 + "?text=" + mensaje);

      window.open(url, "_blank");
    },

    async contactarLinkedin() {
      let url = "https://www.linkedin.com/in/fernandogonzalez2021/";

      window.open(url, "_blank");
    },

    async contactarGmail() {
      let url = "mailto:fernandojaviergonzalez2018@gmail.com";

      window.open(url, "_blank");
    },
  },
};
</script>

<style>
.nombre-precio {
  color: #000;
  padding: 0px;
  margin: 0px;
}

.descripcion {
  color: #666666;
}

/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .scroll-container {
    padding: 14px;
    padding-left: 10vh;
    padding-right: 10vh;
    margin-top: 18vh;
    height: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    width: 100%;
  }

  .contenedor-header {
    position: fixed;
    width: 100%;
    height: 18vh;
    margin-top: 0px;
    z-index: 10;
    background-color: var(--background-primary);
  }

  .header {
    height: 10vh;
    width: 100%;
    /* background-color: var(--description); */
    color: #000;
    display: flex;
    /* border: 1px solid red; */
  }

  .btn-hamburguesa {
    margin: auto;
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
    align-items: center;
    display: flex;
  }

  .icono-atras {
    margin: auto;
    margin-left: 20px;
    color: var(--primary);
    font-size: 25px;
    background-color: var(--primary);
  }

  .adicional {
    margin: auto;
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
    align-items: center;
    display: flex;
  }

  .icono-contacto {
    margin: auto;
    margin-right: 20px;
    color: var(--primary);
    font-size: 25px;
    background-color: var(--primary);
  }

  .logo {
    margin: auto;
    width: 60%;
    height: 90%;
    border-radius: 50%;
  }

  .btn-buscador {
    rotate: 0deg;
    margin: auto;
    color: #000;
    background-color: var(--background);
    transition: 0.5s;
    /* border: 1px solid var(--primary); */
  }

  .titulo {
    margin: auto;
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
  }

  .titulo h1 {
    text-align: center;
    width: 100%;
  }

  .adicional {
    margin: auto;
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
  }

  .contenedor-buscador {
    display: flex;
    height: 8vh;
    background-color: var(--background-primary);
    /* border: 1px solid red; */
  }

  .contenedor-spinner {
    display: flex;
    height: 100%;
    align-items: center;
    margin: auto;
    /* border: 1px solid red; */
  }

  .contenedor-total {
    margin: auto;
    width: 100%;
    /* border: 1px solid red; */
    height: 100vh;
  }

  .contenedor-sin-datos {
    margin: auto;
    display: flex;
    width: 100%;
    /* border: 1px solid red; */
  }

  .sin-datos {
    margin: auto;
  }

  .texto-sin-productos {
    text-align: center;
    color: var(--primary);
  }

  .p-inputgroup {
    width: 30%;
    height: 65%;
    margin: auto;
  }

  .input-buscar {
    border-radius: 16px !important;
    border: 1px solid var(--background);
  }

  .btn-buscar {
    border-top-right-radius: 16px !important;
    border-bottom-right-radius: 16px !important;
    background-color: var(--primary) !important;
    border: 1px solid var(--primary) !important;
  }

  .card-principal {
    background-color: var(--background);
  }

  .contenedor-spinner {
    display: flex;
    align-items: center;
    height: 100vh;
  }

  .titulo-categoria {
    color: var(--primary);
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  .subcategorias {
    color: #000;
    font-size: 16px;
  }

  .carta-producto {
    width: 100%;
    border-radius: 20px;
    height: 12vh;
    display: flex;
    padding: 10px;
    background: #fff;
    flex-direction: row;
    cursor: pointer;
  }

  .imagen-producto {
    color: #000;
    margin: auto;
    width: 10%;
    /* border: 1px solid red; */
    display: flex;
  }

  .producto-sin-imagen {
    height: 6vh;
    width: 6vh;
    margin: auto;
    /* border: 1px solid red; */
    margin-left: 15px;
  }

  .ver-imagen {
    margin-left: 15px;
    margin: auto;
  }

  .descripcion-producto {
    color: #000;
    margin: auto;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
  }

  .descripcion-producto-nombre {
    color: #000;
    width: 100%;
    height: 100%;
  }

  .descripcion-producto-nombre p {
    margin: 0px;
  }

  .descripcion-producto-detalles {
    color: #000;
    width: 100%;
    height: 100%;
  }

  .descripcion-producto-detalles p {
    margin: 0px;
    font-weight: bold;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .scroll-container {
    /* overflow-y: scroll; */
    /* scroll-behavior: smooth; */
    padding: 14px;
    margin-top: 18vh;
    height: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    /* border: 1px solid green; */
    width: 100%;

    /* height: 100%;
    height: -webkit-calc(100% - 18vh);
    height: -moz-calc(100% - 18vh);
    height: calc(100% - 18vh); */
  }

  .contenedor-header {
    position: fixed;
    /* border: 1px solid red; */
    width: 100%;
    height: 18vh;
    margin-top: 0px;
    z-index: 10;
    background-color: var(--background-primary);
  }

  .header {
    height: 10vh;
    width: 100%;
    /* background-color: var(--description); */
    color: #000;
    display: flex;
    /* border: 1px solid red; */
  }

  .btn-hamburguesa {
    margin: auto;
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
    align-items: center;
    display: flex;
  }

  .icono-atras {
    margin: auto;
    margin-left: 20px;
    color: var(--primary);
    font-size: 25px;
    background-color: var(--primary);
  }

  .adicional {
    margin: auto;
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
    align-items: center;
    display: flex;
  }

  .icono-contacto {
    margin: auto;
    margin-right: 20px;
    color: var(--primary);
    font-size: 25px;
    background-color: var(--primary);
  }

  .logo {
    margin: auto;
    width: 60%;
    height: 90%;
    border-radius: 50%;
  }

  .btn-buscador {
    rotate: 0deg;
    margin: auto;
    color: #000;
    background-color: var(--background);
    transition: 0.5s;
    /* border: 1px solid var(--primary); */
  }

  .titulo {
    margin: auto;
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
  }

  .titulo h1 {
    text-align: center;
    width: 100%;
  }

  .adicional {
    margin: auto;
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
  }

  .contenedor-buscador {
    display: flex;
    height: 8vh;
    background-color: var(--background-primary);
    /* border: 1px solid red; */
  }

  .contenedor-spinner {
    display: flex;
    height: 100%;
    align-items: center;
    margin: auto;
    /* border: 1px solid red; */
  }

  .contenedor-total {
    margin: auto;
    width: 100%;
    /* border: 1px solid red; */
    height: 100vh;
  }

  .contenedor-sin-datos {
    margin: auto;
    display: flex;
    width: 100%;
    /* border: 1px solid red; */
  }

  .sin-datos {
    margin: auto;
  }

  .texto-sin-productos {
    text-align: center;
    color: var(--primary);
  }

  .p-inputgroup {
    width: 80%;
    height: 65%;
    margin: auto;
  }

  .input-buscar {
    border-radius: 16px !important;
    border: 1px solid var(--background);
  }

  .btn-buscar {
    border-top-right-radius: 16px !important;
    border-bottom-right-radius: 16px !important;
    background-color: var(--primary) !important;
    border: 1px solid var(--primary) !important;
  }

  .card-principal {
    background-color: var(--background);
  }

  .contenedor-spinner {
    display: flex;
    align-items: center;
    height: 100vh;
  }

  .titulo-categoria {
    color: var(--primary);
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  .subcategorias {
    color: #000;
    font-size: 16px;
  }

  .carta-producto {
    width: 100%;
    border-radius: 20px;
    height: 12vh;
    display: flex;
    padding: 10px;
    background: #fff;
    flex-direction: row;
  }

  .imagen-producto {
    color: #000;
    margin: auto;
    width: 30%;
    /* border: 1px solid red; */
    display: flex;
  }

  .producto-sin-imagen {
    height: 6vh;
    width: 6vh;
    margin: auto;
    /* border: 1px solid red; */
    margin-left: 15px;
  }

  .ver-imagen {
    margin-left: 15px;
    /* margin: auto; */
  }

  .descripcion-producto {
    color: #000;
    margin: auto;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .descripcion-producto-nombre {
    color: #000;
    width: 100%;
    height: 100%;
  }

  .descripcion-producto-nombre p {
    margin: 0px;
  }

  .descripcion-producto-detalles {
    color: #000;
    width: 100%;
    height: 100%;
  }

  .descripcion-producto-detalles p {
    margin: 0px;
    font-weight: bold;
  }

  .mt-10 {
    margin-top: 10px;
    border: 1px solid red;
  }
}
</style>
