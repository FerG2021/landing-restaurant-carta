<template>
  <Accordion :multiple="true">
    <AccordionTab
      :header="categoria.name"
      v-if="
        categoria.subcategorias.length > 0 && categoria.cantProductosCat > 0
      "
      class="mt-10"
    >
      <div
        v-for="(subcategoria, index) in categoria.subcategorias"
        :key="index"
        style="z-index: 1"
      >
        <div v-if="subcategoria.productos.length > 0">
          <h2 class="subcategorias">{{ subcategoria.name }}</h2>

          <div
            v-for="(producto, index) in subcategoria.productos"
            :key="index"
            class="contenedor-carta"
          >
            <div
              class="carta-producto"
              @click="
                $refs.modalDetalles.abrir(categoria, subcategoria, producto)
              "
            >
              <div class="imagen-producto">
                <Image
                  v-if="producto.imageID != 'null'"
                  :src="producto.image"
                  alt="Image"
                  width="40"
                  class="ver-imagen"
                  imageStyle="border-radius: 8px; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);padding: 3px; height: 6vh; width: 6vh; margin: auto"
                />

                <img
                  v-else
                  src="../../assets/productosinimagen.png"
                  class="producto-sin-imagen"
                />
              </div>
              <div class="descripcion-producto">
                <div class="descripcion-producto-nombre">
                  <p>{{ producto.name }}</p>
                </div>
                <div class="descripcion-producto-detalles">
                  <p>
                    <b>$ {{ producto.price }}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccordionTab>
  </Accordion>

  <modal-detalles ref="modalDetalles"></modal-detalles>

  <ConfirmDialog></ConfirmDialog>
  <Toast />
</template>

<script>
import ModalDetalles from "../modales/detalles.vue";

export default {
  props: {
    categoria: {
      type: Object,
      required: true,
    },
  },
  components: { ModalDetalles },
};
</script>

<style scoped lang="scss">
.mt-10 {
  margin-top: 10px;
  border: 1px solid red;
}
/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .subcategorias {
    color: #000;
    font-size: 16px;
  }

  .contenedor-carta {
    padding: 7px;
    .carta-producto {
      width: 100%;
      border-radius: 20px;
      height: 12vh;
      display: flex;
      padding: 10px;
      background: #fff;
      flex-direction: row;
      cursor: pointer;
      .imagen-producto {
        color: #000;
        margin: auto;
        width: 10%;
        display: flex;
        .ver-imagen {
          margin-left: 15px;
          margin: auto;
        }
        .producto-sin-imagen {
          color: #000;
          margin: auto;
          width: 50%;
          display: flex;
        }
      }
      .descripcion-producto {
        color: #000;
        margin: auto;
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        /* border: 1px solid red; */
        .descripcion-producto-nombre {
          color: #000;
          width: 100%;
          height: 100%;
          p {
            margin: 0px;
          }
        }
        .descripcion-producto-detalles {
          color: #000;
          width: 100%;
          height: 100%;
          p {
            margin: 0px;
            font-weight: bold;
          }
        }
      }
    }
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .subcategorias {
    color: #000;
    font-size: 16px;
  }

  .contenedor-carta {
    padding: 7px;
    .carta-producto {
      width: 100%;
      border-radius: 20px;
      height: 12vh;
      display: flex;
      padding: 10px;
      background: #fff;
      flex-direction: row;
      .imagen-producto {
        color: #000;
        margin: auto;
        width: 30%;
        /* border: 1px solid red; */
        display: flex;
        .ver-imagen {
          margin-left: 15px;
          /* margin: auto; */
        }
      }
      .producto-sin-imagen {
        height: 6vh;
        width: 6vh;
        margin: auto;
        /* border: 1px solid red; */
        margin-left: 15px;
      }
      .descripcion-producto {
        color: #000;
        margin: auto;
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .descripcion-producto-nombre {
          color: #000;
          width: 100%;
          height: 100%;
          p {
            margin: 0px;
          }
        }
        .descripcion-producto-detalles {
          color: #000;
          width: 100%;
          height: 100%;
          p {
            margin: 0px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>