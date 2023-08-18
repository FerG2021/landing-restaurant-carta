<template>
<Accordion :multiple="true">
    <AccordionTab 
        :header="categoria.name"
        v-if="
            categoria.subcategorias.length > 0 &&
            categoria.cantProductosCat > 0
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
                style="padding: 7px"
            >
            <div
                class="carta-producto"
                @click="
                $refs.modalDetalles.abrir(
                    categoria,
                    subcategoria,
                    producto
                )
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
        }
    },
    components: { ModalDetalles }
}
</script>

<style>

</style>