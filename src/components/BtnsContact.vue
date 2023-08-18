<template>
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
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },

        methods: {
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
                let mensaje = `¡Hola FSSolutions!"`;

                mensaje = mensaje + "\n";

                mensaje =
                    mensaje +
                    " Te envío este mensaje porque estoy interesado adquirir sus productos ";

                mensaje = mensaje + "\n";

                mensaje = mensaje + "¡¡¡Saludos!!!";

                let url = encodeURI("https://wa.me/" + 5493843401553 + "?text=" + mensaje);

                window.open(url, "_blank");
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
            background-color: var(--primary) !important;
            border: 1px solid var(--primary) !important;
        }

        .btn-redes-sociales:active {
            background-color: var(--secondary);
            border: 1px solid var(--primary);
        }
    }

    /*  */
    /* MOBILE */
    /*  */
    @media all and (max-width: 960px) { 
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
            background-color: var(--primary) !important;
            border: 1px solid var(--primary) !important;
        }

        .btn-redes-sociales:active {
            background-color: var(--secondary);
            border: 1px solid var(--primary);
        }
    }
</style>