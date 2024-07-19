<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la genética
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-right")
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4
            figure.mb-5
              img(src='@/assets/curso/temas/tema1/img-1.png', alt='Imagen Decorativa')


          .col-lg-8
            p Si se quiere entender la genética es importante conocer los trabajos realizados por <b>Gregor Johann Mendel</b> quien es considerado como uno de los padres de la dicha área de estudio, él quiso determinar el proceso de transmisión hereditaria y realizó varios experimentos con guisantes, para dar respuesta a los fundamentos de la transmisión de los caracteres biológicos que se establecen de generación en generación. Este monje austriaco estableció las leyes básicas de la herencia genética mucho antes de que el término “gen” fuera acuñado.

            .cajon.color-acento-contenido.p-4.mb-4.fnd-1
              p.mb-0 Las leyes de Mendel se pueden conocer revisando el siguiente material propuesto:

      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img-2.svg', alt='¿Qué son? Son reglas básicas sobre la transmisión por herencia genética de las características de los organismos padres a sus hijos. Se pueden determinar como el fundamento de la genética.	Ley de uniformidad: Esta ley dice que si se cruzan dos razas puras, la descendencia de la primera generación filial será fenotípicamente (físicamente) y genotípicamente igual entre sí. Ley de segregación: Las características a heredar se separan, yendo cada uno a un gameto distinto. Consiste en qué del cruce de dos individuos de la primera generación (Aa) tendrá lugar una segunda generación. Ley de independencia: Las características se transmiten entre generaciones de forma independiente unas con otras.  Por lo tanto, el patrón de herencia de un rasgo como el color de ojos no influye en la transmisión en el patrón de herencia de otro rasgo, como el color del pelo.')
    

    .row.justify-content-center.align-items-center.mb-5.fnd-2.p-5(data-aos="zoom-in-left")
      .col-lg-3
        figure
          img.img-321(src='@/assets/curso/temas/tema1/img-3-.svg', alt='Imagen Decorativa')
      .col-lg-9
        .row.align-items-center
          .col-lg-10
            p Por otro lado, es importante aclarar ciertos conceptos que permitan identificar de manera más clara el objetivo de la genética, entre los que se encuentran el <b>mendelismo complejo</b> que es considerado como una ley relacionada con el no cumplimiento de las leyes de Mendel la cual presenta los genes letales, alelelismo o herencia poligénica.
          .col-lg-2
            figure.mb-5
              img(src='@/assets/curso/temas/tema1/img-4.svg', alt='Imagen Decorativa')
        .row.justify-content-center.align-items-center
          .col-lg-10.fondo-i.fnd-1.p-5
            p.mb-0 Por otro lado, la<b> teoría cromosómica</b> de la herencia que fue descubierta por Thomas H. Morgan (1909) y determina que los genes están en los cromosomas de manera lineal, determinan los caracteres hereditarios y que hay uno para para cada cromosoma. Los genes son la unidad de la herencia y controlan las labores del cuerpo, estos se representan de una manera cualitativa (con baja influencia en el medio ambiente como el Rh) y las cuantitativas (alta influencia del medio ambiente como la producción de leche).

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-right")
      .col-lg-10.fnd-3.tarjeta
        .row.justify-content-center.align-items-center.mb-5
          p.pt-5.px-5 Es importante tener en cuenta que los genes actúan de igual forma, pero con diferente acción de la siguiente manera: 
          .col-lg-6
            .row.fnd-4.tarjeta
              p.mb-0 <b>● Dominancia:</b> este gen se expresa de acuerdo a su alelo y este puede ser completo, incompleto o sobre dominante (heterocigoto, perteneciente a células sexuales con diferentes dotaciones genéticas).
            .row.fnd-4.tarjeta
              p.mb-0 <b>● Aditividad:</b> el gen es independiente al alelo.
            .row.fnd-4.tarjeta
              p.mb-0 <b>● Epítasis:</b> este se influencia en otro alelo.

          .col-lg-5.blq-1
            figure
              img(src='@/assets/curso/temas/tema1/img-5.svg', alt='Imagen Decorativa')

    Separador

    #t-1-1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Herencia de caracteres


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-5-(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-6.png')})`}"
      )
      .bloque-texto-g__texto.p-4.fnd-5-1
        p.mb-0 La herencia es el resultado de las características que los seres vivos transmiten a sus progenitores, esta se da por medio de los genes del individuo, contiene la información en el cromosoma y se expresa en el ADN. Estos caracteres pueden visualizarse de cuatro formas de genes en el individuo que se exponen en el siguiente material: 
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-right")
      .col-lg-10
        p.text-black Haga clic en cada número para acceder a más información:
        ImagenInfografica.color-acento-botones.dott
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-7-.svg', alt='Genotipo, 1.	Hace referencia a la composición genética determinada por el ADN. 2.	Depende de la información hereditaria que es dada de un individuo a otro. 3.	Transmitido hereditariamente de los progenitores a su descendencia. 4.	Contiene toda la información hereditaria. 5.	Se detectan por medio de pruebas genéticas. Fenotipo 1.	Hace referencia a los rasgos observables, por ejemplo, color de ojos, de pelo, etc 2.	Depende del genotipo, el medio ambiente y la alimentación. 3.	La herencia influye parcialmente. 4.	Rasgos observables. 5.	Se detectan visualmente.')
              

          .tarjeta.color-acento-contenido.p-3(x="28.6%" y="21%" numero="1")
            .h5.mb-2 Gen dominante
            p Se conoce también como versión dominante, y hace referencia a los rasgos heredados que,  por diversos motivos, se manifiestan en mayor porcentaje y se observa en el fenotipo del animal. 

          .tarjeta.color-acento-contenido.p-3(x="74.2%" y="21.2%" numero="2")
            .h5.mb-2 Gen recesivo
            p Son los rasgos que se encuentran en el genoma, pero no se representan en el individuo por estar dominado por otro gen. Es decir,  que un gen recesivo <b>se expresa solo en ausencia del dominante.</b> En bovinos, un ejemplo de esto es el gen recesivo para color colorado.

          .tarjeta.color-acento-contenido.p-3(x="9.5%" y="67%" numero="3")
            .h5.mb-2 Gen codominante.
            p Para este caso se expresan ambos caracteres de igual manera, el recesivo y el dominante. Por ejemplo, al cruzar una <b>vaca blanca</b> con un <b>toro negro</b> y se obtienen descendientes con <b>manchas blancas y negras</b>.

          .tarjeta.color-acento-contenido.p-3(x="89.1%" y="67%" numero="4")
            .h5.mb-2 Gen intermedio o parcial
            p Para este caso el gen dominante no se manifiesta totalmente, es decir <b>expresa los dos alelos que posee el individuo, pero ninguno de ellos se observa como originalmente es, sino que se ve un fenotipo intermedio.</b> Por ejemplo, pollos naranja y pollos blancos se cruzan, y se obtienen pollos color amarillo.


    Separador

    #t-1-2.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      h2 1.2 Genotipo y fenotipo 
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-5-
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-8.png')})`}"
          )
          .bloque-texto-g__texto.p-4.fnd-5-1
            p.mb-0 El fenotipo se identifica con las características físicas y perceptibles al ojo humano de un individuo y los ejemplos más comunes son el color del pelo, longitud de los cuernos, peso del destete, entre otros. El fenotipo puede ser modificado por el ambiente pues este cambia en el transcurso de la vida de los animales como respuesta a los factores climáticos. En resumen, el fenotipo es genotipo + medio ambiente = fenotipo.

        p.mb-5  Para entender mejor la diferencia de estos dos términos, se invita a revisar con atención el siguiente recurso:
        .titulo-cuarto.color-acento-contenido
          h4 Diferencia entre genotipo y fenotipo     
        
        p Haga clic en cada número para acceder a más información:
        .row.fnd-2.p-3
          ImagenInfografica.color-acento-botones.mb-5.dott
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img-9.svg', alt='Imagen Decorativa')
                

            .tarjeta.color-acento-contenido.p-3(x="32.3%" y="8%" numero="1")
              p Hace referencia a la composición genética determinada por el ADN. 
            .tarjeta.color-acento-contenido.p-3(x="14.5%" y="19.7%" numero="2")
              p Depende de la información hereditaria que es dada de un individuo a otro.
            .tarjeta.color-acento-contenido.p-3(x="6.4%" y="47.9%" numero="3")
              p Transmitido hereditariamente de los progenitores a  su descendencia.
            .tarjeta.color-acento-contenido.p-3(x="14.4%" y="79.5%" numero="4")
              p Contiene toda la información hereditaria. 
            .tarjeta.color-acento-contenido.p-3(x="32.9%" y="91.7%" numero="5")
              p Se detectan por medio de pruebas genéticas. 

            .tarjeta.color-acento-contenido.fnd-6.p-3(x="67.7%" y="9.6%" numero="1")
              p Hace referencia a los rasgos observables, por  ejemplo color de ojos, de pelo, etc. 
            .tarjeta.color-acento-contenido.fnd-6.p-3(x="84.5%" y="19.7%" numero="2")
              p Depende del genotipo, el medio ambiente y la alimentación. 
            .tarjeta.color-acento-contenido.p-3.fnd-6(x="93.7%" y="47.9%" numero="3")
              p La herencia influye parcialmente.
            .tarjeta.color-acento-contenido.p-3.fnd-6(x="86.2%" y="80%" numero="4")
              p Rasgos observables.
            .tarjeta.color-acento-contenido.p-3.fnd-6(x="67.7%" y="91.7%" numero="5")
              p Se detectan visualmente.



    .row.justify-content-center.align-items-center(data-aos="zoom-in-right")
      .col-lg-12
        .img-fnd-flot
          img.b-img(src='@/assets/curso/temas/tema1/fnd-2.svg' alt='Background Image')
          .fl-box
            .row.align-items-center
              
              .col-lg-2
                  figure 
                    img.img-95(src='@/assets/curso/temas/tema1/img-10.svg', alt='Imagen Decorativa')
              .col-lg-10
                p.mb-0 Tenga en cuenta que en los grupos de animales las características genotípicas y fenotípicas se pueden evaluar más fácilmente, cuando se utilizan los diferentes cruces, pues la información de los genes se trasmite en los descendientes resultantes al pasar de generación en generación de acuerdo con las leyes mendelianas.

    Separador

    #t-1-3.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      h2 1.3 Selección y métodos 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-6
        p La selección es el proceso en el cual se obtienen o escogen los individuos de una generación para dejarlos como reproductores u otro fin. Este proceso permite elegir los animales con características genotípicas y fenotípicas deseables, para realizarlo se deben tener en cuenta dos pasos muy importantes, el primero consiste en la identificación del animal y segundo la selección del animal el cual será utilizado como padre para las siguientes generaciones.
        p Es importante escoger el animal de acuerdo con el color, tasa de crecimiento, condición corporal, producción de leche, índices reproductivos y productivos, entre otros conozcamos las producciones de selección:
      .col-lg-6
        figure 
          img(src='@/assets/curso/temas/tema1/img-11.png', alt='Imagen Decorativa')


    .row.justify-content-center.align-items-center.mb-5.fnd-7.p-5(data-aos="zoom-in-right")
      .col-lg-11
        figure 
          img(src='@/assets/curso/temas/tema1/img-12.png', alt='Imagen Decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4.fnd-1
          h3 Sistemas de selección:
          p La selección es una de las fuerzas que cambia la frecuencia genética de la población con una tasa reproductiva diferencial en el hato, mediante un proceso que permite a unos individuos reproducirse y a otros no.

        p Para conocer los diferentes sistemas de selección se invita a interactuar con el siguiente material:

    .row.justify-content-center.mb-3(data-aos="zoom-in-right")
      SlyderF(columnas="col-lg-6 col-xl-4")

        .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-13.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5 Selección masal o fenotípica 
              p En esta selección los animales son elegidos para la reproducción "teniendo en cuenta su propio fenotipo”; además, se tienen en cuenta sus diferentes méritos o desempeños. Dicha selección parte de los resultados de  diferentes pruebas de producción o comportamiento. 

        .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-14.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5 Selección por <em>pedigree</em>   
              p Es el registro de aquellos individuos que están emparentados o relacionados con el reproductor. La base genética se basa en que el individuo recibe la mitad de los genes del padre. Esta selección consiste en el registro de desempeño de los padres y así ver la capacidad de los individuos de descendencia.


        .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-15.png')})`}")
            .tarjeta-slide__contenido.pt-4.p-xl-5.px-5
              h5 Selección basada en los parientes colaterales (familia)
              p En esta selección se tiene en cuenta los parientes que no son descendientes y que tengan genes en común y que probablemente, se transmitirán en la descendencia. <br> Si la información sobre los parientes colaterales es completa puede dar luces sobre  las clases y combinaciones de genes que el individuo en cuestión probablemente posea. 


        .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-16.png')})`}")
            .tarjeta-slide__contenido.pt-4.p-xl-5.px-5
              h5 Selección por pruebas de progenie
              p Es una selección muy precisa y consiste en seleccionar animales de acuerdo con su descendencia para escoger los padres de los cuales se revisan características como peso al destete, condición corporal, entre otras.


    Separador

    #t-1-4.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      h2 1.4 Rusticidad 

    .row.justify-content-center(data-aos="zoom-in-left")
      .col-lg-10
        .crd_02.mb-5
          .crd_02__icon.dan
            img(src="@/assets/curso/temas/tema1/img-17.png", alt="alt")          
          .crd_02__txt
            p Este concepto dentro del entorno animal hace referencia al conjunto de características hereditarias que facilitan la adaptación del animal a las diferentes variaciones del medio ambiente, sin que se vea afectada su capacidad productiva.
            p La rusticidad se da a través de la selección natural y está relacionado con producción extensiva en donde el ser humano interviene muy poco; esta se da en ambientes naturales, es decir que el medio no se modifica, más bien es el animal el que debe adaptarse a las variaciones del medio.
            p La rusticidad es la capacidad que tiene el animal para:
    
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            figure.mb-3 
              img(src='@/assets/curso/temas/tema1/img-18.svg', alt='Imagen Decorativa')

          .col-lg-6 
            .row.align-items-center.fnd-9.justify-content-start.mb-3
              .col-2
                span.ltr 01 
              .col-10
                p.mt-2 Aminorar el déficit nutricional a partir de reservas corporales.
            .row.align-items-center.fnd-9.justify-content-start.mb-3
              .col-2
                span.ltr 02 
              .col-10
                p.mt-2 Adaptarse de manera armónica a los cambios del clima.

            .row.align-items-center.fnd-9.justify-content-start.mb-3
              .col-2
                span.ltr 03 
              .col-10
                p.mt-2 Acondicionar a los cambios que pueden tener los diferentes terrenos donde se encuentran.

            .row.align-items-center.fnd-9.justify-content-start.mb-3
              .col-2
                span.ltr 04
              .col-10
                p.mt-2 Resistir diferentes enfermedades o infecciones que pueden presentarse en el contexto donde se desenvuelve.         
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-8.fnd-1-.p-5
            p.mb-0 Adquirir las virtudes de rusticidad depende de las razas que se utilicen en las explotaciones, pues estas se adaptan mediante el sistema biológico que posee el animal, una de las especies más comunes en adquirir estos comportamientos son las especies bos indicus en los bovinos y los porcinos las razas <em>duroc</em>.                    


    Separador

    #t-1-5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5 Adaptabilidad 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-right")
      .col-lg-6
        p Es la capacidad de los animales de producción, para sobrevivir y ser eficiente en cualquier lugar o situación y esta se desarrolla frente a una necesidad biológica ambiental, además, es difícil de evaluar, pues no depende solo de la genética de la especie, sino de otras circunstancias que los rodea como, por ejemplo, el tipo de alimentación u otras actividades diarias que se realizan. Por lo general, es ajustar rápidamente una especie a un cambio repentino y casi siempre se relaciona con algo ambiental. 
        .cajon.color-acento-contenido.px-4.py-3.mb-4.fnd-1
          p.mb-0 Los animales que logran adaptarse se caracterizan por alta producción, buenas condiciones corporales, alta eficacia reproductiva, longevidad, entre otras.
        p A continuación los tres tipos de adaptabilidad.
      
      .col-lg-6
        figure 
          img(src='@/assets/curso/temas/tema1/img-19.png', alt='Imagen Decorativa')

    .row.justify-content-center.d-flex.align-items-stretch(data-aos="zoom-in-left")
      .col-lg-3.fnd-4-.p-3.col-3
        .row.justify-content-center.align-items-center
          .col-lg-8
            h5.text-center.mb-0 Biológica
          .col-lg-4
            figure 
              img.pt-1.pb-1(src='@/assets/curso/temas/tema1/img-20.svg', alt='Muestra en componente formativo los tipos de adaptabilidad: Biológica: características de que tiene en cuenta los cambios a nivel fenotípico y molecular que experimentan los organismos con el tiempo. Genética: características animales heredables que favorecen la supervivencia de una población en un medio determinado. En el contexto fisiológico la adaptación es utilizada para detallar el ajuste del ajuste del fenotipo de un organismo a su ambiente. Esto se llama adaptabilidad, adaptación fisiológica o aclimatación')
      .col-lg-3.fnd-4-.p-3.col-3
        .row.justify-content-center.align-items-center
          .col-lg-8
            h5.text-center.mb-0 Genética
          .col-lg-4
            figure 
              img(src='@/assets/curso/temas/tema1/img-21.svg', alt='Muestra en componente formativo los tipos de adaptabilidad: Biológica: características de que tiene en cuenta los cambios a nivel fenotípico y molecular que experimentan los organismos con el tiempo. Genética: características animales heredables que favorecen la supervivencia de una población en un medio determinado. En el contexto fisiológico la adaptación es utilizada para detallar el ajuste del ajuste del fenotipo de un organismo a su ambiente. Esto se llama adaptabilidad, adaptación fisiológica o aclimatación')
      .col-lg-3.fnd-4-.p-3.col-3
        .row.justify-content-center.align-items-center
          .col-lg-8
            h5.text-center.mb-0 Fisiológica 
          .col-lg-4
            figure 
              img(src='@/assets/curso/temas/tema1/img-22.svg', alt='Muestra en componente formativo los tipos de adaptabilidad: Biológica: características de que tiene en cuenta los cambios a nivel fenotípico y molecular que experimentan los organismos con el tiempo. Genética: características animales heredables que favorecen la supervivencia de una población en un medio determinado. En el contexto fisiológico la adaptación es utilizada para detallar el ajuste del ajuste del fenotipo de un organismo a su ambiente. Esto se llama adaptabilidad, adaptación fisiológica o aclimatación')              

    Separador

    #t-1-6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.6 Consanguinidad
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .img-fnd-flot2.mb-3
          img.b-img2(src='@/assets/curso/temas/tema1/img-23-.png' alt='Background Image')
          .fl-box2
            .b-img3
              img.b-img3.mb-3(src='@/assets/curso/temas/tema1/img-23.png' alt='Background Image')
            p.m-t Es la relación de genes cuando se aparean animales emparentados con antepasados comunes, por lo general hasta en cuatro generaciones esta puede traer consecuencias en los nuevos individuos. 
            p Los tipos de consanguinidad se profundizan en el siguiente material:
		
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10
        h3 Tipos de consanguinidad     
        p Haga clic sobre los tipos de consanguinidad para ver mas: 

      ImagenInfograficaB.color-secundario.dott
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img-24.svg', alt='Muestra los tipos de consanguinidad: Consanguinidad estrecha Esta se da cuando se aparean animales con características muy cercanas. Padre: hija, madre: hijo o hermanas: hermanos. Esta aumenta el grado de homocigosis (genes idénticos) dando como resultado que genes no deseables se expresen y poder eliminar con facilidad. Consanguinidad abierta Se aparean animales con un grado de parentesco más lejano. Tío: sobrino o medio hermano con hermana. Este se realiza para preservar una característica de una raza.')
            

        div(x="42.5%" y="92.6%" tooltip="Consanguinidad estrecha")
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-8
              figure 
                img(src='@/assets/curso/temas/tema1/img-25.png', alt='Imagen Decorativa') 
            .col-lg-4
              .row.justify-content-center.align-items-center.mb-5.fnd-3.p-5.tarjeta
                h5 Consanguinidad estrecha 
                p Esta se da cuando se aparean animales con características muy cercanas. Padre: hija, madre: hijo o hermanas: hermanos. Esta aumenta el grado de homocigosis (genes idénticos) dando como resultado que genes no deseables se expresen y poder eliminar con facilidad.

        div(x="79.8%" y="92.8%" tooltip="Consanguinidad abierta")
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-8
              figure 
                img(src='@/assets/curso/temas/tema1/img-26.png', alt='Imagen Decorativa') 
            .col-lg-4
              .row.justify-content-center.align-items-center.mb-5.fnd-3.p-5.tarjeta
                h5 Consanguinidad abierta 
                p Se aparean animales con un grado de parentesco más lejano. Tío: sobrino o medio hermano con hermana. Este se realiza para preservar una característica de una raza.



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
