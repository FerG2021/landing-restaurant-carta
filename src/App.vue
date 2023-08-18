<template>
  <router-view />
</template>

<script>
export default {
  name: "App",

  created() {
    this.$store.state.idioma = {
      name: "Español",
      code: "ES",
      bandera: "/espana.png",
    };
  },

  watch: {
  },

  data() {
    return {
    };
  },

  methods: {
  },
};
</script>

<style lang="scss">
:root {
  --primary: #b1464a;
  --secondary: #bd6467;
  --background: #f6f6f6;
  --description: #a6a6a6;
  --background-primary: #e5e5e5;
}

@import url('./assets/colors.css');

</style>