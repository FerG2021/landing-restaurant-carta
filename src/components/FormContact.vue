<template>
    <div
        class="contenedor-form animate__animated animate__fadeInUp"
    >
        <form
            @submit.prevent="handleSubmit(!v$.$invalid)"
            class="p-fluid form"
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
                    >
                        Nombre
                    <span style="color: red">*</span></label>
                </div>
                <small
                    v-if="
                        (v$.nombre.$invalid && submitted) ||
                        v$.nombre.$pending.$response
                    "
                    class="p-error"
                >
                    {{ v$.nombre.required.$message.replace("Value", "Nombre")}}
                </small>
            </div>

            <!-- Descripicion -->
            <div class="field mt-30">
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
                    >
                        Email 
                        <span style="color: red">*</span>
                    </label>
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
            <div class="field mt-30">
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
            <div class="field mt-30">
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
                >
                    Descripción 
                    <span style="color: red">*</span>
                </label>
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
                class="p-button-rounded btn-guardar"
                severity="danger"
                :loading="loadingBtnGuardar"
            />
        </form>
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
                submitted: false,
                isFormValid: false,

                // form
                nombre: "",
                email: "",
                rating: null,
                descripcion: null,

                loadingBtnGuardar: false,
            }
        },

        validations() {
            return {
                nombre: {
                    required: helpers.withMessage("El nombre es requerido", required),
                },

                email: {
                    required: helpers.withMessage("El email es requerido", required),
                },

                rating: {
                    required: helpers.withMessage("El precio es requerido", required),
                },

                descripcion: {
                    required: helpers.withMessage("La descripición es requerida", required),
                },
            };
        },

        methods: {
            handleSubmit(isFormValid) {
                this.isFormValid = isFormValid;
                this.submitted = true;
                if (!isFormValid) {
                    return;
                }
                this.toggleDialog();
            },

            toggleDialog() {
                this.showMessage = !this.showMessage;
                this.guardar();
            },

            async guardar() {
                this.loadingBtnGuardar = true;

                let params = {
                    nombre: this.nombre,
                    email: this.email,
                    valoracion: this.rating,
                    descripcion: this.descripcion,
                };

                await this.axios.post("/api/resenia", params).then((response) => {
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
                        this.$toast.add({
                            severity: "error",
                            summary: "Se ha producido un error",
                            detail: response.data.data,
                            life: 5000,
                        });
                    }
                });

                this.loadingBtnGuardar = false;

                // limpiar campos
                this.nombre = "";
                this.email = "";
                this.rating = null;
                this.descripcion = null;
            },
        },
    }
</script>

<style>
    @import url('../assets/colors.css');

    /*  */
    /* WEB */
    /*  */
    @media all and (min-width: 961px) {
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
            background-color: var(--primary);
            box-shadow: none;
            margin-bottom: 20px;
            border: 1px solid var(--primary);
        }

        .btn-guardar:active {
            margin: auto;
            color: #fff;
            width: 100%;
            background-color: var(--secondary) !important;
            box-shadow: none;
            border: 1px solid var(--secondary);
        }

        .btn-guardar:hover {
            margin: auto;
            color: #fff;
            width: 100%;
            background-color: var(--secondary) !important;
            box-shadow: none;
            border: 1px solid var(--secondary);
        }

        .btn-guardar:focus {
            margin: auto;
            color: #fff;
            width: 100%;
            background-color: var(--secondary) !important;
            box-shadow: none;
            border: 1px solid var(--secondary);
        }

        .btn-guardar::after {
            margin: auto;
            color: #fff;
            width: 100%;
            background-color: var(--secondary) !important;
            box-shadow: none;
            border: 1px solid var(--secondary);
        }
    }   

    /*  */
    /* MOBILE */
    /*  */
    @media all and (max-width: 960px) { 
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
            background-color: var(--secondary) !important;
            box-shadow: none;
            border: 1px solid var(--secondary);
        }

        .btn-guardar:focus {
            margin: auto;
            color: #fff;
            width: 100%;
            background-color: var(--secondary) !important;
            box-shadow: none;
            border: 1px solid var(--secondary);
        }
    }

    .form {
        margin-top: 30px;
    }

    .mt-30 {
        margin-top: 30px;
    }
</style>