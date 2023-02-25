<template>
  <div>
    <Toast />

    <Dialog
      v-model:visible="display"
      icon="pi pi-refresh"
      :style="{ width: '80%' }"
      class="flex justify-content-center"
      :draggable="false"
    >
      <template #header icon="pi pi-refresh" style="margin: 0px" class="s">
        <h3 style="margin: 0px">
          <span class="material-icons">star</span> Escribir reseña
        </h3>
      </template>

      <div>
        <p style="text-align: center">
          Contanos tu experiencia en nuestro local, que te gustaría que mejoremos o simplemente algo que quieras decirnos, lo tendremos en cuenta para mejorar nuestro servicio
        </p>
      </div>

      <div style="margin-top: 5px; width: 100%">
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
          <div class="field">
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
              {{
                v$.email.required.$message.replace("Value", "Email")
              }}
            </small>
          </div>

          <!-- Precio -->
          <div class="field">
            <div class="p-float-label">
              <Rating id="rating" v-model="rating" :cancel="false" style="width: 100%" />
            </div>
          </div>

          <!-- Descripicion -->
          <div class="field">
            <div class="p-float-label">
              <Textarea id="descripcion" v-model="descripcion" :autoResize="true" rows="5" cols="30" style="width: 100%"
                :class="{ 'p-invalid': v$.descripcion.$invalid && submitted }"/>
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
                v$.descripcion.required.$message.replace("Value", "descripcion")
              }}
            </small>
          </div>


          <Button
            label="Guardar"
            type="submit"
            class="mt-2"
            :loading="loadingBtnGuardar"
          />
        </form>
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

  methods: {
    abrir() {
      this.submitted = false;
      this.display = true;
      // this.isFormValid = false;
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
      }

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
</style>
