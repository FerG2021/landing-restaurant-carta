<template>
  <div class="card-principal">
    <div class="contenedor-header">
      <div class="header">
        <div class="btn-hamburguesa">
          <Button
            icon="pi pi-angle-left"
            class="p-button-rounded p-button-text p-button-plain icono-atras animate__animated animate__fadeInUp"
            @click="volverHome()"
          />
        </div>

        <div class="titulo animate__animated animate__fadeInUp">
          <h1>Contactanos</h1>
        </div>

        <div class="adicional">
          <!-- <Button
            icon="pi pi-bars"
            class="p-button-rounded p-button-text p-button-plain icono-contacto"
          /> -->
        </div>
      </div>
    </div>

    <div class="scroll-container" id="scroll-container ">
      <div class="detalle animate__animated animate__fadeInUp">
        Contanos tu experiencia en nuestro local, que te gustaría que mejoremos
        o simplemente algo que quieras decirnos, lo tendremos en cuenta para
        mejorar nuestro servicio
      </div>

      <div class="contenedor-total">
        <div
          class="contenedor-form animate__animated animate__fadeInUp"
          style="margin-top: 5px; width: 100%"
        >
          <!-- <h5 style="margin: 0px">DNI</h5> -->
          <form
            @submit.prevent="handleSubmit(!v$.$invalid)"
            class="p-fluid"
            style="margin-top: 30px"
          >
            <!-- Nombre -->
            <div class="field">
              <div class="p-float-label">
                <InputText
                  id="nombre"
                  inputId="integeronly"
                  v-model="v$.nombre.$model"
                  style="width: 100%"
                  :class="{ 'p-invalid': v$.nombre.$invalid && submitted }"
                />
                <label
                  for="nombre"
                  :class="{ 'p-error': v$.nombre.$invalid && submitted }"
                  >Nombre <span style="color: red">*</span></label
                >
              </div>
              <small
                v-if="
                  (v$.nombre.$invalid && submitted) ||
                  v$.nombre.$pending.$response
                "
                class="p-error"
                >{{
                  v$.nombre.required.$message.replace("Value", "Nombre")
                }}</small
              >
            </div>

            <!-- Descripicion -->
            <div class="field" style="margin-top: 30px">
              <div class="p-float-label">
                <InputText
                  id="email"
                  v-model="email"
                  toggleMask
                  style="width: 100%"
                  :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                />
                <label
                  for="email"
                  :class="{ 'p-error': v$.email.$invalid && submitted }"
                  >Email <span style="color: red">*</span></label
                >
              </div>
              <small
                v-if="
                  (v$.email.$invalid && submitted) ||
                  v$.email.$pending.$response
                "
                class="p-error"
              >
                {{ v$.email.required.$message.replace("Value", "Email") }}
              </small>
            </div>

            <!-- Rating -->
            <div class="field" style="margin-top: 30px" c>
              <div class="p-float-label">
                <Rating
                  id="rating"
                  v-model="rating"
                  :cancel="false"
                  style="width: 100%"
                />
              </div>
            </div>

            <!-- Descripicion -->
            <div class="field" style="margin-top: 30px">
              <div class="p-float-label">
                <Textarea
                  id="descripcion"
                  v-model="descripcion"
                  :autoResize="true"
                  rows="5"
                  cols="30"
                  style="width: 100%"
                  :class="{ 'p-invalid': v$.descripcion.$invalid && submitted }"
                />
                <label
                  for="descripcion"
                  :class="{ 'p-error': v$.descripcion.$invalid && submitted }"
                  >Descripción <span style="color: red">*</span></label
                >
              </div>
              <small
                v-if="
                  (v$.descripcion.$invalid && submitted) ||
                  v$.descripcion.$pending.$response
                "
                class="p-error"
              >
                {{
                  v$.descripcion.required.$message.replace(
                    "Value",
                    "descripcion"
                  )
                }}
              </small>
            </div>

            <Button
              label="Guardar"
              type="submit"
              class="p-button-raised p-button-text p-button-rounded btn-guardar"
              :loading="loadingBtnGuardar"
            />
          </form>
        </div>

        <div class="contenedor-redes-sociales">
          <div class="contenedor-facebook">
            <Button
              icon="pi pi-facebook"
              class="p-button-rounded p-button-danger btn-redes-sociales animate__animated animate__fadeInUp"
              @click="abrirFacebook()"
            />
          </div>
          <div class="contenedor-twitter">
            <Button
              icon="pi pi-twitter"
              class="p-button-rounded p-button-danger btn-redes-sociales animate__animated animate__fadeInUp"
              @click="abrirTwitter()"
            />
          </div>
          <div class="contenedor-instagram">
            <Button
              icon="pi pi-instagram"
              class="p-button-rounded p-button-danger btn-redes-sociales animate__animated animate__fadeInUp"
              @click="abrirInstagram()"
            />
          </div>
          <div class="contenedor-whatsapp">
            <Button
              icon="pi pi-whatsapp"
              class="p-button-rounded p-button-danger btn-redes-sociales animate__animated animate__fadeInUp"
              @click="abrirWhatsApp()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalResenia from "./modales/resenia.vue";
import ModalDetalles from "./modales/detalles.vue";

import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { helpers } from "@vuelidate/validators";

export default {
  setup: () => ({ v$: useVuelidate() }),

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

      // form
      nombre: "",
      email: "",
      rating: null,
      descripcion: null,
    };
  },

  validations() {
    return {
      nombre: {
        required: helpers.withMessage("El nombre es requerido", required),
        // email,
      },

      email: {
        required: helpers.withMessage("El email es requerido", required),
        // email,
      },

      rating: {
        required: helpers.withMessage("El precio es requerido", required),
        // email,
      },

      descripcion: {
        required: helpers.withMessage("La descripición es requerida", required),
        // email,
      },
    };
  },

  created() {
    this.getSubcategorias();
    this.getQuery();
  },

  watch: {
    textoBuscar() {
      console.log("buscar");
      this.getProductos();
    },
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
          console.log("response.data CATEGORIA");
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
      this.loadingBuscar = true;

      if (this.textoBuscar == "") {
        this.textoBuscar = null;
      }

      console.log("this.textoBuscar");
      console.log(this.textoBuscar);

      this.arrayProductos = [];

      await this.axios
        .get("/api/productoCarta/" + this.textoBuscar)
        .then((response) => {
          if (response.data.code == 200) {
            console.log("response.data PRODUCTO");
            console.log(response.data);

            this.arrayProductos = [];

            response.data.data.forEach((elemento) => {
              if (elemento.stock == 1) {
                this.arrayProductos.push(elemento);
              }
            });

            // this.arrayProductos = response.data.data;
            console.log("this.arrayProductos");
            console.log(this.arrayProductos);

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

            console.log("this.arrayCategoriasMostrar FINAL");
            console.log(this.arrayCategoriasMostrar);

            console.log("this.arrayCategorias");
            console.log(this.arrayCategorias);
          }
        });

      this.loading = false;
      this.loadingBuscar = false;
    },

    async getProductosBuscar() {
      // let params = {};
      // if (this.textoBuscar != null && this.textoBuscar != "") {
      //   params.nombre = this.textoBuscar;
      // } else {
      //   params.nombre = null;
      // }

      // this.arrayCategoriasMostrar = [];
      this.arrayProductos = [];

      await this.axios
        .get("/api/productoBuscar/" + this.textoBuscar)
        .then((response) => {
          if (response.data.code == 200) {
            console.log("response.data PRODUCTO");
            console.log(response.data);

            response.data.data.forEach((elemento) => {
              if (elemento.stock == 1) {
                this.arrayProductos.push(elemento);
              }
            });

            this.arrayProductos = response.data.data;
            console.log("this.arrayProductos");
            console.log(this.arrayProductos);

            this.cantProductos = this.arrayProductos.length;
            console.log("SDLFJSLKJFKLDS");

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

            console.log("this.cantProductos LENGHT");
            console.log(this.cantProductos);

            console.log("this.arrayCategoriasMostrar FINAL");
            console.log(this.arrayCategoriasMostrar);

            console.log("this.arrayProductos FINAL");
            console.log(this.arrayProductos);
          }
        });

      this.loading = false;
    },

    volverHome() {
      this.loadingBtnAbrirCarta = true;
      this.$router.push("/");
    },

    abrirFacebook() {
      let url = "https://www.facebook.com";
      window.open(url, "_blank");
    },

    abrirTwitter() {
      let url = "https://www.twitter.com";
      window.open(url, "_blank");
    },

    abrirInstagram() {
      let url = "https://www.instagram.com";
      window.open(url, "_blank");
    },

    async abrirWhatsApp() {
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

    toggle(event) {
      this.$refs.menu.toggle(event);

      var btn = document.getElementById("btn-buscador");
      btn.style.backgroundColor = "#f6f6f6";
      // btn.style.rotate = "90deg";

      console.log("btn.style");
      console.log(btn.style);

      if (btn.style.rotate == "90deg") {
        console.log("entra 90");
        btn.style.transition = "4seg";
        btn.style.rotate = "0deg";
      } else {
        console.log("entra 0");
        btn.style.transition = "4seg";
        btn.style.rotate = "90deg";
      }

      console.log("btn.style.rotate");
      console.log(btn.style.rotate);

      // btn.style.border = "#b1464a";

      // this.menu.toggle();
    },

    cambia() {
      console.log("cambia");
      console.log(this.items);
    },

    buscar() {
      console.log("this.textoBuscar");
      console.log(this.textoBuscar);
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

    abrirDetalles() {
      console.log("abrir detalles");
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

<style scoped>
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
  .card-principal {
    background-color: var(--background);
    height: 100vh;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .card-principal {
    background-color: var(--background-primary);
  }

  .contenedor-header {
    position: fixed;
    /* border: 1px solid red; */
    width: 100%;
    height: 10vh;
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
    font-size: 25px;
  }

  .titulo {
    margin: auto;
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    background-color: var(--background-primary);
    color: #000;
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
    align-items: center;
    display: flex;
  }

  .scroll-container {
    padding: 14px;
    margin-top: 10vh;
    height: 100%;
    position: absolute;
    z-index: 1;
    /* border: 1px solid green; */
    width: 100%;
    display: block;
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

  .contenedor-detalle {
    width: 100%;
    background-color: var(--background-primary);
    color: #000;
    padding: 10px;
    text-align: center;
  }

  .detalle {
    display: block;
    width: 100%;
    background-color: var(--background-primary);
    color: #000;
  }

  .contenedor-total {
    display: block;
    margin: auto;
    width: 100%;
    /* border: 1px solid red; */
    height: 100vh;
    margin-top: 20px;
  }

  .contenedor-form {
    padding: 10px;
    /* border: 1px solid green; */
    border-radius: 20px;
    background-color: #fff;
  }

  .btn-guardar {
    margin: auto;
    color: #fff;
    width: 100%;
    background-color: var(--secondary);
    box-shadow: none;
    margin-bottom: 20px;
    border: 1px solid var(--secondary);
  }

  .btn-guardar:active {
    margin: auto;
    color: #fff;
    width: 100%;
    background-color: var(--secondary);
    box-shadow: none;
    border: 1px solid var(--secondary);
  }

  .contenedor-redes-sociales {
    display: flex;
    width: 100%;
    margin-top: 20px;
  }

  .contenedor-facebook {
    margin: auto;
  }

  .contenedor-twitter {
    margin: auto;
  }

  .contenedor-instagram {
    margin: auto;
  }

  .contenedor-whatsapp {
    margin: auto;
  }

  .btn-redes-sociales {
    background-color: var(--primary);
    border: 1px solid var(--primary);
  }

  .btn-redes-sociales:active {
    background-color: var(--secondary);
    border: 1px solid var(--primary);
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
}
</style>
