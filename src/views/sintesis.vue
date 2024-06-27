<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Uno de los aspectos fundamentales en el proceso de explotación pecuaria es conocer el contexto genético de los animales, esto permite identificar sus características para seleccionarlos y realizar los cruzamientos adecuados para que las especies reproducidas sean aptas para procesos de producción efectivos y representan una entrada económica significativa.
    p El objetivo de este espacio de formación es, entonces, dar a conocer todos los elementos, características y variables que se deben tener en cuenta durante el proceso de selección y cruzamiento de las diferentes razas que se encuentran en el sector pecuario.
    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema:


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
