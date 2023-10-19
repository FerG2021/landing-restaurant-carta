<template>
  <div class="header">
    <div class="btn-hamburguesa animate__animated animate__fadeInLeft">
      <Button
        icon="pi pi-angle-left"
        class="p-button-rounded p-button-text p-button-plain icono-atras"
        @click="backHome()"
      />
    </div>

    <div class="titulo animate__animated animate__fadeInDown">
      <h1>Digital delights</h1>
    </div>

    <div class="adicional animate__animated animate__fadeInRight">
      <Button
        icon="pi pi-comment"
        class="p-button-rounded p-button-text p-button-plain icono-contacto"
        @click="goToContact()"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    backHome() {
      this.$router.push("/");
    },

    goToContact() {
      this.$router.push("/contact");
    },
  },
};
</script>

<style lang="scss">
.header {
  height: 10vh;
  width: 100%;
  color: #000;
  display: flex;
  .btn-hamburguesa {
    margin: auto;
    height: 100%;
    width: 100%;
    align-items: center;
    display: flex;
    .icono-atras {
      margin: auto;
      margin-left: 20px;
      font-size: 25px;
    }
  }
  .titulo {
    margin: auto;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    h1 {
      text-align: center;
      width: 100%;
    }
  }
  .adicional {
    margin: auto;
    height: 100%;
    width: 100%;
    align-items: center;
    display: flex;
    .icono-contacto {
      margin: auto;
      margin-right: 20px;
      font-size: 25px;
    }
  }
}
</style>