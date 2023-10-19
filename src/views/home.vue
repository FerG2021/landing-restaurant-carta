<template>
  <div class="home">
    <h1 class="titulo animate__animated animate__fadeInUp">
      DIGITAL <br />
      <br />
      DELIGHTS
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
      <BtnHome
        :data="home"
        @click="openCard()"
        :loading="loadingBtnOpenCard"
      ></BtnHome>

      <BtnHome
        :data="contactUs"
        @click="openContact()"
        :loading="loadingBtnContact"
      ></BtnHome>
    </div>
  </div>
</template>

<script>
import BtnHome from "../components/BtnHome.vue";

export default {
  name: "Home",

  components: {},

  data() {
    return {
      loadingBtnOpenCard: false,
      loadingBtnContact: false,

      home: {
        label: "Comenzar",
      },
      contactUs: {
        label: "Contactanos",
      },
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

  components: { BtnHome },
};
</script>

<style lang="scss" scoped>
/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .home {
    height: 100vh;
    background: rgb(177, 70, 74);
    background: linear-gradient(
      0deg,
      rgba(177, 70, 74, 1) 0%,
      rgba(189, 100, 103, 1) 54%
    );
    .titulo {
      background-color: transparent;
      margin: 0px;
      padding: 50px 0px 0px 50px;
      font-size: 3rem;
      height: 12vh;
    }
    .contenedor-logo {
      display: flex;
      .medialuna {
        margin: auto;
        width: 30%;
      }
    }
    .contenedor-saludo {
      margin-top: 2vh;
      text-align: center;
      h2 {
        padding-left: 20px;
        text-align: center;
        font-size: 30px;
      }
      h3 {
        padding: 20px;
      }
    }
    .contenedor-button {
      display: flex;
      flex-direction: column;
    }
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .home {
    height: 100vh;
    background: rgb(177, 70, 74);
    background: linear-gradient(
      0deg,
      rgba(177, 70, 74, 1) 0%,
      rgba(189, 100, 103, 1) 54%
    );
    .titulo {
      background-color: transparent;
      margin: 0px;
      padding: 50px 0px 0px 50px;
      font-size: 3rem;
      height: 12vh;
    }
    .contenedor-logo {
      display: flex;
      margin-right: 30px;
      margin-top: 2vh;
      .medialuna {
        margin: auto;
        width: 100%;
        margin-right: 20px;
      }
    }
    .contenedor-saludo {
      margin-top: 2vh;
      text-align: center;
      h2 {
        padding-left: 20px;
        text-align: center;
      }
      h3 {
        padding: 20px;
      }
    }
    .contenedor-button {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
