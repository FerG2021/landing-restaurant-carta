<template>
  <div>
    <Toast />

    <Dialog
      v-model:visible="display"
      icon="pi pi-refresh"
      :style="{ width: '80%' }"
      class="flex justify-content-center card-detalle"
      :draggable="false"
    >
      <div class="contenedor-spinner" v-if="loading == true">
        <ProgressSpinner
          aria-label="Basic ProgressSpinner"
          style="margin: auto"
        />
      </div>

      <div style="margin-top: 5px; width: 100%" v-else>
        <div class="contenedor-imagen">
          <Image
            v-if="producto.imageID != 'null'"
            :src="producto.image"
            alt="Image"
            width="40"
            preview
            class="ver-imagen"
            imageStyle="border-radius: 8px; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);padding: 3px; width: 100%; border-radius: 20px"
          />
        </div>
        <!-- <img :src="producto.image" alt="" srcset="" class="imagen-detalle" /> -->

        <h3 style="nombre-detalle">
          <b>{{ producto.name }}</b>
        </h3>

        <p>$ {{ producto.price }}</p>

        <p>Descripición</p>

        <p class="descripcion-detalle">{{ producto.description }}</p>
      </div>
    </Dialog>
  </div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { helpers } from "@vuelidate/validators";

export default {
  setup: () => ({ v$: useVuelidate() }),

  data() {
    return {
      display: false,
      submitted: false,
      isFormValid: false,
      loadingBtnGuardar: false,
      loading: true,

      // variables
      producto: null,
      subcategoria: null,
      categoria: null,
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

  methods: {
    abrir(categoria, subcategoria, producto) {
      this.loading = true;

      this.submitted = false;
      this.display = true;
      // this.isFormValid = false;

      console.log("categoria");
      console.log(categoria);
      this.categoria = categoria;

      console.log("subcategoria");
      console.log(subcategoria);
      this.subcategoria = subcategoria;

      console.log("producto");
      console.log(producto);
      this.producto = producto;

      this.loading = false;

      this.resetForm();
    },

    cerrar() {
      this.$toast.add({
        severity: "error",
        summary: "Ventana cerrada con éxito",
        detail: "Message Content",
        life: 3000,
      });
      this.display = false;
    },

    handleSubmit(isFormValid) {
      console.log("isFormValid");
      console.log(isFormValid);

      this.isFormValid = isFormValid;
      console.log("entro");

      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      this.toggleDialog();
    },

    toggleDialog() {
      console.log("entro");
      this.showMessage = !this.showMessage;

      this.guardar();

      // if (!this.showMessage) {
      //   this.resetForm();
      // } else {
      //   this.guardar();
      // }
    },

    resetForm() {
      this.nombre = "";
      this.email = "";
      this.rating = null;
      this.descripcion = null;
      this.loadingBtnGuardar = false;
      this.submitted = false;
    },

    async guardar() {
      let params = {
        nombre: this.nombre,
        email: this.email,
        valoracion: this.rating,
        descripcion: this.descripcion,
      };

      await this.axios.post("/api/resenia", params).then((response) => {
        console.log(response.data);
        if (response.data.code == 200) {
          this.$toast.add({
            severity: "success",
            summary: "Mensaje de confirmación",
            detail: "Reseña generada con éxito",
            life: 3000,
          });

          this.display = false;
          this.$emit("actualizarTabla");
        } else {
          console.log("response.data.data");
          console.log(response.data.data);

          this.$toast.add({
            severity: "error",
            summary: "Se ha producido un error",
            detail: response.data.data,
            life: 5000,
          });

          // for (const property in response.data.data) {
          //   this.$toast.add({
          //     severity: "error",
          //     summary: "Se ha producido un error",
          //     detail: `${response.data.data[property]}`,
          //     life: 5000,
          //   });
          // }
        }
      });

      this.loadingBtnGuardar = false;
    },
  },
};
</script>

<style scoped>
/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .card-detalle {
    width: 20% !important;
  }
  .field {
    margin-bottom: 1.5rem;
  }

  .header {
    margin: 0px !important;
  }

  .p-dialog {
    border-radius: 30% !important;
    background: #fff;
  }

  .p-inputtext {
    background: #fff;
    color: #000;
  }

  .imagen-detalle {
    width: 100%;
    border-radius: 20px;
  }

  .nombre-detalle {
    color: #000;
    font-weight: bold !important;
  }

  .descripcion-detalle {
    color: var(--description);
  }

  .contenedor-imagen {
    display: flex;
  }

  .ver-imagen {
    margin: auto;
    width: 40%;
    height: 40%;
  }

  .p-image-preview-indicator {
    width: 100%;
    border-radius: 20px !important;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .field {
    margin-bottom: 1.5rem;
  }

  .header {
    margin: 0px !important;
  }

  .p-dialog {
    border-radius: 30% !important;
    background: #fff;
  }

  .p-inputtext {
    background: #fff;
    color: #000;
  }

  .imagen-detalle {
    width: 100%;
    border-radius: 20px;
  }

  .nombre-detalle {
    color: #000;
    font-weight: bold !important;
  }

  .descripcion-detalle {
    color: var(--description);
  }

  .contenedor-imagen {
    display: flex;
  }

  .ver-imagen {
    margin: auto;
  }
}
</style>
