<template>
  <div
    style="display: flex; align-items: center; height: 100%"
    v-if="loading == true"
  >
    <ProgressSpinner aria-label="Basic ProgressSpinner" style="margin: auto" />
  </div>

  <div v-if="loading == false">

    <div class="contenedor-bienvenida">
      <div class="card-foto-local">
        <img src="../assets/restaurante.jpg" alt="MDN" class="foto-local">
      </div>
      <div class="card-bienvenida"> 
        <span class="nombre-local"> ALMA MULA </span> <br>
        Te damos a la bienvenida a nuestro menú digital <br>
        Aquí vas a poder ver todo lo que tenemos disponible para ofrecerte <br>

        <a href="#footer">Contactanos</a>
      </div>
    </div>

    <div class="scroll-container" id="scroll-container">
      <div
        v-for="(categoria, index) in arrayCategorias"
        :key="index"
        class="home"
        v-loading="loading"
      >
        <h1 class="titulo-categoria">
          {{ categoria.name }}
        </h1>

        <div
          v-for="(subcategoria, index) in categoria.subcategorias"
          :key="index"
          style="z-index: 1"
        >
          <Accordion>
            <AccordionTab
              :header="subcategoria.name"
              style="width: 100%; margin: 0px; height: auto"
            >
              <div
                v-for="(producto, index) in subcategoria.productos"
                :key="index"
                style="padding: 7px;"
              >
                <div style="display: flex;" class="nombre-precio">
                  <div style="margin: auto; width: 100%; margin: 0px">
                    <p>{{ producto.name }}</p>
                  </div>

                  <div style="margin-right: 0px; width: 100%">
                    <p style="text-align: right; "> $ {{ producto.price }} </p>
                  </div>
                </div>

                <div v-if="producto.description" class="descripcion" >
                  {{ producto.description }}
                </div>
              </div> 
            </AccordionTab>
          </Accordion>
        </div>
      </div>

      <div class="footer" id="footer">
        <div class="footer-section">
          <p style="text-align: center; font-size: 20px">
            CQC RESTAURANTE <br> 
            <Button 
              label="Escribir reseña" 
              class="p-button-link" 
              style="border: 1px solid #000; padding: 0px; color: #fff; text-decoration: none; "
              @click="$refs.modalResenia.abrir()"
            />
          </p>
        </div>

        <div class="footer-section">
          <p style="text-align: center; font-size: 20px">
            CONTACTO
          </p>

          <div style="display: flex; justify-content: center;">
            <span class="material-icons" style="margin-right: 5px">mail</span>
            <a href="mailto:fernandojaviergonzalez2018@gmail.com" style="text-decoration: none; color: #fff">fernandojaviergonzalez2018@gmail.com</a>
          </div>

          <div style="display: flex; justify-content: center; margin-top: 20px">
            <i class="pi pi-whatsapp material-icons" style="margin-right: 5px"></i>
            <Button 
              label="3843-407142" 
              class="p-button-link" 
              style="border: 1px solid #000; padding: 0px; color: #fff; text-decoration: none; "
              @click="contactarWhatsApp()"
            />
            <!-- <span style="">3843-407142</span> -->
          </div>

          <div style="display: flex; justify-content: center; margin-top: 20px">
            <i class="pi pi-map-marker material-icons" style="margin-right: 5px"></i>
            <span style="">Av. Saavedra S/N</span>
          </div>
        </div>

        <div class="footer-section">
          <p style="text-align: center">
            <a href="https://instagram.com" style="text-decoration: none; color: #fff" target="_blank">
              <i class="pi pi-instagram material-icons" style="margin-right: 20px; font-size: 30px"></i>
            </a>
            
            <a href="https://facebook.com" style="text-decoration: none; color: #fff" target="_blank">
              <i class="pi pi-facebook material-icons" style="margin-right: 20px; font-size: 30px"></i>
            </a>
          </p>
            
        </div>
      </div>
    </div>
  
    

    <!-- <Button
      label="Contactar"
      class="contacto-contenido-contactar p-button-link"
      @click="contactarGmail()"
    /> -->

    <modal-resenia ref="modalResenia"></modal-resenia>

    <ConfirmDialog></ConfirmDialog>
    <Toast />
  </div>
</template>

<script>
import ModalResenia from "./modales/resenia.vue";


export default {
  name: "Home",

  components: {
    ModalResenia,
  },

  data() {
    return {
      loading: true,
      arraySubcategorias: [],
      arrayCategorias: [],
      arrayProductos: [],
      arrayCategoriasMostrar: [],

      cantidadTotalPedido: 0,
      precioTotalPedido: 0,
      arrayPedidos: [],
      idMesa: null,
    };
  },

  created() {
    this.getSubcategorias();
    this.getQuery();
  },

  methods: {
    getQuery() {
      console.log("this.$route.query");
      console.log(this.$route.query);
      this.idMesa = this.$route.query.mesa;
    },
    async getSubcategorias() {
      this.loading = true;
      await this.axios
        .get("/api/subcategoria-listar-todas")
        .then((response) => {
          if (response.data.code == 200) {
            console.log("response.data");
            console.log(response.data);

            this.arraySubcategorias = response.data.data;

            this.getCategorias();
          }
        });
    },

    async getCategorias() {
      await this.axios.get("/api/categoria").then((response) => {
        if (response.data.code == 200) {
          console.log("response.data");
          console.log(response.data);

          this.arrayCategorias = response.data.data;

          console.log("this.arraySubcategorias");
          console.log(this.arraySubcategorias);

          console.log("this.arrayCategorias");
          console.log(this.arrayCategorias);

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

          console.log("this.arrayCategoriasMostrar");
          console.log(this.arrayCategoriasMostrar);
        }

        this.getProductos();
      });
    },

    async getProductos() {
      await this.axios.get("/api/producto").then((response) => {
        if (response.data.code == 200) {
          console.log("response.data PRODUCTO");
          console.log(response.data);

          response.data.data.forEach((elemento) => {
            if(elemento.stock == 1){
              this.arrayProductos.push(elemento)
            }
          }) 

          // this.arrayProductos = response.data.data;
          console.log("this.arrayProductos");
          console.log(this.arrayProductos);

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

          console.log("this.arrayCategoriasMostrar FINAL");
          console.log(this.arrayCategoriasMostrar);
        }
      });

      this.loading = false;
    },

    agregarProductoNuevo(producto) {
      console.log("producto");
      console.log(producto);

      producto.cantidad = 1;

      let existeProducto = this.arrayPedidos.find(
        (element) => element.id == producto.id
      );

      console.log("existeProducto");
      console.log(existeProducto);

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

      console.log("this.precioTotalPedido");
      console.log(this.precioTotalPedido);
    },

    agregarCantidadProducto(producto) {
      console.log("producto");
      console.log(producto);

      let existeProducto = this.arrayPedidos.find(
        (element) => element.id == producto.id
      );

      console.log("existeProducto");
      console.log(existeProducto);

      if (!existeProducto) {
        this.arrayPedidos.push(producto);
      }

      // recorro el array de los pedidos para sumar la cantidad de prodcutos pedidos y mostrarlos
      this.cantidadTotalPedido = 0;
      this.precioTotalPedido = 0;

      this.arrayPedidos.forEach((elemento) => {
        console.log("elemento");
        console.log(elemento);

        this.cantidadTotalPedido = this.cantidadTotalPedido + elemento.cantidad;
        this.precioTotalPedido =
          this.precioTotalPedido +
          parseFloat(elemento.price) * elemento.cantidad;
      });

      console.log("this.arrayPedidos");
      console.log(this.arrayPedidos);
    },

    usoBlur() {
      console.log("blur");
      // recorro el array de los pedidos para sumar la cantidad de prodcutos pedidos y mostrarlos
      this.cantidadTotalPedido = 0;
      this.arrayPedidos.forEach((elemento) => {
        this.cantidadTotalPedido = this.cantidadTotalPedido + elemento.cantidad;
      });
    },

    confirmarPedido() {
      console.log("this.arrayPedidos");
      console.log(this.arrayPedidos);

      // tomo solo los elementos que tienen cantidaa mayor que 0
      let arrayPedidosEnviar = this.arrayPedidos.filter(
        (elemento) => elemento.cantidad > 0
      );

      console.log("arrayPedidosEnviar");
      console.log(arrayPedidosEnviar);

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

      // await this.axios.get("/sanctum/csrf-cookie").then((response) => {
      //   console.log("response");
      //   console.log(response);
      // });

      // let credentials = {
      //   email: "invitado",
      //   password: "40899041",
      // };

      // await this.axios.post("/login", credentials).then((res) => {
      //   console.log("res");
      //   console.log(res);
      // });

      await this.axios.post("/api/orden", params).then((response) => {
        if (response.data.code == 200) {
          console.log("response.data PRODUCTO");
          console.log(response.data);

          this.$toast.add({
            severity: "success",
            summary: "Pedido confirmado con éxito",
            detail: "En breve te traeremos tu pedido. Muchas gracias!",
            life: 3000,
          });
          console.log("arrayPedidosEnviar");
          console.log(arrayPedidosEnviar);
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
  .separador {
    margin: 30px;
  }

  .saludo {
    text-align: center;
    margin-top: 20px;
  }

  .nombre {
    color: #90745c;
    font-size: 40px;
  }

  .img-descripcion {
    margin-top: 20px;
    display: flex;
  }

  .div-img {
    margin: auto;
  }

  .img {
    height: 50vh;
    margin: auto;
    padding: 10px;
  }

  .div-descripcion {
    margin: auto;
    /* border: 1px solid red; */
  }

  .descripcion {
    padding: 10px;
    text-align: center;
  }

  .div-eleccion {
    display: flex;
  }

  .eleccion {
    width: 33%;
    /* margin: auto; */
    /* border: 1px solid red; */
  }

  .eleccion-contenido {
    text-align: center;
    padding: 10px;
    word-wrap: break-word;
  }

  .card {
    background-color: #090909;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    border: 1px solid #90745c;
    height: 100%;
    word-wrap: break-word;
  }

  .card:hover {
    background-color: #212121;
  }

  .card-titulo {
    color: #90745c;
    font-size: calc(1em + 0.5vw);
  }

  .card-contenido {
    font-size: calc(0.5em + 0.5vw);
  }

  .separador-titulo {
    color: #90745c;
    text-align: center;
    font-size: 40px;
  }

  .contacto {
    display: flex;
  }

  .contacto-contenido {
    margin: auto;
    text-align: center;
    /* border: 1px solid red; */
    transition: 2s;
  }

  .contacto-contenido:hover .contacto-contenido-icono {
    font-size: 5rem;
    transition: 0.5s;
  }

  .contacto-contenido:hover #i1 {
    color: #25d366;
  }

  .contacto-contenido:hover #i2 {
    color: #0077b5;
  }

  .contacto-contenido:hover #i3 {
    color: #c71610;
  }

  .contacto-contenido-icono {
    color: #90745c;
    font-size: 3rem;
  }

  .contacto-contenido-titulo {
    font-size: 20px;
  }

  .contacto-contenido-contactar {
    text-decoration: none !important;
    color: white !important;
  }

  .contacto-contenido-contactar:hover {
    text-decoration: none !important;
    color: #90745c !important;
  }

  /*  */
  /* NUEVOS ESTILOS */
  /*  */

  .footer {
    display: flex;
    background-color: #000;
    scroll-behavior: smooth;

  }

  .footer-section {
    margin: auto;
    width: 100%;
    align-items: center;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .scroll-container {
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  .home {
    color: #000;
    width: (100% - 30vh);
    margin-top: 20px;
  }

  .titulo-categoria {
    border: 1px solid #185e65;
    padding: 10px;
    text-align: center;
    background-color: #185e65;
    color: #fff;
    margin-left: 10px;
    margin-right: 10px;
  }

  .p-accordion {
    margin-left: 10px;
    margin-right: 10px;
  }

  .p-accordion-header .p-accordion-header-link {
    background-color: #b7b7b7 !important;
    color: #185e65 !important;
  }

  .p-accordion-content {
    background-color: #b7b7b7 !important;
    color: #185e65 !important;
  }

  .btn-select {
    color: #185e65 !important;
  }

  .p-inputnumber-input {
    width: 34px !important;
    background-color: #fff;
    color: #000;
  }

  .p-inputnumber-button-up {
    background-color: #5cb85c;
  }

  .p-inputnumber-button-down {
    background-color: #d9534f;
  }

  .btn-confirmar {
    position: fixed;
    bottom: 40px;
    z-index: 99;
    width: 95%;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    background-color: #467e83;
    border: 1px solid #467e83;
    color: #fff;
    margin-left: 10px;
    transition: 0.3s;
  }

  .footer {
    display: block;
    background-color: #000;
  }

  .footer-section {
    margin: auto;
    margin: 10px 0px 10px 0px;
    /* border: 1px solid red */
  }

  .p-dialog {
    background-color: #fff !important;
    color: #000 !important;
  }

  .p-dialog-header {
    background-color: #fff !important;
    color: #000 !important;
  }

  .p-dialog-content {
    background-color: #fff !important;
    color: #000 !important;
  }

  .p-dialog-footer {
    background-color: #fff !important;
    color: #000 !important;
  }

  .p-accordion-content {
    width: 100% !important;
    margin: 0px !important;
    padding: 0px !important;
  }

  .p-inputnumber {
    height: 1.5vh !important;
  }

  .p-inputnumber-input {
    width: 11vw !important;
    text-align: center !important;
  }

  .p-inputnumber-button-down {
    width: 8vw !important;
    background: #d9534f !important;
    border: 1px solid #d9534f !important;
  }

  .p-inputnumber-button-up {
    width: 8vw !important;
    background: #428bca !important;
    border: 1px solid #428bca !important;
  }

  .p-accordion-content {
    height: auto !important;
  }

  .p-menubar {
    border-radius: 0px
  }

  .p-accordion-header {
    border-radius: 0px
  }

  .contenedor-bienvenida { 
    height: 50vh;
    background-color: blue;
    display: flex; 
    flex-direction: column;
    margin-bottom: 20px;
  }

  .card-foto-local {
    margin: 0;
    /* border: 1px solid red; */
    height: 50vh;
    width: 100%;
    position: relative;
  }

  .foto-local {
    height: 50vh;
    width: 100%
  }

  /* .card-logo {
    padding: 80px;
    position:relative;
    background-color: green;
    border-radius: 50%;
    width: 60%;
    margin: auto;
  } */

  .card-bienvenida {
    margin: auto 10px auto 10px;    
    text-align: center;
    position: absolute;
    margin-top: 16vh;
    background: #b2dac2;
    color: #666557;
    border-radius: 8px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.28);
    padding: 5px;
    margin-bottom: 20px;
  }

  .nombre-local {
    color: #431b13;
    font-size: 25px;
    font-family: 'Eater', cursive;
  }

  .btn-contactar {
    background-color: #431b13;
    color: #b2dac2;
    border: 1px solid #431b13;
  }

  .btn-contactar:active {
    /* box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(4px); */
    background-color: #431b13 !important;
    color: #b2dac2 !important;
    border: 1px solid #431b13 !important;
    
    /* Moving button 4px to y-axis */
  }
}
</style>
