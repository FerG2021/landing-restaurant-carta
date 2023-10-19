<template>
  <div class="card-principal">
    <div class="contenedor-spinner" v-if="loading == true">
      <ProgressSpinner
        aria-label="Basic ProgressSpinner"
        class="progress-spinner"
      />
    </div>

    <div v-if="loading == false">
      <div class="contenedor-header">
        <CardHeader></CardHeader>

        <div class="contenedor-buscador animate__animated animate__fadeInUp">
          <div class="p-inputgroup">
            <InputText
              placeholder="Buscar"
              class="input-buscar"
              type="text"
              v-model="searchText"
              @change="getProductsSearch()"
            />
          </div>
        </div>
      </div>

      <div class="scroll-container" id="scroll-container">
        <div class="contenedor-spinner" v-if="loadingSearch == true">
          <ProgressSpinner
            aria-label="Basic ProgressSpinner"
            class="progress-spinner"
          />
        </div>

        <div
          class="contenedor-total animate__animated animate__fadeInUp"
          v-else
        >
          <div v-if="cantProductos === 0" class="contenedor-sin-datos">
            <div class="sin-datos">
              <h3 class="texto-sin-productos">Sin productos</h3>
            </div>
          </div>

          <div
            v-for="(categoria, index) in arrayCategories"
            :key="index"
            class="home"
            v-loading="loading"
            v-else
          >
            <AcordionItem :categoria="categoria"></AcordionItem>
          </div>
        </div>
      </div>

      <modal-resenia ref="modalResenia"></modal-resenia>
      <modal-detalles ref="modalDetalles"></modal-detalles>
      <ConfirmDialog></ConfirmDialog>
      <Toast />
    </div>
  </div>
</template>

<script>
import ModalResenia from "../modales/resenia.vue";
import ModalDetalles from "../modales/detalles.vue";
import CardHeader from "./CardHeader.vue";
import AcordionItem from "./AcordionItem.vue";

export default {
  name: "Home",

  components: {
    ModalResenia,
    ModalDetalles,
    CardHeader,
    AcordionItem,
  },

  data() {
    return {
      loading: true,
      loadingSearch: false,
      arraySubcategories: [],
      arrayCategories: [],
      arrayProducts: [],
      arrayProductsSearch: [],
      arrayCategoriesShow: [],
      searchText: null,
      cantProductos: null,
    };
  },

  created() {
    this.getSubcategories();
  },

  watch: {
    searchText() {
      this.getProductsSearch();
    },
  },

  methods: {
    async getSubcategories() {
      this.loading = true;
      await this.axios
        .get("/api/subcategoria-listar-todas")
        .then((response) => {
          if (response.data.code == 200) {
            this.arraySubcategories = response.data.data;
            this.getCategories();
          }
        });
    },

    async getCategories() {
      await this.axios.get("/api/categoria").then((response) => {
        if (response.data.code == 200) {
          this.arrayCategories = response.data.data;
          this.arrayCategoriesShow = this.arrayCategories;
          let arrayAux = [];

          this.arrayCategoriesShow.forEach((elemento) => {
            arrayAux = [];
            this.arraySubcategories.forEach((ele) => {
              if (elemento.id == ele.id_category) {
                arrayAux.push(ele);
              }
            });

            elemento.subcategorias = arrayAux;
          });
        }

        this.getProducts();
      });
    },

    async getProducts() {
      this.loadingSearch = true;

      await this.axios.get("/api/productoCarta").then((response) => {
        if (response.data.code == 200) {
          this.arrayProducts = [];

          response.data.data.forEach((elemento) => {
            if (elemento.stock == 1) {
              this.arrayProducts.push(elemento);
            }
          });
        }
      });

      this.constructProductArray();
    },

    constructProductArray() {
      this.cantProductos = this.arrayProducts.length;

      let arrayProductoAux = [],
        cantProductosCat = 0;
      this.arrayCategoriesShow.forEach((elemento) => {
        cantProductosCat = 0;

        elemento.subcategorias.forEach((ele) => {
          arrayProductoAux = [];
          this.arrayProducts.forEach((el) => {
            if (ele.id == el.id_category) {
              cantProductosCat++;
              el.cantidad = 0;
              arrayProductoAux.push(el);
            }
          });

          ele.productos = arrayProductoAux;
        });

        elemento.cantProductosCat = cantProductosCat;
      });

      this.arrayProductsSearch = this.arrayProducts;

      this.loading = false;
      this.loadingSearch = false;
    },

    getProductsSearch() {
      this.arrayProductsSearch =
        this.searchText !== ""
          ? this.arrayProducts.filter((element) =>
              element.name.toLowerCase().includes(this.searchText.toLowerCase())
            )
          : this.arrayProducts;

      this.cantProductos = this.arrayProductsSearch.length;

      let arrayProductoAux = [],
        cantProductosCat = 0;
      this.arrayCategoriesShow.forEach((elemento) => {
        cantProductosCat = 0;

        elemento.subcategorias.forEach((ele) => {
          arrayProductoAux = [];
          this.arrayProductsSearch.forEach((el) => {
            if (ele.id == el.id_category) {
              cantProductosCat++;
              el.cantidad = 0;
              arrayProductoAux.push(el);
            }
          });

          ele.productos = arrayProductoAux;
        });

        elemento.cantProductosCat = cantProductosCat;
      });
    },
  },
};
</script>

<style scoped lang="scss">
/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .card-principal {
    background-color: var(--background);
    .contenedor-spinner {
      display: flex;
      height: 100%;
      align-items: center;
      margin: auto;
      .progress-spinner {
        margin: auto;
      }
    }

    .contenedor-header {
      position: fixed;
      width: 100%;
      height: 18vh;
      margin-top: 0px;
      z-index: 10;
      background-color: var(--background-primary);
      .contenedor-buscador {
        display: flex;
        height: 8vh;
        background-color: var(--background-primary);
        .p-inputgroup {
          width: 30%;
          height: 65%;
          margin: auto;
          .input-buscar {
            border-radius: 16px !important;
            border: 1px solid var(--background);
          }
        }
      }
    }

    .scroll-container {
      padding: 14px;
      padding-left: 10vh;
      padding-right: 10vh;
      margin-top: 18vh;
      height: 100%;
      position: absolute;
      z-index: 1;
      display: flex;
      width: 100%;
      .contenedor-spinner {
        display: flex;
        align-items: center;
        height: 100vh;
        .progress-spinner {
          margin: auto;
        }
      }
      .contenedor-total {
        margin: auto;
        width: 100%;
        height: 100vh;
        .contenedor-sin-datos {
          margin: auto;
          display: flex;
          width: 100%;
          .sin-datos {
            margin: auto;
            .texto-sin-productos {
              text-align: center;
              color: var(--primary);
            }
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
  .card-principal {
    background-color: var(--background);
    .progress-spinner {
      margin: auto;
    }

    .contenedor-header {
      position: fixed;
      width: 100%;
      height: 18vh;
      margin-top: 0px;
      z-index: 10;
      background-color: var(--background-primary);
      .contenedor-buscador {
        display: flex;
        height: 8vh;
        background-color: var(--background-primary);
        .p-inputgroup {
          width: 80%;
          height: 65%;
          margin: auto;
          .input-buscar {
            border-radius: 16px !important;
            border: 1px solid var(--background);
          }
        }
      }
    }

    .scroll-container {
      padding: 14px;
      margin-top: 18vh;
      height: 100%;
      position: absolute;
      z-index: 1;
      display: flex;
      width: 100%;
      .contenedor-spinner {
        display: flex;
        height: 100%;
        align-items: center;
        margin: auto;
        .progress-spinner {
          margin: auto;
        }
      }
      .contenedor-total {
        margin: auto;
        width: 100%;
        height: 100vh;
        .contenedor-sin-datos {
          margin: auto;
          display: flex;
          width: 100%;
          .sin-datos {
            margin: auto;
            .texto-sin-productos {
              text-align: center;
              color: var(--primary);
            }
          }
        }
      }
    }
  }
}
</style>
