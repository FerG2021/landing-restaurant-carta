<template>
  <Button
    :label="data.label"
    class="p-button-raised p-button-text p-button-rounded btn-comenzar"
    icon="pi pi-angle-right"
    iconPos="right"
  ></Button>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .btn-comenzar {
    margin: auto;
    color: #fff;
    width: 40%;
    background-color: var(--secondary);
    box-shadow: none;
    margin-bottom: 20px;
  }

  .btn-comenzar:hover {
    margin: auto;
    color: #fff !important;
    width: 40%;
    background-color: var(--secondary);
    box-shadow: none;
    margin-bottom: 20px;
  }

  .btn-comenzar:active {
    margin: auto;
    color: #fff !important;
    width: 40%;
    background-color: var(--secondary);
    box-shadow: none;
    margin-bottom: 20px;
  }

  .btn-comenzar::after {
    margin: auto;
    color: #fff !important;
    width: 40%;
    background-color: var(--secondary);
    box-shadow: none;
    margin-bottom: 20px;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .btn-comenzar {
    margin: auto;
    color: #fff;
    width: 80%;
    background-color: var(--secondary);
    box-shadow: none;
    margin-bottom: 20px;
  }

  .btn-comenzar:active {
    margin: auto;
    color: #fff;
    width: 80%;
    background-color: var(--secondary);
    box-shadow: none;
  }

  .btn-comenzar::after {
    margin: auto;
    color: #fff;
    width: 80%;
    background-color: var(--secondary);
    box-shadow: none;
  }
}
</style>