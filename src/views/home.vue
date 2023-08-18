<template>
  <div class="home">
    <h1 class="titulo animate__animated animate__fadeInUp">
      RINCÓN DE <br> <br>
      TENTACIONES
    </h1>

    <div class="contenedor-logo">
      <img
        src="../assets/madialunacafe.png"
        class="medialuna animate__animated animate__fadeInUp"
      />
    </div>

    <div class="contenedor-saludo animate__animated animate__fadeInUp">
      <h2>EL AUTÉNTICO SABOR</h2>

      <h3>
        Disfrutá el sabor de infusiones de calidad acompañadas <br />
        del mejor sabor
      </h3>
    </div>

    <div class="contenedor-button animate__animated animate__fadeInUp">
      <Button
        label="Comenzar"
        class="p-button-raised p-button-text p-button-rounded btn-comenzar"
        icon="pi pi-angle-right"
        iconPos="right"
        @click="openCard()"
        :loading="loadingBtnOpenCard"
      ></Button>

      <Button
        label="Contactanos"
        class="p-button-raised p-button-text p-button-rounded btn-comenzar"
        icon="pi pi-angle-right"
        iconPos="right"
        @click="openContact()"
        :loading="loadingBtnContact"
      ></Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},

  data() {
    return {
      loadingBtnOpenCard: false,
      loadingBtnContact: false,
    };
  },

  created() {},

  methods: {
    openCard() {
      this.loadingBtnOpenCard = true;
      this.$router.push("/card");
    },

    openContact() {
      this.loadingBtnContact = true;
      this.$router.push("/contact");
    },
  },
};
</script>

<style lang="scss" scoped>
/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .home {
    height: 100vh;
    // background-color: var(--primary);
    background: rgb(177, 70, 74);
    background: linear-gradient(
      0deg,
      rgba(177, 70, 74, 1) 0%,
      rgba(189, 100, 103, 1) 54%
    );
  }

  .titulo {
    background-color: transparent;
    margin: 0px;
    padding: 50px 0px 0px 50px;
    font-size: 3rem;
    // border: 1px solid green;
    height: 12vh;
  }

  .contenedor-logo {
    display: flex;
  }

  .medialuna {
    margin: auto;
    width: 30%;
  }

  .contenedor-saludo {
    margin-top: 2vh;
    text-align: center;
  }

  .contenedor-saludo h2 {
    padding-left: 20px;
    text-align: center;
    font-size: 30px;
  }

  .contenedor-saludo h3 {
    padding: 20px;
  }

  .contenedor-button {
    display: flex;
    flex-direction: column;
  }

  .btn-comenzar {
    margin: auto;
    color: #fff;
    width: 40%;
    background-color: var(--secondary);
    box-shadow: none;
    margin-bottom: 20px;
  }

  .btn-comenzar:hover {
    margin: auto;
    color: #fff !important;
    width: 40%;
    background-color: var(--secondary);
    box-shadow: none;
    margin-bottom: 20px;
  }

  .btn-comenzar:active {
    margin: auto;
    color: #fff !important;
    width: 40%;
    background-color: var(--secondary);
    box-shadow: none;
    margin-bottom: 20px;
  }

  .btn-comenzar::after {
    margin: auto;
    color: #fff !important;
    width: 40%;
    background-color: var(--secondary);
    box-shadow: none;
    margin-bottom: 20px;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .home {
    height: 100vh;
    // background-color: var(--primary);
    background: rgb(177, 70, 74);
    background: linear-gradient(
      0deg,
      rgba(177, 70, 74, 1) 0%,
      rgba(189, 100, 103, 1) 54%
    );
  }

  .titulo {
    background-color: transparent;
    margin: 0px;
    padding: 50px 0px 0px 50px;
    font-size: 3rem;
    // border: 1px solid green;
    height: 12vh;
  }

  .contenedor-logo {
    display: flex;
    margin-right: 30px;
    margin-top: 2vh;
  }

  .medialuna {
    margin: auto;
    width: 100%;
    margin-right: 20px;
  }

  .contenedor-saludo {
    margin-top: 2vh;
    text-align: center;
  }

  .contenedor-saludo h2 {
    padding-left: 20px;
    text-align: center;
  }

  .contenedor-saludo h3 {
    padding: 20px;
  }

  .contenedor-button {
    display: flex;
    flex-direction: column;
  }

  .btn-comenzar {
    margin: auto;
    color: #fff;
    width: 80%;
    background-color: var(--secondary);
    box-shadow: none;
    margin-bottom: 20px;
  }

  .btn-comenzar:active {
    margin: auto;
    color: #fff;
    width: 80%;
    background-color: var(--secondary);
    box-shadow: none;
  }

  .btn-comenzar::after {
    margin: auto;
    color: #fff;
    width: 80%;
    background-color: var(--secondary);
    box-shadow: none;
  }
}
</style>
