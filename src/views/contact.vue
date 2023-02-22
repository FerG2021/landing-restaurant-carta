<template>
  <div v-if="$store.state.idioma.code == 'ES'">
    <h1 class="separador-titulo">Contactame</h1>
    <div class="contacto">
      <div class="contacto-contenido">
        <i class="pi pi-whatsapp contacto-contenido-icono" id="i1"></i>
        <p class="contacto-contenido-titulo">WhatsApp</p>
        <Button
          label="Contactar"
          class="contacto-contenido-contactar"
          @click="contactarWhatsApp()"
        />
      </div>

      <div class="contacto-contenido">
        <i class="pi pi-linkedin contacto-contenido-icono" id="i2"></i>
        <p class="contacto-contenido-titulo">Linkedin</p>
        <!-- <a href="https://www.linkedin.com/in/fernandogonzalez2021/" class="contacto-contenido-contactar" target="_blank">Contactar</a> -->
        <Button
          label="Contactar"
          class="contacto-contenido-contactar"
          @click="contactarLinkedin()"
        />
      </div>

      <div class="contacto-contenido">
        <i class="pi pi-comment contacto-contenido-icono" id="i3"></i>
        <p class="contacto-contenido-titulo">Gmail</p>
        <Button
          label="Contactar"
          class="contacto-contenido-contactar"
          @click="contactarGmail()"
        />
      </div>
    </div>
  </div>

  <div v-if="$store.state.idioma.code == 'IN'">
    <h1 class="separador-titulo">Contact me</h1>
    <div class="contacto">
      <div class="contacto-contenido">
        <i class="pi pi-whatsapp contacto-contenido-icono" id="i1"></i>
        <p class="contacto-contenido-titulo">WhatsApp</p>
        <Button
          label="Contact"
          class="contacto-contenido-contactar"
          @click="contactarWhatsApp()"
        />
      </div>

      <div class="contacto-contenido">
        <i class="pi pi-linkedin contacto-contenido-icono" id="i2"></i>
        <p class="contacto-contenido-titulo">Linkedin</p>
        <!-- <a href="https://www.linkedin.com/in/fernandogonzalez2021/" class="contacto-contenido-contactar" target="_blank">Contactar</a> -->
        <Button
          label="Contact"
          class="contacto-contenido-contactar"
          @click="contactarLinkedin()"
        />
      </div>

      <div class="contacto-contenido">
        <i class="pi pi-comment contacto-contenido-icono" id="i3"></i>
        <p class="contacto-contenido-titulo">Gmail</p>
        <Button
          label="Contact"
          class="contacto-contenido-contactar"
          @click="contactarGmail()"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {};
  },

  methods: {
    async contactarWhatsApp() {
      let mensaje = `¡Hola Fernando!"`;

      mensaje = mensaje + "\n";

      mensaje =
        mensaje +
        " Te envío este mensaje porque estoy interesado en contactarme con vos por motivos laborales, por favor contactame a la brevedad ";

      mensaje = mensaje + "\n";

      mensaje = mensaje + "¡¡¡Saludos!!!";

      let url = encodeURI("https://wa.me/" + 3843407142 + "?text=" + mensaje);

      window.open(url, "_blank");
    },

    async contactarLinkedin() {
      let url = "https://www.linkedin.com/in/fernandogonzalez2021/";

      window.open(url, "_blank");
    },

    async contactarGmail() {
      let url = "mailto:fernandojaviergonzalez2018@gmail.com";

      window.open(url, "_blank");
    },
  },
};
</script>

<style>
.fondo {
  background-color: #090909;
}

.card {
  background-color: #141414;
  border-radius: 0px;
}

/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .saludo {
    text-align: center;
    margin-top: 40px;
  }

  .nombre {
    color: #90745c;
    font-size: calc(1em + 1vw);
  }

  .contenedor-info {
    padding: 30px;
  }

  .mail {
    font-size: 30px;
    text-decoration: none;
    padding: 30px;
    color: #fff;
  }

  .mail:hover {
    font-size: 30px;
    text-decoration: none;
    color: #90745c;
  }

  .mail-icono {
    font-size: 30px;
    text-decoration: none;
    padding: 30px;
    color: #fff;
  }

  .p-button-text{
    padding: 0px;
    margin: 0px;
  }

  .separador-titulo {
    color: #90745c;
    text-align: center;
    font-size: 40px;
  }

  .contacto {
    display: flex;
  }

  .contacto-contenido {
    margin: auto;
    text-align: center;
    /* border: 1px solid red; */
    transition: 2s;
    height: 10vh;
  }

  .contacto-contenido:hover .contacto-contenido-icono {
    /* font-size: 5rem; */
    transition: 0.5s;

  }

  .contacto-contenido:hover #i1 {
    color: #25d366;
  }

  .contacto-contenido:hover #i2 {
    color: #0077b5;
  }

  .contacto-contenido:hover #i3 {
    color: #c71610;
  }

  .contacto-contenido-icono {
    color: #90745c;
    font-size: 3rem;
  }

  .contacto-contenido-titulo {
    font-size: 20px;
  }

  .contacto-contenido-contactar {
    text-decoration: none !important;
    color: white !important;
    background-color: #141414;
    border: 1px solid #141414;
  }

  .contacto-contenido-contactar:hover {
    text-decoration: none !important;
    background-color: #90745c !important;
    border: 1px solid #90745c !important;
    color: #141414 !important;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .saludo {
    text-align: center;
  }

  .nombre {
    color: #90745c;
    font-size: calc(1em + 1vw);
  }

  .separador-titulo {
    color: #90745c;
    text-align: center;
    font-size: calc(2em + 1vw);
  }

  .contacto-contenido {
    margin: auto;
    text-align: center;
    /* border: 1px solid red; */
    transition: 2s;
    height: 20vh;
  }

  .contacto-contenido-icono {
    color: #90745c;
    font-size: 3rem;
  }

  .contacto-contenido-titulo {
    font-size: 20px;
  }

  .contacto-contenido-contactar {
    text-decoration: none !important;
    color: white !important;
    background-color: #141414;
    border: 1px solid #141414;
  }
}
</style>
