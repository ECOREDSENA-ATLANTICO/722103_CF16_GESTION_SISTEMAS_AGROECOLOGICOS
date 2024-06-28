export default {
  global: {
    componenteFormativo: 'Cruzamiento en especies pecuarias',
    descripcionCurso:
      'Este componente formativo tiene como fin dar a conocer los fundamentos y los diferentes procesos en la implementación de la genética entre lo que están: selección, cruzamientos, especie animal, razas autóctonas y reproductoras, entre otros, los cuales pueden ser aplicados como estrategias en especies pecuarias para el proceso de explotaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la genética',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Herencia de caracteres',
            hash: 't-1-1',
          },
          {
            numero: '1.2',
            titulo: 'Genotipo y fenotipo ',
            hash: 't-1-2',
          },
          {
            numero: '1.3',
            titulo: 'Selección y métodos',
            hash: 't-1-3',
          },
          {
            numero: '1.4',
            titulo: 'Rusticidad',
            hash: 't-1-4',
          },
          {
            numero: '1.5',
            titulo: 'Adaptabilidad',
            hash: 't-1-5',
          },
          {
            numero: '1.6',
            titulo: 'Consanguinidad',
            hash: 't-1-6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Características de las razas de acuerdo con la especie pecuaria',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aspectos generales de los cruzamientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de cruzamientos',
            hash: 't-3-1',
          },
          {
            numero: '3.2',
            titulo: 'Grupos sub raciales',
            hash: 't-3-2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722103_CF16_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Fundamentos de la genética',
      referencia:
        'A Cierta Ciencia. (2019).<em> Las leyes de Mendel, cuadro de punnett paso a paso, explicación [fácil y rápido].</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LXXK2l1pdv8',
    },
    {
      tema: '3. Aspectos generales de los cruzamientos',
      referencia:
        'Audiovisuales UNED. (2017). <em>Sistema de cruzamientos en mejoramiento genético animal.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=o920FMa89Ts',
    },
    {
      tema: '3. Aspectos generales de los cruzamientos',
      referencia: 'Campus FCA-UNC. (2020). <em> Tipos de cruzamientos.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=996f42fGnZY',
    },
    {
      tema: '3. Aspectos generales de los cruzamientos',
      referencia:
        'Eve Paredes. (2020).<em> Líneas genéticas de pollos de engorde.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ffZpryvru6E',
    },
    {
      tema: '3. Aspectos generales de los cruzamientos',
      referencia:
        'Aves ornamentales. (2021). <em>Conozca cuáles son las 4 variedades de pollos de engorde más rentables en el mercado avícola.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=11OuW6gVuvI',
    },
  ],
  glosario: [
    {
      termino: 'Alelo',
      significado: 'maneras en las que se visualiza un carácter o gen.',
    },
    {
      termino: 'Cromosoma',
      significado:
        'estructura localizada en el núcleo de la célula encargado de movilizar el ADN.',
    },
    {
      termino: 'fenotipo',
      significado:
        'apariencia y/o manifestación externa de un individuo, la variación fenotípica de una población resulta de los efectos combinados de herencia y ambiente, la variación genética es aquella parte de la variación fenotípica que se debe a los genes.',
    },
    {
      termino: 'Fisiología',
      significado: 'estudio de las funciones y mecanismos de un ser vivo.',
    },
    {
      termino: 'Genes',
      significado:
        'diminutas partículas contenidas en los cromosomas o formando parte de ellos, que son determinantes de las características que cada animal hereda de sus padres. Los genes están compuestos de DNA.',
    },
    {
      termino: 'Genotipo',
      significado:
        'serie completa de genes portados por un individuo o, en otro sentido, la constitución genética de un individuo con respecto a cualquier número limitado de genes bajo examen.',
    },
    {
      termino: 'Herencia',
      significado: 'proceso de transmisión de información a su descendiente.',
    },
    {
      termino: 'Raza',
      significado:
        'grupo en los que se subdividen las especies de acuerdo al fenotipo.',
    },
    {
      termino: 'Segregación',
      significado:
        'separación de cromosomas, (<em>meiosis</em>) transferencia de genes.',
    },
    {
      termino: 'Vigor hibrido',
      significado:
        'representación de las características genéticas superiores a la de los progenitores.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bavera, A. (s. f.). Definición de raza y formación de las razas bovinas y bufalinas. Sitio Argentino de Producción Animal.',
      link:
        'https://www.produccion-animal.com.ar/informacion_tecnica/a_curso_produccion_bovina_de_carne/07A-03-Capitulo-III-Definicion-formacion.pdf',
    },
    {
      referencia:
        'Firpo, L. (2012). Selección genética y mejoramiento animal. Sitio Argentino de Producción Animal.',
      link:
        'https://www.produccion-animal.com.ar/genetica_seleccion_cruzamientos/bovinos_en_general/24-Seleccion_genetica.pdf',
    },
    {
      referencia:
        'Galindez, R. (s. f.). La genética en la producción animal. Universidad Central de Venezuela.',
      link:
        'http://www.ucv.ve/fileadmin/user_upload/facultad_agronomia/Producion_Animal/ProducciOn_Animal/2_Genetica_etapaII.pdf',
    },
    {
      referencia:
        'Genghini, R. (2002). Introducción al mejoramiento animal. Sitio Argentino de Producción Animal.',
      link:
        'https://www.produccion-animal.com.ar/genetica_seleccion_cruzamientos/genetica_en_general/05-introduccion_al_mejoramiento_animal.pdf',
    },
    {
      referencia:
        'Molina, M. (2019). Mejoramiento animal. Facultad de Ciencias Agropecuarias FCA.',
    },
    {
      referencia: 'Roldán, G. (2014). Mejoramiento animal. Punto Ganadero.',
      link: 'https://puntoganadero.cl/imagenes/upload/_5db8351dc0e21.pdf',
    },
    {
      referencia:
        'Rodero, E. (2000). El concepto de raza, un enfoque epistemológico. Sitio Argentino de Producción Animal.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nelson Vera',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Alexander acosta',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jorge Leonardo Camacho',
          cargo: 'Desarrollo Fullstack ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Hernando Strusberg',
          cargo: 'Diseño de contenidos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cuartas',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Gilberto Herrera',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validación de recursos digitales ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
