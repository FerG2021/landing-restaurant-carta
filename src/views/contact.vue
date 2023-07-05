<template>
  <div class="card-principal">
    <Toast />

    <div class="contenedor-header">
      <div class="header">
        <div class="btn-hamburguesa">
          <Button
            icon="pi pi-angle-left"
            class="p-button-rounded p-button-text p-button-plain icono-atras animate__animated animate__fadeInLeft"
            @click="volverHome()"
          />
        </div>

        <div class="titulo animate__animated animate__fadeInDown">
          <h1>Contactanos</h1>
        </div>

        <div class="adicional"></div>
      </div>
    </div>

    <div class="scroll-container" id="scroll-container ">
      <div class="detalle animate__animated animate__fadeInUp">
        Contanos tu experiencia en nuestro local, que te gustaría que mejoremos
        o simplemente algo que quieras decirnos, lo tendremos en cuenta para
        mejorar nuestro servicio
      </div>

      <div class="contenedor-total">
        <FormContact></FormContact>

        <BtnsContact></BtnsContact>
      </div>
    </div>
  </div>
</template>

<script>
import ModalResenia from "./modales/resenia.vue";
import ModalDetalles from "./modales/detalles.vue";
import FormContact from '../components/FormContact.vue'
import BtnsContact from '../components/BtnsContact.vue'

export default {
  name: "Home",

  components: {
    ModalResenia,
    ModalDetalles,
    FormContact,
    BtnsContact,
  },

  data() {
    return {
      // TIRED MENU
      menu: null,
    };
  },

  methods: {
    volverHome() {
      this.loadingBtnAbrirCarta = true;
      this.$router.push("/");
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
    background-color: var(--background-primary);
  }

  .contenedor-header {
    position: fixed;
    width: 100%;
    height: 10vh;
    margin-top: 0px;
    z-index: 10;
    background-color: var(--background-primary);
  }

  .header {
    height: 10vh;
    width: 100%;
    color: #000;
    display: flex;
  }

  .btn-hamburguesa {
    margin: auto;
    height: 100%;
    width: 100%;
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
    align-items: center;
    display: flex;
  }

  .scroll-container {
    padding-top: 20vh;
    padding-left: 10vh;
    padding-right: 10vh;
    position: absolute;
    z-index: 1;
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
    height: 100vh;
    margin-top: 20px;
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
    width: 100%;
    height: 10vh;
    margin-top: 0px;
    z-index: 10;
    background-color: var(--background-primary);
  }

  .header {
    height: 10vh;
    width: 100%;
    color: #000;
    display: flex;
  }

  .btn-hamburguesa {
    margin: auto;
    height: 100%;
    width: 100%;
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
    align-items: center;
    display: flex;
  }

  .scroll-container {
    padding: 14px;
    margin-top: 10vh;
    height: 100%;
    position: absolute;
    z-index: 1;
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
}
</style>
