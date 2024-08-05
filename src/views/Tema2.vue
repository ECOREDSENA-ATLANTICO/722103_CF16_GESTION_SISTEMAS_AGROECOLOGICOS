<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Características de las razas de acuerdo con la especie pecuaria

    .row.justify-content-center.align-items-center(data-aos="fade-down-right")
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-5.fnd-10.p-4.tarjeta
          .col-lg-6.p-2
            figure 
              img(src='@/assets/curso/temas/tema2/img-1.svg', alt='Imagen Decorativa') 
          .col-lg-6.p-2
            p Es importante aclarar que el sector pecuario hace referencia a aquellas actividades de índole económico que se encuentran directamente relacionadas con la cría de animales usados en la alimentación y en los diferentes procesos de producción.
            p Dentro de las principales características de este sector se encuentran:
            ul.lista-ul--color
              li.mb-0 
                i.fas.fa-circle.nar
                | Se integran con la ganadería.	  
              li.mb-0 
                i.fas.fa-circle.nar
                | Este sector es una fuente de ingresos para el entorno rural.
              li.mb-0 
                i.fas.fa-circle.nar
                | Se integra con un subsector denominado sector agropecuario.                               

        .row.justify-content-center.align-items-center.mb-5.fondo-5.pl-5
          .col-lg-6.p-5.fnd-11
            p Como actividades fundamentales que desarrolla este están: 
            ul.lista-ul--color
              li.mb-0 
                i.fas.fa-circle.nar
                | Explotación de animales en general.
              li.mb-0 
                i.fas.fa-circle.nar
                | Explotación de porcinos (cerdo).
              li.mb-0 
                i.fas.fa-circle.nar
                | Explotación de bovinos (vaca, toro…).
              li.mb-0 
                i.fas.fa-circle.nar
                | Explotación de ovinos (oveja).
            p Ahora, se revisa en detalle cada una de ellas.          
          .col-lg-6.p-5
            figure 
              img(src='@/assets/curso/temas/tema2/img-2.svg', alt='Imagen Decorativa') 



    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-up-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        h3 Razas porcinas <br>
        p.mb-0 Son animales pesados y redondos, con un hocico prominente, con patas cortas y dotados de pezuñas, con cola pequeña, piel gruesa y de acuerdo con la raza es el pelaje y coloración.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right")
      .col-lg-10
        p Para conocer las diferentes categorías de razas porcinas se debe revisar con atención la siguiente información:

        ImagenInfograficaB.color-acento-botones.dott2
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-4.png', alt='Muestra las categorías de las razas porcinas de acuerdo con el pelaje y su coloración: Reproductoras o maternas Reproductoras de carne Mixtas Rustica')
              

          div(x="8%" y="38.4%" tooltip="Reproductoras o maternas")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6
                .nube1
                  img(src='@/assets/curso/temas/tema2/nube1.png')
                .nube2
                  img(src='@/assets/curso/temas/tema2/nube2.png')
                .row.justify-content-center.align-items-center.mb-5.p-5
                  h5.text-center.cont-1 Reproductoras o maternas 
                  p Son razas muy especializadas en parámetros reproductivos, prolíficas (lechones nacidos/hembra), lecheras y con amplia aptitud maternal.
              .col-lg-6
                figure 
                  img(src='@/assets/curso/temas/tema2/img-5.png', alt='Imagen Decorativa') 
          div(x="8%" y="60.1%" tooltip="Reproductoras de carne")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6
                .nube1
                  img(src='@/assets/curso/temas/tema2/nube1.png')
                .nube2
                  img(src='@/assets/curso/temas/tema2/nube2.png')
                .row.justify-content-center.align-items-center.mb-5.p-5
                  h5.text-center.cont-1 Reproductoras de carne 
                  p También denominadas líneas padres se caracterizan por su velocidad de crecimiento (gramos). Índice de conversión de los alimentos (kg de alimentos necesarios para ganar 1 kg de peso vivo). Rendimiento en canal (kg de peso de canal /kg de peso vivo del animal). Carnes magras utilizadas para el consumo.
              .col-lg-6
                figure 
                  img(src='@/assets/curso/temas/tema2/img-6.png', alt='Imagen Decorativa') 
          div(x="85%" y="38.4%" tooltip="Mixtas")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6
                .nube1
                  img(src='@/assets/curso/temas/tema2/nube1.png')
                .nube2
                  img(src='@/assets/curso/temas/tema2/nube2.png')
                .row.justify-content-center.align-items-center.mb-5.p-5
                  h5.text-center.cont-1 Mixtas 
                  p Estas razas presentan  una combinación de caracteres maternales y de producción de carne Aquí cabe citar las razas <i>Landrace, Large White y Duroc</i>.

              .col-lg-6
                figure 
                  img(src='@/assets/curso/temas/tema2/img-7.png', alt='Imagen Decorativa') 
          div(x="85%" y="60.1%" tooltip="Rústicas")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6
                .nube1
                  img(src='@/assets/curso/temas/tema2/nube1.png')
                .nube2
                  img(src='@/assets/curso/temas/tema2/nube2.png')
                .row.justify-content-center.align-items-center.mb-5.p-5
                  h5.text-center.cont-1 Rústicas 
                  p Hace referencia a aquellas razas que se han desarrollado por la influencia del medio en donde viven. Por su rusticidad y perfecta adaptación al medio, no se considera necesario mejorarlas.
              .col-lg-6
                figure 
                  img(src='@/assets/curso/temas/tema2/img-8.png', alt='Imagen Decorativa') 





    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-up-left")
      .col-lg-12
        .tarjeta.p-3.fnd-12
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img-9.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Descripción de cada raza porcina 
                  p.text-white En el siguiente documento se podrán conocer a profundidad las características fundamentales de cada una de las razas en esta categoría. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Descripcion de cada raza porcina.pdf')" target="_blank" type="application/pdf")
                    span Enlace
                    i.fas.fa-link



    .row.justify-content-center.align-items-center(data-aos="fade-down-right")
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-5.fnd-9-.p-5
          .col-lg-8
            h3 Razas de ganado 
            p Los bovinos se dividen en dos grandes grupos: los <em>bos taurus</em>, animales de origen europeo pesados y de gran tamaño, pocos precoces de gran estatura y fortaleza especialistas para la producción de leche y carne. Los <em>bos indicus</em> son animales de origen asiático de crecimiento lento (muy poca precocidad), son de gran tamaño con extremidades largas, de pelo corto con giba, cola y orejas grandes y largas. Estos dos están dispersos a nivel mundial y son utilizados según sus características, tanto así que se han realizado cruzamientos entre estos para buscar sus mejores beneficios. 
          .col-lg-4.p-5
            figure 
              img(src='@/assets/curso/temas/tema2/img-10.svg', alt='Imagen Decorativa') 

    p En el siguiente recurso educativo se presentan las diferentes razas de ganado:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zidCbklKp-w?si=4W0itVQp3RWh1HtF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.fnd-9-
        .row.justify-content-center.align-items-center.p-4
          .col-lg-8
            h3 Pollos de engorde
            p.mb-0 Las líneas (cruce de varias razas) de pollo de engorde más utilizadas en Colombia son <i> Cobb, Hubbard, Ross, Arbor Acres, Star Bro, Hy Bro, Peterson e Indian River.</i> Estas se caracterizan por su alta productividad, aunque son muy susceptibles al clima y los sonidos, y tienen muy buena conversión alimenticia.
          .col-lg-4 
            figure 
              img(src='@/assets/curso/temas/tema2/img-11-.svg', alt='Imagen Decorativa') 

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
