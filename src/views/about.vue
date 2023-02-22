<template>
  <div style="width: 100%">
    <div v-if="$store.state.idioma.code == 'ES'">
      <h1 class="nombre">Sobre mi</h1>
    </div>

    <div v-if="$store.state.idioma.code == 'IN'">
      <h1 class="nombre">About me</h1>
    </div>

    <!--  -->
    <!-- ESPAÑOL -->
    <!--  -->
    <div class="contenedor" v-if="$store.state.idioma.code == 'ES'">
      <h2 class="subtitulo">Perfil profesional</h2>

      <div class="div-perfil-profesional-icon">
        <i class="pi pi-code perfil-profesional-icon"></i>
      </div>

      <div class="descripcion">
        Formar parte de una empresa en la que pueda poner en práctica todos mis
        conocimientos y que me ofrezca la oportunidad de crecer en el área
        laboral, personal e intelectual
      </div>

      <h2 class="subtitulo">Habilidades</h2>

      <div class="div-perfil-profesional-icon">
        <i class="pi pi-bolt perfil-profesional-icon"></i>
      </div>

      <!-- Descripcion para web -->
      <div class="descripcion2">
        <!-- Formar parte de una empresa en la que pueda poner en práctica todos mis
      conocimientos y que me ofrezca la oportunidad de crecer en el área
      laboral, personal e intelectual -->

        <div>
          <h5 style="margin: 0px">HTML</h5>
          <ProgressBar :value="html" :showValue="true" />
        </div>

        <div style="margin-top: 10px">
          <h5 style="margin: 0px">CSS</h5>
          <ProgressBar :value="css" :showValue="true" />
        </div>

        <div style="margin-top: 10px">
          <h5 style="margin: 0px">JAVASCRIPT</h5>
          <ProgressBar :value="js" :showValue="true" />
        </div>

        <div style="margin-top: 10px">
          <h5 style="margin: 0px">VUE</h5>
          <ProgressBar :value="vue" :showValue="true" />
        </div>

        <div style="margin-top: 10px">
          <h5 style="margin: 0px">LARAVEL</h5>
          <ProgressBar :value="laravel" :showValue="true" />
        </div>
      </div>

      <!-- Descripcion para mobile -->
      <div class="descripcion2-mobile">
        <h4 class="item-habiliadades-mobile">
          <i class="pi pi-check"></i>
          Trabajo en equipo
        </h4>

        <h4 class="item-habiliadades-mobile">
          <i class="pi pi-check"></i>
          Resilencia
        </h4>

        <h4 class="item-habiliadades-mobile">
          <i class="pi pi-check"></i>
          Adaptable a cambios
        </h4>

        <h4 class="item-habiliadades-mobile">
          <i class="pi pi-check"></i>
          Autogestión
        </h4>

        <h4 class="item-habiliadades-mobile">
          <i class="pi pi-check"></i>
          Responsabilidad
        </h4>

        <h4 class="item-habiliadades-mobile">
          <i class="pi pi-check"></i>
          Creatividad
        </h4>
      </div>
    </div>

    <!--  -->
    <!-- INGLES -->
    <!--  -->
    <div class="contenedor" v-if="$store.state.idioma.code == 'IN'">
      <h2 class="subtitulo">Professional profile</h2>

      <div class="div-perfil-profesional-icon">
        <i class="pi pi-code perfil-profesional-icon"></i>
      </div>

      <div class="descripcion">
        Being part of a company where I can put into practice all my knowledge and that offers me the opportunity to grow in the area work, personal and intellectual
      </div>

      <h2 class="subtitulo">Skills</h2>

      <div class="div-perfil-profesional-icon">
        <i class="pi pi-bolt perfil-profesional-icon"></i>
      </div>

      <!-- Descripcion para web -->
      <div class="descripcion2">
        <!-- Formar parte de una empresa en la que pueda poner en práctica todos mis
      conocimientos y que me ofrezca la oportunidad de crecer en el área
      laboral, personal e intelectual -->

        <div>
          <h5 style="margin: 0px">HTML</h5>
          <ProgressBar :value="html" :showValue="true" />
        </div>

        <div style="margin-top: 10px">
          <h5 style="margin: 0px">CSS</h5>
          <ProgressBar :value="css" :showValue="true" />
        </div>

        <div style="margin-top: 10px">
          <h5 style="margin: 0px">JAVASCRIPT</h5>
          <ProgressBar :value="js" :showValue="true" />
        </div>

        <div style="margin-top: 10px">
          <h5 style="margin: 0px">VUE</h5>
          <ProgressBar :value="vue" :showValue="true" />
        </div>

        <div style="margin-top: 10px">
          <h5 style="margin: 0px">LARAVEL</h5>
          <ProgressBar :value="laravel" :showValue="true" />
        </div>
      </div>

      <!-- Descripcion para mobile -->
      <div class="descripcion2-mobile">
        <h4 class="item-habiliadades-mobile">
          <i class="pi pi-check"></i>
          Trabajo en equipo
        </h4>

        <h4 class="item-habiliadades-mobile">
          <i class="pi pi-check"></i>
          Resilencia
        </h4>

        <h4 class="item-habiliadades-mobile">
          <i class="pi pi-check"></i>
          Adaptable a cambios
        </h4>

        <h4 class="item-habiliadades-mobile">
          <i class="pi pi-check"></i>
          Autogestión
        </h4>

        <h4 class="item-habiliadades-mobile">
          <i class="pi pi-check"></i>
          Responsabilidad
        </h4>

        <h4 class="item-habiliadades-mobile">
          <i class="pi pi-check"></i>
          Creatividad
        </h4>
      </div>
    </div>
  </div>

  <div class="contenedor-impar">
    <div>
      <h1 class="nombre" v-if="$store.state.idioma.code == 'ES'">Clientes</h1>

      <h1 class="nombre" v-if="$store.state.idioma.code == 'IN'">Clients</h1>

      <div class="card">
        <Carousel
          :value="products"
          :numVisible="1"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          class="custom-carousel"
          :circular="true"
          :autoplayInterval="3000"
        >
          <template #header> </template>
          <template #item="slotProps">
            <div class="product-item">
              <div class="product-item-content">
                <div class="product-item-content2">
                  <a :href="slotProps.data.url" target="_blank">
                    <img
                      :src="slotProps.data.img"
                      :alt="slotProps.data.name"
                      class="product-image"
                    />
                  </a>
                </div>
              </div>
              <div style="display: flex">
                <div style="margin: auto">
                  <!-- <h4 class="mb-1">{{ slotProps.data.name }}</h4> -->
                  <h3 style="text-align: center"><a :href="slotProps.data.url" target="_blank">{{
                    slotProps.data.name
                  }}</a></h3>
                  <h5 style="text-align: center"><a :href="slotProps.data.url" target="_blank">{{
                    slotProps.data.user
                  }}</a></h5>
                  <!-- <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6> -->
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>

  <div class="contenedor">
    <h2 class="subtitulo" v-if="$store.state.idioma.code == 'ES'">
      Tecnologías
    </h2>

    <h2 class="subtitulo" v-if="$store.state.idioma.code == 'IN'">
      Technologies
    </h2>


    <h4 style="padding: 10px" v-if="$store.state.idioma.code == 'ES'">
      Estas son algunas de las teconologías con las que trabajo
    </h4>

    <h4 style="padding: 10px" v-if="$store.state.idioma.code == 'IN'">
      These are some of the technologies I work with
    </h4>

    <div class="grid">
      <div class="col">
        <div style="display: flex">
          <div style="margin: auto" class="card-img">
            <img
              class="img-tecnologias"
              src="/tecnologias/htmllogo.png"
              alt=""
            />
            <p class="descripcion-img">HTML</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div style="display: flex">
          <div style="margin: auto" class="card-img">
            <img
              class="img-tecnologias"
              src="/tecnologias/csslogo.png"
              alt=""
            />
            <p class="descripcion-img">CSS</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div style="display: flex">
          <div style="margin: auto" class="card-img">
            <img
              class="img-tecnologias"
              src="/tecnologias/jslogo.png"
              alt=""
            />
            <p class="descripcion-img">JAVASCRIPT</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="col">
        <div style="display: flex">
          <div style="margin: auto" class="card-img">
            <img
              class="img-tecnologias"
              src="/tecnologias/vuelogo.png"
              alt=""
            />
            <p class="descripcion-img">VUE JS</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div style="display: flex">
          <div style="margin: auto" class="card-img">
            <img
              class="img-tecnologias"
              src="/tecnologias/phplogo.png"
              alt=""
            />
            <p class="descripcion-img">PHP</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div style="display: flex">
          <div style="margin: auto" class="card-img">
            <img
              class="img-tecnologias"
              src="/tecnologias/laravellogo.png"
              alt=""
            />
            <p class="descripcion-img">LARAVEL</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",

  data() {
    return {
      products: [
        {
          name: "Nutrimarg balanceados",
          img: "/nutrimarg.jpg",
          url: "https://drive.google.com/drive/u/0/folders/1AYNb50NBRFMounpcIWwANYDjMANa1JIG",
          user: "",
        },
        {
          name: "ModulAr SRL",
          img: "/modular.jpg",
          url: "http://modular.balanceado.com.ar",
          user: "User: superadmin1@gmail.com // Password: 1234",
        },
        {
          name: "Lala Deco Kids",
          img: "/laladecokids.jpg",
          url: "http://lalakids.balanceado.com.ar",
          user: "User: angheredia // Password: 1234",
        },
      ],

      html: 70,
      css: 70,
      js: 80,
      vue: 90,
      laravel: 75,
    };
  },
};
</script>

<style>
.p-carousel-indicators {
  background-color: #141414 !important;
  border: 1px solid #141414 !important;
}
</style>

<style scoped>
/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .contenedor {
    height: 100vh;
    width: 100% !important;
    /* border: 1px solid red; */
  }

  .contenedor-impar {
    height: 100vh;
    width: 100%;
    background-color: #141414;
    border: 1px solid #141414;
    padding-top: 20px;
  }

  .nombre {
    color: #90745c;
    font-size: 60px;
    text-align: center;
    padding: 0px;
    margin: 30px;
  }

  .subtitulo {
    color: #90745c;
    /* font-size: 40px; */
    font-size: calc(1em + 1vw);
    text-align: center;
    /* margin-top: 90px; */
  }

  .div-perfil-profesional-icon {
    text-align: center;
  }

  .perfil-profesional-icon {
    color: #90745c;
    font-size: 100px;
  }

  .descripcion {
    text-align: center;
    /* font-size: 40px; */
    font-size: calc(1em + 1vw);
    line-height: normal;
    padding: 10px;
  }

  .descripcion2 {
    /* text-align: center; */
    /* font-size: 40px; */
    font-size: calc(1em + 1vw);
    line-height: normal;
    padding: 10px;
  }

  .descripcion2-mobile {
    display: none;
  }

  .custom-carousel {
    margin-top: 30px !important;
  }

  .product-item-content {
    margin-top: 30px;
    border: 1px solid var(--surface-border);
    border-radius: 3px;
    margin: 0.3rem;
    text-align: center;
    padding: 2rem 0;
    /* width: 100%;
    display: flex;
    align-items: center; */
    display: flex;
    height: 50vh;
  }

  .product-item-content2 {
    margin: auto;
  }

  .product-image {
    height: 40vh;
    width: 60vh;
    align-items: center;
    /* margin: auto; */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  a {
    text-decoration: none;
    color: white;
    text-align: center;
  }

  .img-tecnologias {
    width: 30vh;
    height: 25vh;
    text-align: center;
    transition: 0.3s;
  }

  .descripcion-img {
    text-align: center;
    font-size: 20px;
  }

  .card-img {
    border: 4px solid #a68f7c;
    padding: 20px;
    width: 35vh;
    height: 40vh;
    transition: 0.3s;
    background-color: #141414;
  }

  .card-img:hover {
    border: 1px solid #90745c;
    padding: 20px;
    background-color: #a68f7c;

    /* background-color: rebeccapurple; */
  }

  .card-img:hover .img-tecnologias {
    width: 32vh;
    height: 27vh;
    text-align: center;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .contenedor {
    height: 100vh;
    width: 100% !important;

    /* border: 1px solid red; */
  }

  .contenedor-impar {
    height: 100vh;
    width: 100%;
    padding-top: 20px;
    background-color: #141414;
    /* border: 1px solid red; */
  }

  .nombre {
    color: #90745c;
    font-size: 60px;
    text-align: center;
    padding: 0px;
    margin: 10px;
  }

  .subtitulo {
    color: #90745c;
    font-size: 40px;
    text-align: center;
  }

  .div-perfil-profesional-icon {
    text-align: center;
  }

  .perfil-profesional-icon {
    color: #90745c;
    font-size: 50px;
  }

  .descripcion {
    text-align: center;
    /* font-size: 20px; */
    font-size: calc(1em + 1vw);
    padding: 10px;
    line-height: 30px;
  }

  .descripcion2 {
    text-align: center;
    /* font-size: 20px; */
    font-size: calc(1em + 1vw);
    padding: 10px;
    line-height: 30px;
    display: none;
  }

  .descripcion2-mobile {
    text-align: center;
    /* font-size: 20px; */
    font-size: calc(1em + 1vw);
    padding: 10px;
    line-height: 30px;
    list-style: none;
  }

  .item-habiliadades-mobile {
    margin: 0px;
    padding: 0px;
  }

  .product-item-content {
    border: 1px solid var(--surface-border);
    border-radius: 3px;
    margin: 0.3rem;
    text-align: center;
    padding: 2rem 0;
    /* width: 100%;
    display: flex;
    align-items: center; */
    display: flex;
    height: 50vh;
  }

  .product-item-content2 {
    margin: auto;
  }

  .product-image {
    height: 30vh;
    width: 100%;
    align-items: center;
    /* margin: auto; */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  a {
    text-decoration: none;
    color: white;
  }

  .card-img {
    border: 4px solid #a68f7c;
    padding: 20px;
    width: 35vh;
    height: 40vh;
    transition: 0.3s;
    background-color: #141414;
  }

  .img-tecnologias {
    width: 30vh;
    height: 25vh;
    text-align: center;
    transition: 0.3s;
  }

  .descripcion-img {
    text-align: center;
    font-size: calc(1em + 1vw);
  }
}
</style>
