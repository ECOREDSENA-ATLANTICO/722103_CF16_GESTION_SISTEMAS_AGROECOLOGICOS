<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Aspectos generales de los cruzamientos 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
          .col-lg-4
            figure 
              img(src='@/assets/curso/temas/tema3/img-1.svg', alt='Imagen Decorativa') 
          .col-lg-8
            p Los cruces son una herramienta útil para aumentar la productividad de las explotaciones pecuarias al combinar las características deseadas de las razas para la descendencia.
            p Es fundamental conocer algunos términos para entender los aspectos de los cruzamientos: la heterosis hace referencia al producto de un animal cruzado con respecto a sus progenitores puros, y el término de complementariedad está relacionado con el apareamiento entre razas para extraer los genes indeseables.
            p Es importante tener en cuenta que el ambiente no interviene, pues se busca el vigor híbrido (heterosis), por ello el cruce de razas se denomina mestizaje y el cruzamiento entre especies es hibridación. 

        .row.justify-content-center.align-items-center.mb-5.fnd-1(data-aos="fade-down")
          .col-lg-8.p-5
            p Otro aspecto importante es que siempre que se realice un cruce, se debe tener en cuenta la selección de animales y esta se debe seguir por generaciones para no retroceder el material genético; siempre se escogen razas que ya estén adaptadas al medio donde se quiere implementar la producción, el apareamiento debe complementarse por sus características deseadas y siempre se debe cruzar razas diferentes.
          .col-lg-4.p-3
            figure 
              img(src='@/assets/curso/temas/tema3/img-2.svg', alt='Imagen Decorativa') 

        p Al planear un programa de cruzamiento se deben tener en cuenta los siguientes aspectos:
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Planeación para cruzamientos

        
          
        .tarjeta--container.row
          .col-md.tarjeta.color-acento-botones.p-5.fnd-8           
            h4.text-center Métodos de selección.
            p.text-center Seleccionar por una característica, por ejemplo, por tamaño, producción de leche. Se puede hacer una selección escalonada.
          .col-md.tarjeta.color-acento-botones.p-5           
            h4.text-center Niveles de descarte
            p.text-center Si el animal falla y no cumple con los parámetros deseados se descarta.
          .col-md.tarjeta.color-acento-contenido.p-5            
            h4.text-center Selección por índice
            p.text-center Se seleccionan varias características y la sobresaliente compensa la inferior (progreso genético).

    Separador

    #t-3-1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Tipos de cruzamientos 


    p.mb-3 Dentro del proceso de reproducción existen diferentes formas de cruzamiento, por lo que se sugiere revisar el siguiente material:
    .row.justify-content-center.align-items-center.mb-5.fnd-9-(data-aos="fade-left")
      .col-lg-11
        ImagenInfograficaB.color-acento-botones.dott3
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img-3-.png',alt="Muestra los tipos de cruzamientos para un proceso de reproducción: De primera generación, Nueva raza compuesta, Sustitución racial, Cruces alternos")
              

          div(x="70.3%" y="19.2%" tooltip="De primera generación" numero="1")
            .row.justify-content-center.mb-5
              .col-lg-6.fnd-13.p-3
                figure 
                  img(src='@/assets/curso/temas/tema3/img-5.png', alt='Imagen Decorativa') 
              .col-lg-6.fnd-14.p-3
                h5 De primera generación 
                p Este cruce es entre hembra y macho los cuales aportan la mitad de su información genética, 50% y 50%. Su descendiente es un F1, este depende de los progenitores y desarrolla un vigor híbrido, por lo cual se utiliza para animales de venta comercial.

                figure 
                  img.img-420(src='@/assets/curso/temas/tema3/img-6.svg', alt='Imagen Decorativa') 

          div(x="78.1%" y="43.2%" tooltip="Nueva raza compuesta" numero="2")
            .row.justify-content-center.mb-5
              .col-lg-6.fnd-13.p-3
                figure 
                  img(src='@/assets/curso/temas/tema3/img-7.png', alt='Imagen Decorativa') 
              .col-lg-6.fnd-15.p-3
                h5 Nueva raza compuesta 
                p Este cruce se utiliza para crear una nueva raza de dos ya conocidas hasta obtener un 5/8 X 3/8 (37,55% – 62,5%) se debe tener en cuenta que se aparean las hembras de cada cruzamiento con toros diferentes sin salirse de las razas escogidas.

                figure 
                  img.img-420(src='@/assets/curso/temas/tema3/img-8.svg', alt='Imagen Decorativa') 

          div(x="59.2%" y="57.9%" tooltip="Sustitución racial" numero="3")
            .row.justify-content-center.mb-5
              .col-lg-6.fnd-13.p-3
                figure 
                  img(src='@/assets/curso/temas/tema3/img-9.png', alt='Imagen Decorativa') 
              .col-lg-6.fnd-16.p-3
                h5 Sustitución racial  
                p Este cruce busca absorber una raza después de la tercera generación, cuando la proporción es 90% o 15/16 se considera animal puro. Una de las ventajas es que se expresa el vigor híbrido, pero requiere aproximadamente 12 años y se necesita tener registros de reproducción. Con un alto nivel de descarte de hembras por la alta disgregación racial, pero con una alta presión de selección se logran fijar las características fenotípicas y productivas.

                figure 
                  img.img-420(src='@/assets/curso/temas/tema3/img-10.png', alt='Imagen Decorativa') 

          div(x="87.1%" y="77.2%" tooltip="Cruces alternos" numero="4")
            .row.justify-content-center.mb-5
              .col-lg-6.fnd-13.p-3
                figure 
                  img(src='@/assets/curso/temas/tema3/img-11.png', alt='Imagen Decorativa') 
              .col-lg-6.fnd-17.p-3
                h5.pp1 Cruces alternos
                p.pp1 La utilización de la heterosis para aprovechar y complementar las bondades de cada raza, puede utilizarse entre dos a cuatro razas en función de las habilidades productivas y adaptabilidad al medio ambiente de cada una. Muy utilizada en sistemas doble propósito, pues salen adaptadas al trópico.

                figure 
                  img.img-420(src='@/assets/curso/temas/tema3/img-12.png', alt='Imagen Decorativa') 

    Separador

    #t-3-2.titulo-segundo.color-acento-contenido(data-aos="fade-down")
      h2 3.2 Grupos subraciales 

    p Los grupos genéticos diferenciados, sean razas u otras estructuras subraciales como línea, estirpes y variedad, deben tener características heredables que los distingan y diferencien entre sí y del resto de las especies, por eso es importante conocer, por medio del siguiente material, la definición de esas estructuras para entenderlas y poder identificar al verlas en la vida productiva:
  


    ImagenInfografica.color-acento-botones.mb-5.dott4(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/img-4-.png', alt='Muestra el componente formativo de  estructuras subraciales como: Línea, Estirpes, Variedad')
          

      .tarjeta.color-acento-contenido.p-3(x="9.1%" y="66.4%" numero="+")
        .h5.mb-2 Línea
        p Son individuos logrados por consanguinidad, obtenidos por selección de caracteres deseables y los animales de una línea materna son diferentes a una línea paterna.
        p Un ejemplo común son los <i>boiler</i>, estos son obtenidos por cruzamientos de diferentes razas de línea madre (<i>White Plymouth Rock o New Hampshire</i>) y la línea padre (<i>White Cornish</i>) cada línea aporta sus características para conformar un solo individuo.


      .tarjeta.color-acento-botones.p-3(x="47.7%" y="25.9%" numero="+")
        .h5.mb-2 Estirpe
        p Animales de la misma raza que se reproducen de la misma manera por lo menos en cinco generaciones consecutivas. Es muy utilizada en la avicultura por la cantidad de aves que se manejan en los galpones para evitar que la consanguinidad sea alta y se preserve la uniformidad del grupo.


      .tarjeta.color-secundario.p-3(x="83.5%" y="64.1%" numero="+")
        .h5.mb-2 Variedad
        p Son animales de la misma raza, pero en las cuales se presenta una variación que permite distinguirlas, por ejemplo, la raza<i> Plymouth  rock</i>, donde el color de sus plumas y de cresta son representativos y los diferencia de los demás animales de su especie siempre sobre un carácter de morfología.







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
