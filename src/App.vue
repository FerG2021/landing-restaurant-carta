<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>&nbsp;
    <router-link to="/about">Acerca de</router-link>
  </nav> -->
  <!-- <div v-if="$store.state.idioma.code == 'ES'">
    <Menubar :model="items" class="menubar">
      <template #start> RESTAURANTE </template>
      <template #end>
        <InputText placeholder="Buscar" type="text" class="inputSearch" />
      </template>
    </Menubar>
  </div> -->

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
    cambiar() {
      document.getElementById();
    },
  },

  data() {
    return {
      selectedCountry: {
        name: "Español",
        code: "ES",
        bandera: "/espana.png",
      },
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          url: "/",
        },
        {
          label: "Sobre mi",
          icon: "pi pi-fw pi-info-circle",
          url: "/about",
        },
        {
          label: "Proyectos",
          icon: "pi pi-fw pi-folder",
          url: "/projects",
        },
        {
          label: "Contacto",
          icon: "pi pi-fw pi-phone",
          url: "/contact",
        },
      ],

      itemsIng: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          url: "/",
        },
        {
          label: "About me",
          icon: "pi pi-fw pi-info-circle",
          url: "/about",
        },
        {
          label: "Projects",
          icon: "pi pi-fw pi-folder",
          url: "/projects",
        },
        {
          label: "Contact",
          icon: "pi pi-fw pi-phone",
          url: "/contact",
        },
      ],

      countries: [
        {
          name: "Español",
          code: "ES",
          bandera: "/espana.png",
        },
        {
          name: "English",
          code: "IN",
          bandera: "/inglaterra.png",
        },
      ],
    };
  },

  methods: {
    cambiarIdioma() {
      console.log("idioma");
      console.log(this.$store.state.idioma);
      console.log(this.selectedCountry);

      this.$store.state.idioma = this.selectedCountry;

      // console.log(this.$store.state.idioma);
    },
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

/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .inputSearch {
    background-color: #5d8e93;
    border: 1px solid #185e65;
  }

  .menubar {
    background-color: #185e65;
    border: 1px solid #185e65;
    border-radius: 0px !important;
  }

  .dropdown {
    width: 25vh;
  }

  .country-item {
    display: flex;
  }

  .p-dropdown {
    border: 1px solid #90745c !important;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .inputSearch {
    background-color: #5d8e93;
    border: 1px solid #185e65;
  }

  .p-menubar {
    background-color: #185e65;
    border: 1px solid #185e65;
  }

  .p-menubar-mobile-active {
    transition: 2s !important;
  }

  .dropdown {
    width: 25vh;
  }

  .p-dropdown {
    border: 1px solid #90745c !important;
  }

  .country-item {
    display: flex;
  }
}
</style>

<style>
/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  ul {
    background-color: #185e65;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .pi-bars {
    transition: 0.5s;
  }

  .p-menubar-mobile-active .pi-bars {
    transform: rotate(90deg);
  }
}
</style>
