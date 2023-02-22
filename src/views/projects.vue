<template>
  <div class="fondo">
    <div class="saludo">
      <div v-if="$store.state.idioma.code == 'ES'">
        <h1 class="nombre">Proyectos desarrollados</h1>
      </div>

      <div v-if="$store.state.idioma.code == 'IN'">
        <h1 class="nombre">Projects developed</h1>
      </div>
    </div>

    <!--  -->
    <!-- PROYECTOS DESARROLLADOS EN ESPAÑOL -->
    <!--  -->
    <div class="grid" v-if="$store.state.idioma.code == 'ES'">
      <div class="col align-content-center">
        <div style="display: flex">
          <div style="margin: auto">
            <Card style="width: 25em" class="card">
              <template #header>
                <img src="/modular.jpg" style="height: 15rem" />
              </template>
              <template #title> ModulAr SRL </template>
              <template #subtitle>
                <h4 style="margin: 0px; font-weight: normal">
                  Vue.js - Laravel
                </h4>
                <h4 style="margin: 0px; font-weight: normal">2022</h4>
              </template>
              <template #content>
                <p>
                  Empresa que ofrece servicios de construcción arquitectura e
                  ingeniería. El desarrollo se realizó para solucionar la
                  problemática de presupuestación, comparativa y toma de
                  decisiones con respecto a los materiales que se requieren
                  comprar como proceso previo a la construcción. Se envía por
                  mail el pedido de presupuestación de productos a los
                  proveedores dandole accedo al sistema para que sean ellos
                  mismos quienes cargan los precios
                </p>
                <p>User: superadmin1@yopmail.com</p>
                <p>Password: 1234</p>
              </template>
              <template #footer>
                <Button
                  icon="pi pi-check"
                  label="Acceder"
                  class="btn-acceder"
                  @click="accederModular()"
                />
                <!-- <Button
                icon="pi pi-times"
                label="Cancel"
                class="p-button-secondary"
                style="margin-left: 0.5em"
              /> -->
              </template>
            </Card>
          </div>
        </div>
      </div>
      <div class="col">
        <div style="display: flex">
          <div style="margin: auto">
            <Card style="width: 25em" class="card">
              <template #header>
                <img src="/laladecokids.jpg" style="height: 15rem" />
              </template>
              <template #title> Lala Deco Kids </template>
              <template #subtitle>
                <h4 style="margin: 0px; font-weight: normal">
                  Vue.js - Laravel
                </h4>
                <h4 style="margin: 0px; font-weight: normal">2022</h4>
              </template>
              <template #content>
                <p>
                  Empresa dedicada a la venta de artículos de primera infancia.
                  El desarrollo del software fue solicitado debido a que no se
                  contaba con uno para llevar la contabilidad, ventas, stock de
                  productos y estado de las cuntas corrientes de clientes,
                  además realizar el envío de comprobantes de compra y cuenta
                  corriente por WhatsApp, mail o descarga directa para poder
                  utilizar la menor cantidad posible de papel y acercar cada vez
                  más a los clientes a la tecnología
                </p>
                <p>User: angheredia</p>
                <p>Password: 1234</p>
              </template>
              <template #footer>
                <Button
                  icon="pi pi-check"
                  label="Acceder"
                  class="btn-acceder"
                  @click="accederLala()"
                />
                <!-- <Button
                icon="pi pi-times"
                label="Cancel"
                class="p-button-secondary"
                style="margin-left: 0.5em"
              /> -->
              </template>
            </Card>
          </div>
        </div>
      </div>
      <div class="col">
        <div style="display: flex">
          <div style="margin: auto">
            <Card style="width: 25em" class="card">
              <template #header>
                <img src="/nutrimarg.jpg" style="height: 15rem" />
              </template>
              <template #title> Nutrimarg balanceados </template>
              <template #subtitle>
                <h4 style="margin: 0px; font-weight: normal">
                  Laravel - Blade
                </h4>
                <h4 style="margin: 0px; font-weight: normal">2020 - 2021</h4>
              </template>
              <template #content>
                <p>
                  Nutrimarg balanceados es una firma que se dedica a la venta de
                  artículos de forrajería, productos agrícolas y de jardín. El
                  desarrollo del software fue solicitado debido a que no se
                  contaba con uno para llevar la contabilidad, ventas, stock de
                  productos con la dificultad de que los mismos se pueden vender
                  particionados, en bolsas completas o por cierta monto de
                  dinero; y estado de las cuentas corrientes de clientes,
                  permite descargar comprobantes de compra y cuenta corriente
                </p>
                <p class="texto-relleno">a</p>
                <p class="texto-relleno">a</p>
              </template>
              <template #footer>
                <Button
                  icon="pi pi-check"
                  label="Acceder"
                  class="btn-acceder"
                  @click="accederNutrimargLala()"
                />
              </template>
            </Card>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <!-- PROYECTOS DESARROLLADOS EN INGLES -->
    <!--  -->
    <div class="grid" v-if="$store.state.idioma.code == 'IN'">
      <div class="col align-content-center">
        <div style="display: flex">
          <div style="margin: auto">
            <Card style="width: 25em; height: 47em" class="card">
              <template #header>
                <img src="/modular.jpg" style="height: 15rem" />
              </template>
              <template #title> ModulAr SRL </template>
              <template #subtitle>
                <h4 style="margin: 0px; font-weight: normal">
                  Vue.js - Laravel
                </h4>
                <h4 style="margin: 0px; font-weight: normal">2022</h4>
              </template>
              <template #content>
                <p>
                  Company that offers construction architecture and engineering
                  services. The development was carried out to solve the problem
                  of budgeting, comparison and decision making with respect to
                  the materials that are required to be purchased as a process
                  prior to construction. The product budget request is sent by
                  email to the suppliers, giving them access to the system so
                  that they can charge the prices themselves.
                </p>
              </template>
              <template #footer>
                <Button
                  icon="pi pi-check"
                  label="Access"
                  class="btn-acceder"
                  @click="accederModular()"
                />
                <!-- <Button
                icon="pi pi-times"
                label="Cancel"
                class="p-button-secondary"
                style="margin-left: 0.5em"
              /> -->
              </template>
            </Card>
          </div>
        </div>
      </div>
      <div class="col">
        <div style="display: flex">
          <div style="margin: auto">
            <Card style="width: 25em; height: 47em" class="card">
              <template #header>
                <img src="/laladecokids.jpg" style="height: 15rem" />
              </template>
              <template #title> Lala Deco Kids </template>
              <template #subtitle>
                <h4 style="margin: 0px; font-weight: normal">
                  Vue.js - Laravel
                </h4>
                <h4 style="margin: 0px; font-weight: normal">2022</h4>
              </template>
              <template #content>
                <p>
                  Company dedicated to the sale of early childhood items. The
                  development of the software was requested because there was
                  not one to keep the accounting, sales, stock of products and
                  status of current customer accounts, in addition to sending
                  proofs of purchase and current account by WhatsApp, mail or
                  download to be able to use the least amount of paper possible
                  and bring customers closer to technology
                </p>
              </template>
              <template #footer>
                <Button
                  icon="pi pi-check"
                  label="Access"
                  class="btn-acceder"
                  @click="accederLala()"
                />
                <!-- <Button
                icon="pi pi-times"
                label="Cancel"
                class="p-button-secondary"
                style="margin-left: 0.5em"
              /> -->
              </template>
            </Card>
          </div>
        </div>
      </div>
      <div class="col">
        <div style="display: flex">
          <div style="margin: auto">
            <Card style="width: 25em" class="card">
              <template #header>
                <img src="/nutrimarg.jpg" style="height: 15rem" />
              </template>
              <template #title> Nutrimarg balanceados </template>
              <template #subtitle>
                <h4 style="margin: 0px; font-weight: normal">
                  Laravel - Blade
                </h4>
                <h4 style="margin: 0px; font-weight: normal">2020 - 2021</h4>
              </template>
              <template #content>
                <p>
                  Nutrimarg Balanceados is a firm dedicated to the sale of
                  fodder items, agricultural and garden products. The
                  development of the software was requested because there was no
                  one to keep the accounting, sales, stock of products with the
                  difficulty that they can be sold partitioned, in complete bags
                  or for a certain amount of money; and status of customer
                  checking accounts, allows you to download purchase receipts
                  and checking account
                </p>
              </template>
              <template #footer>
                <Button
                  icon="pi pi-check"
                  label="Access"
                  class="btn-acceder"
                  @click="accederNutrimargLala()"
                />
              </template>
            </Card>
          </div>
        </div>
      </div>
    </div>

    <div class="saludo">
      <div v-if="$store.state.idioma.code == 'ES'">
        <h1 class="nombre">Experiencias previas</h1>
      </div>

      <div v-if="$store.state.idioma.code == 'IN'">
        <h1 class="nombre">Previous experiencies</h1>
      </div>
    </div>

    <!--  -->
    <!-- EXPERIENCIAS PREVIAS EN ESPAÑOL -->
    <!--  -->
    <div class="card1" v-if="$store.state.idioma.code == 'ES'">
      <Timeline :value="events1" align="alternate" class="customized-timeline">
        <template #marker="slotProps">
          <span
            class="custom-marker shadow-2"
            :style="{ backgroundColor: slotProps.item.color }"
          >
            <i :class="slotProps.item.icon" style="padding: 5px"></i>
          </span>
        </template>
        <template #content="slotProps">
          <Card class="card">
            <template #title>
              <h3 style="margin: 0px">{{ slotProps.item.nombre }}</h3>
            </template>
            <template #subtitle>
              <h4 style="margin: 0px; font-weight: normal">
                {{ slotProps.item.subtitulo }}
              </h4>
              <h4 style="margin: 0px; font-weight: normal">
                {{ slotProps.item.fecha }}
              </h4>
            </template>
            <template #content>
              <!-- <img
              v-if="slotProps.item.image"
              src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
              :alt="slotProps.item.name"
              width="200"
              class="shadow-2"
            /> -->
              <p>
                {{ slotProps.item.descripcion }}
              </p>
              <!-- <Button label="Read more" class="p-button-text"></Button> -->
            </template>
          </Card>
        </template>
      </Timeline>
    </div>

    <!--  -->
    <!-- EXPERIENCIAS PREVIAS EN INGLES -->
    <!--  -->
    <div class="card1" v-if="$store.state.idioma.code == 'IN'">
      <Timeline
        :value="events1Ingles"
        align="alternate"
        class="customized-timeline"
      >
        <template #marker="slotProps">
          <span
            class="custom-marker shadow-2"
            :style="{ backgroundColor: slotProps.item.color }"
          >
            <i :class="slotProps.item.icon" style="padding: 5px"></i>
          </span>
        </template>
        <template #content="slotProps">
          <Card class="card">
            <template #title>
              <h3 style="margin: 0px">{{ slotProps.item.nombre }}</h3>
            </template>
            <template #subtitle>
              <h4 style="margin: 0px; font-weight: normal">
                {{ slotProps.item.subtitulo }}
              </h4>
              <h4 style="margin: 0px; font-weight: normal">
                {{ slotProps.item.fecha }}
              </h4>
            </template>
            <template #content>
              <!-- <img
              v-if="slotProps.item.image"
              src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
              :alt="slotProps.item.name"
              width="200"
              class="shadow-2"
            /> -->
              <p>
                {{ slotProps.item.descripcion }}
              </p>
              <!-- <Button label="Read more" class="p-button-text"></Button> -->
            </template>
          </Card>
        </template>
      </Timeline>
    </div>
  </div>

  <!--  -->
  <!-- ESPAÑOL -->
  <!--  -->
  <div v-if="$store.state.idioma.code == 'ES'">
    <div class="saludo">
      <div>
        <h1 class="nombre">Estudios</h1>
      </div>
    </div>

    <div class="grid">
      <div class="col-4 titulo-seccion-estudios">Universitarios</div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>

    <div class="grid">
      <div class="col-4"></div>
      <div class="col-8 item-seccion-estudios">
        <ul>
          <li>
            Estudiante avanzado de Licenciatura en Sistemas de Información (UNSE
            - Santiago del Estero)
          </li>
          <li>Cursado de materias finalizado</li>
          <li>
            5 materias para alcanzar título de Analista en Sistemas de
            Información
          </li>
        </ul>
      </div>
    </div>

    <div class="grid">
      <div class="col-4 titulo-seccion-estudios">Extras</div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>

    <div class="grid">
      <div class="col-4"></div>
      <div class="col-8 item-seccion-estudios">
        <ul>
          <li>
            4 años de inglés en Centro de Cultura Inglesa Tornquist (Quimilí,
            Santiago del Estero)
          </li>
          <li>12 años de inglés en escuela</li>
        </ul>
      </div>
    </div>

    <div class="grid">
      <div class="col-4 titulo-seccion-estudios">Primarios y secundarios</div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>

    <div class="grid">
      <div class="col-4"></div>
      <div class="col-8 item-seccion-estudios">
        <ul>
          <li>
            Primario completo (Colegio Madre Teresa de Calcuta, SALTA - Colegio
            Mariano Moreno, BUENOS AIRES - Escuela Provincia de San Luis,
            Quimilí, SANTIAGO DEL ESTERO)
          </li>
          <li>
            Secundario completo (Colegio de Escuelas Pías LI-6, Quimilí,
            SANTIAGO DEL ESTERO)
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!--  -->
  <!-- INGLES -->
  <!--  -->
  <div v-if="$store.state.idioma.code == 'IN'">
    <div class="saludo">
      <div>
        <h1 class="nombre">Studies</h1>
      </div>
    </div>

    <div class="grid">
      <div class="col-4 titulo-seccion-estudios">Acedemic</div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>

    <div class="grid">
      <div class="col-4"></div>
      <div class="col-8 item-seccion-estudios">
        <ul>
          <li>
            Advanced student of Bachelor of Information Systems (UNSE -Santiago
            del Estero)
          </li>
          <li>Subject course completed</li>
          <li>
            5 subjects to achieve the title of Systems Analyst Information
          </li>
        </ul>
      </div>
    </div>

    <div class="grid">
      <div class="col-4 titulo-seccion-estudios">Extras</div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>

    <div class="grid">
      <div class="col-4"></div>
      <div class="col-8 item-seccion-estudios">
        <ul>
          <li>
            4 years of English at the Tornquist English Culture Center
            (Quimilí,Santiago del Estero)
          </li>
          <li>12 years of English in school</li>
        </ul>
      </div>
    </div>

    <div class="grid">
      <div class="col-4 titulo-seccion-estudios">Primaries and secondaries</div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>

    <div class="grid">
      <div class="col-4"></div>
      <div class="col-8 item-seccion-estudios">
        <ul>
          <li>
            Complete primary (Colegio Madre Teresa de Calcutta, SALTA - Colegio
            Mariano Moreno, BUENOS AIRES - San Luis Province School, Quimili,
            SANTIAGO DEL ESTERO)
          </li>
          <li>
            Complete high school (Colegio de Escuelas Pías LI-6, Quimilí,
            SANTIAGO DEL ESTERO)
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      events1: [
        {
          nombre: "Macamedia",
          subtitulo: "Empresa de desarrollo de software",
          fecha: "2022",
          icon: "pi pi-code",
          color: "#90745c",
          descripcion:
            "Desarrollador front end VueJs durante un año y medio, con sistemas de gestión de socios de un club de primera división del futbol argentino; de colectivos de larga y media distancia;  de correo, envío y recepción de cartas y paquetes; y de distribuidoras, para el control, compra y venta de stock",
        },
        {
          nombre: "ModulAr",
          subtitulo: "Proyecto freelance",
          fecha: "2022",
          icon: "pi pi-code",
          color: "#90745c",
          descripcion:
            "Desarrollo full stack utilizando VueJs para desarrollar el front y Laravel para la API, donde se realizó una integración completa para un mejor funcionamiento de todo el sistema, con las tecnologías más óptimas para responder a todas las necesidades del cliente. El mismo permite tener un control de stock de productos, proveedores, planes de trabajo; generar las provisiones para de esta manera solicitar al proveedor los precios de los productos dandole acceso a este último con un solo click en un link que se envía mediante email",
        },
        {
          nombre: "Lala Deco Kids",
          subtitulo: "Proyecto freelance",
          fecha: "2022",
          icon: "pi pi-code",
          color: "#90745c",
          descripcion:
            "Desarrollo full stack utilizando VueJs para desarrollar el front y Laravel para la API. En el mismo permite gestionar cuentas corrientes, stock de productos, compras y ventas y comprobantes de compras, ventas, y cuentas corrientes generando PDFs, enviando los mismos por WhatsApp, mail o descarga local, de esta manera se evita la generacíon de tickets y se acerca a los clientes cada vez más a la tecnología",
        },
        {
          nombre: "Lala Deco Kids",
          subtitulo: "Proyecto freelance",
          fecha: "2021",
          icon: "pi pi-code",
          color: "#90745c",
          descripcion:
            "Desarrollo full stack utilizando Laravel para realizar la API y Blade como motor de plantillas para el front. En el mismo permite gestionar cuentas corrientes, stock de productos, compras y ventas y comprobantes de compras, ventas, y cuentas corrientes generando PDFs",
        },
        {
          nombre: "Nutrimarg Balanceados",
          subtitulo: "Proyecto freelance",
          fecha: "2020",
          icon: "pi pi-code",
          color: "#90745c",
          descripcion:
            "Desarrollo full stack utilizando Laravel para realizar la API y Blade como motor de plantillas para el front. En el mismo permite gestionar cuentas corrientes, stock de productos, compras y ventas y comprobantes de compras, ventas, y cuentas corrientes generando PDFs",
        },
      ],
      events1Ingles: [
        {
          nombre: "Macamedia",
          subtitulo: "Empresa de desarrollo de software",
          fecha: "2022",
          icon: "pi pi-code",
          color: "#90745c",
          descripcion:
            "Front end VueJs developer for a year and a half, with partner management systems for a first division Argentine soccer club; long and medium distance buses; mail, sending and receiving letters and packages; and distributors, for the control, purchase and sale of stock",
        },
        {
          nombre: "ModulAr",
          subtitulo: "Proyecto freelance",
          fecha: "2022",
          icon: "pi pi-code",
          color: "#90745c",
          descripcion:
            "Full stack development using VueJs to develop the front and Laravel for the API, where a complete integration was carried out for a better functioning of the entire system, with the most optimal technologies to respond to all customer needs. It allows to have a stock control of products, suppliers, work plans; generate the provisions in order to request the supplier the prices of the products giving him access to the latter with a single click on a link that is sent by email",
        },
        {
          nombre: "Lala Deco Kids",
          subtitulo: "Proyecto freelance",
          fecha: "2022",
          icon: "pi pi-code",
          color: "#90745c",
          descripcion:
            "Full stack development using VueJs to develop the front and Laravel for the API. In it, it allows you to manage current accounts, stock of products, purchases and sales and proof of purchases, sales, and current accounts by generating PDFs, sending them by WhatsApp, mail or local download, thus avoiding the generation of tickets and brings customers closer to technology",
        },
        {
          nombre: "Lala Deco Kids",
          subtitulo: "Proyecto freelance",
          fecha: "2021",
          icon: "pi pi-code",
          color: "#90745c",
          descripcion:
            "Full stack development using Laravel to make the API and Blade as template engine for the front. It allows you to manage checking accounts, stock of products, purchases and sales and proof of purchases, sales, and checking accounts by generating PDFs",
        },
        {
          nombre: "Nutrimarg Balanceados",
          subtitulo: "Proyecto freelance",
          fecha: "2020",
          icon: "pi pi-code",
          color: "#90745c",
          descripcion:
            "Full stack development using Laravel to make the API and Blade as template engine for the front. It allows you to manage checking accounts, stock of products, purchases and sales and proof of purchases, sales, and checking accounts by generating PDFs",
        },
      ],
      events2: ["2020", "2021", "2022", "2023"],
    };
  },

  methods: {
    accederModular() {
      let url = encodeURI("http://modular.balanceado.com.ar");
      window.open(url, "_blank");
    },

    accederLala() {
      let url = encodeURI("http://lalakids.balanceado.com.ar");
      window.open(url, "_blank");
    },

    accederNutrimargLala() {
      let url = encodeURI(
        "https://drive.google.com/drive/folders/1AYNb50NBRFMounpcIWwANYDjMANa1JIG?usp=sharing"
      );
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

.btn-acceder {
  border-radius: 0px;
}

.p-card-footer {
  margin: 0px !important;
}

.custom-marker {
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 50%;
  z-index: 1;
}

.texto-relleno{
  color: #141414;
}

.card:hover .texto-relleno{
  color: #212121 ;
}

/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .separador {
    margin: 30px;
  }

  .saludo {
    text-align: center;
    margin-top: 40px;
  }

  .nombre {
    color: #90745c;
    font-size: 40px;
  }

  .subtitulo {
    color: #fff;
    font-size: 30px;
    padding-left: 10px;
  }

  .img-descripcion {
    margin-top: 20px;
    display: flex;
  }

  .div-img {
    margin: auto;
  }

  .img {
    height: 50vh;
    margin: auto;
    padding: 10px;
  }

  .div-descripcion {
    margin: auto;
    /* border: 1px solid red; */
  }

  .descripcion {
    padding: 10px;
    text-align: center;
  }

  .div-eleccion {
    display: flex;
  }

  .eleccion {
    width: 33%;
    /* margin: auto; */
    /* border: 1px solid red; */
  }

  .eleccion-contenido {
    text-align: center;
    padding: 10px;
    word-wrap: break-word;
  }

  /* .card {
    background-color: #090909;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    border: 1px solid #90745c;
    height: 100%;
    word-wrap: break-word;
  } */

  .card:hover {
    background-color: #212121;
  }

  .card-titulo {
    color: #90745c;
    font-size: calc(1em + 0.5vw);
  }

  .card-contenido {
    font-size: calc(0.5em + 0.5vw);
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
  }

  .contacto-contenido:hover .contacto-contenido-icono {
    font-size: 5rem;
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
  }

  .contacto-contenido-contactar:hover {
    text-decoration: none !important;
    color: #90745c !important;
  }

  .titulo-seccion-estudios {
    font-size: calc(1em + 1vw);
    padding: 20px;
  }

  .item-seccion-estudios {
    font-size: calc(0.7em + 0.5vw);
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
    font-size: 40px;
  }

  .img-descripcion {
    display: block;
  }

  .div-img {
    margin: auto;
  }

  .img {
    height: 50vh;
    display: block;
    margin: auto;
  }

  .div-descripcion {
    margin: auto;
    /* border: 1px solid red; */
  }

  .descripcion {
    padding: 10px;
    text-align: center;
  }

  .div-eleccion {
    display: block;
  }

  .eleccion {
    margin: auto;
  }

  .eleccion-contenido {
    text-align: center;
    padding: 20px;
  }

  .card {
    background-color: #090909;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    border: 1px solid #90745c;
    min-height: 55vh;
  }

  .card:hover {
    background-color: #212121;
  }

  .card-titulo {
    color: #90745c;
  }

  .separador-titulo {
    color: #90745c;
    text-align: center;
    font-size: 40px;
  }

  .contacto {
    display: block;
  }

  .contacto-contenido {
    margin: auto;
    text-align: center;
    /* border: 1px solid red; */
    transition: 2s;
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
  }

  .contacto-contenido-contactar:hover {
    text-decoration: none !important;
    color: #90745c !important;
  }

  .p-timeline-event:nth-child(even) {
    flex-direction: row !important;
  }

  .p-timeline-event-opposite {
    flex: 0;
  }

  .p-card {
    margin-top: 1rem;
  }
}
</style>
