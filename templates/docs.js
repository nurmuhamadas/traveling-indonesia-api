/* eslint-disable max-len */
import dotenv from 'dotenv';
dotenv.config();

const origin = process.env.BASE_URL;

export const docs = {
  'quick-start': [
    {
      tag: 'h1',
      content: 'Quick Start',
    },
    {
      tag: 'p',
      content: ['This section we will learn how to get our first data list of Indonesian tour destinations. It example gives us the first 20 lists of data that are in our database. To get more detail about API endpoint, params, and others, see our API documentation at ',
        {
          tag: 'a',
          link: '/docs/get-destinations',
          text: 'API Documentation.',
        }],
    },
    {
      tag: 'p',
      content: 'To get our first data, we can create GET request by using url below:',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations`,
    },
    {
      tag: 'p',
      content: 'The request above will gives us data below.',
    },
    {
      tag: 'accordion-code',
      content: {
        header: 'Result',
        main: {
          tag: 'code',
          content:
`[
  {
    _id: ObjectId("5fc981741930770bd06990ed"),
    id: 1,
    name: 'Masjid Raya Baiturrahman',
    description: 'Masjid Raya Baiturrahman (Aksara Jawoë  : مسجد راي بايتوررحمن ) adalah sebuah Masjid yang terletak di pusat kota Banda Aceh, Provinsi Aceh, Indonesia. Masjid Raya Baiturrahman adalah simbol agama, budaya, semangat, kekuatan, perjuangan dan nasionalisme rakyat Aceh. Masjid ini adalah landmark Banda Aceh sejak era Kesultanan Aceh dan selamat dari bencana tsunami pada 26 Desember 2004 silam.',
    categories: [ 'religi' ],
    location: {
      id: 'poi.463856539974',
      full_address: 'Mesjid Raya Baiturrahman, Jl. Mohd. Jam, Banda Aceh, Aceh 23242, Indonesia',
      village: 'Kampung Baru',
      district: 'Baiturrahman',
      city: 'Banda Aceh',
      region: 'Aceh',
      post_code: '',
      coordinates: [ '95.317205', '5.553652' ]
    },
    images: [
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Dalam_Meuseujid_Raya.JPG/350px-Dalam_Meuseujid_Raya.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/0/05/Moschee_Banda_Aceh_Miniatur.JPG/350px-Moschee_Banda_Aceh_Miniatur.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Masjid_Raya.JPG/350px-Masjid_Raya.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Tugu_Modal_Aceh.JPG/350px-Tugu_Modal_Aceh.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/AMH-6875-KB_View_of_Achin.jpg/220px-AMH-6875-KB_View_of_Achin.jpg',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/2/23/COLLECTIE_TROPENMUSEUM_De_Baiturrahman_moskee_in_Koetaradja_TMnr_60023556.jpg/220px-COLLECTIE_TROPENMUSEUM_De_Baiturrahman_moskee_in_Koetaradja_TMnr_60023556.jpg',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Meuseujid_Raya_Bayturrahman.JPG/278px-Meuseujid_Raya_Bayturrahman.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Meuseujid_Raya_Baiturrahman_.jpg/300px-Meuseujid_Raya_Baiturrahman_.jpg',
        text: 'Meuseujid Raya Baiturrahman .jpg'
      }
    ],
    rating: 0
  },
  {
    _id: ObjectId("5fc981741930770bd06990ee"),
    id: 2,
    name: 'Iskandar Muda dari Aceh',
    description: 'Sultan Iskandar Muda (Aksara Jawoë: سلطان إسكندر مودا) (Lahir di Bandar Aceh Darussalam, Kesultanan Aceh, 1590 atau 1593[1] – wafat di Bandar Aceh Darussalam, Kesultanan Aceh, 27 Desember 1636) merupakan sultan yang paling besar dalam masa Kesultanan Aceh, yang berkuasa dari tahun 1607 sampai 1636.[2] Aceh mencapai kejayaannya pada masa kepemimpinan Iskandar Muda, di mana daerah kekuasaannya yang semakin besar dan reputasi internasional sebagai pusat dari perdagangan dan pembelajaran tentang Islam.[1] Beliau juga pernah melakukan serangan terhadap Portugis, tetapi serangan tersebut tidak berhasil, meskipun begitu Aceh tetap merupakan kerajaan yang merdeka. Namanya kini diabadikan untuk Universitas Iskandar Muda, Kodam Iskandar Muda dan Bandar Udara Internasional Sultan Iskandar Muda di Banda Aceh. beliau dikenal sangat piawai dalam membangun kerajaan aceh darussalam.[3][4]',
    categories: [ 'lainnya' ],
    location: {
      id: 'poi.42949722822',
      full_address: 'Indomaret Iskandar Muda, Ulee Lheu, Banda Aceh, Aceh 23233, Indonesia',
      village: 'Cot Lamkuweueh',
      district: 'Meuraxa',
      city: 'Banda Aceh',
      region: 'Aceh',
      post_code: '',
      coordinates: [ '95.290418', '5.553547' ]
    },
    images: [
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/1/12/Gunongan_Putro%C3%AB_Phang.JPG/323px-Gunongan_Putro%C3%AB_Phang.JPG',
        text: 'Iskandar_Muda_dari_Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Banda_Aceh%27s_Grand_Mosque%2C_Indonesia.jpg/226px-Banda_Aceh%27s_Grand_Mosque%2C_Indonesia.jpg',
        text: 'Iskandar_Muda_dari_Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jirat_Soleutan_Eseukanda_Muda.JPG/225px-Jirat_Soleutan_Eseukanda_Muda.JPG',
        text: 'Iskandar_Muda_dari_Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jirat_Soleutan_Eseukanda_Muda.JPG/220px-Jirat_Soleutan_Eseukanda_Muda.JPG',
        text: 'Iskandar_Muda_dari_Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_the_Aceh_Sultanate.png/22px-Flag_of_the_Aceh_Sultanate.png',
        text: 'Bendera Kesultanan Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_the_Aceh_Sultanate.png/22px-Flag_of_the_Aceh_Sultanate.png',
        text: 'Bendera Kesultanan Aceh'
      }
    ],
    rating: 0
  },
  {
    _id: ObjectId("5fc981741930770bd06990ef"),
    id: 3,
    name: 'PLTD Apung',
    description: 'PLTD Apung adalah kapal generator listrik milik PLN di Banda Aceh, Indonesia, yang saat ini dijadikan tempat wisata, yang dikenal dengan nama "Kapal Apung". Kapal ini memiliki luas sekitar 1.900 Meter Persegi, dengan panjang mencapai 63 Meter.',
    categories: [ 'lainnya' ],
    location: {
      id: '-',
      full_address: 'Punge Blang Cut, Jaya Baru Kota Banda Aceh, Provinsi Aceh',
      village: 'Punge Blang Cut',
      district: 'Aceh Jaya Baru',
      city: 'Banda Aceh',
      region: 'Aceh',
      post_code: '',
      coordinates: [ '123.9100865', '10.318632000000001' ]
    },
    images: [
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/a/ad/PLTD_Apong_Ie_Beuna.JPG/250px-PLTD_Apong_Ie_Beuna.JPG',
        text: 'PLTD_Apung'
      }
    ],
    rating: 0
  },
  ...
]`,
        },
      },
    },
    {
      tag: 'p',
      content: ['Find more request at ',
        {
          tag: 'a',
          link: '/docs/get-destinations',
          text: 'API Documentation',
        }],
    },
  ],
  'get-destinations': [
    {
      tag: 'h1',
      content: 'Get Destinations',
    },
    {
      tag: 'h3',
      content: 'Overview',
    },
    {
      tag: 'p',
      content: ['Our Tour Destination API is GET request only. We can\'t make a PUT, POST, and DELETE request. If we want to make a changes in our Database documentation, feel free to read our ',
        {
          tag: 'a',
          link: '/docs/contributing',
          text: 'Contibuting page.',
        },
      ],
    },
    {
      tag: 'p',
      content: 'All data is provide in Indenesian. We have not provide data other than Indonesian. If we want to add data for other language, feel free to contact me or follow the contributing instruction ',
    },
    {
      tag: 'h3',
      content: 'Get all data',
    },
    {
      tag: 'p',
      content: 'To get all list data, we can make a GET request by url below',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations`,
    },
    {
      tag: 'accordion-code',
      content: {
        header: 'Result',
        main: {
          tag: 'code',
          content:
`[
  {
    _id: ObjectId("5fc981741930770bd06990ed"),
    id: 1,
    name: 'Masjid Raya Baiturrahman',
    description: 'Masjid Raya Baiturrahman (Aksara Jawoë  : مسجد راي بايتوررحمن ) adalah sebuah Masjid yang terletak di pusat kota Banda Aceh, Provinsi Aceh, Indonesia. Masjid Raya Baiturrahman adalah simbol agama, budaya, semangat, kekuatan, perjuangan dan nasionalisme rakyat Aceh. Masjid ini adalah landmark Banda Aceh sejak era Kesultanan Aceh dan selamat dari bencana tsunami pada 26 Desember 2004 silam.',
    categories: [ 'religi' ],
    location: {
      id: 'poi.463856539974',
      full_address: 'Mesjid Raya Baiturrahman, Jl. Mohd. Jam, Banda Aceh, Aceh 23242, Indonesia',
      village: 'Kampung Baru',
      district: 'Baiturrahman',
      city: 'Banda Aceh',
      region: 'Aceh',
      post_code: '',
      coordinates: [ '95.317205', '5.553652' ]
    },
    images: [
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Dalam_Meuseujid_Raya.JPG/350px-Dalam_Meuseujid_Raya.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/0/05/Moschee_Banda_Aceh_Miniatur.JPG/350px-Moschee_Banda_Aceh_Miniatur.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Masjid_Raya.JPG/350px-Masjid_Raya.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Tugu_Modal_Aceh.JPG/350px-Tugu_Modal_Aceh.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/AMH-6875-KB_View_of_Achin.jpg/220px-AMH-6875-KB_View_of_Achin.jpg',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/2/23/COLLECTIE_TROPENMUSEUM_De_Baiturrahman_moskee_in_Koetaradja_TMnr_60023556.jpg/220px-COLLECTIE_TROPENMUSEUM_De_Baiturrahman_moskee_in_Koetaradja_TMnr_60023556.jpg',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Meuseujid_Raya_Bayturrahman.JPG/278px-Meuseujid_Raya_Bayturrahman.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Meuseujid_Raya_Baiturrahman_.jpg/300px-Meuseujid_Raya_Baiturrahman_.jpg',
        text: 'Meuseujid Raya Baiturrahman .jpg'
      }
    ],
    rating: 0
  },
  {
    _id: ObjectId("5fc981741930770bd06990ee"),
    id: 2,
    name: 'Iskandar Muda dari Aceh',
    description: 'Sultan Iskandar Muda (Aksara Jawoë: سلطان إسكندر مودا) (Lahir di Bandar Aceh Darussalam, Kesultanan Aceh, 1590 atau 1593[1] – wafat di Bandar Aceh Darussalam, Kesultanan Aceh, 27 Desember 1636) merupakan sultan yang paling besar dalam masa Kesultanan Aceh, yang berkuasa dari tahun 1607 sampai 1636.[2] Aceh mencapai kejayaannya pada masa kepemimpinan Iskandar Muda, di mana daerah kekuasaannya yang semakin besar dan reputasi internasional sebagai pusat dari perdagangan dan pembelajaran tentang Islam.[1] Beliau juga pernah melakukan serangan terhadap Portugis, tetapi serangan tersebut tidak berhasil, meskipun begitu Aceh tetap merupakan kerajaan yang merdeka. Namanya kini diabadikan untuk Universitas Iskandar Muda, Kodam Iskandar Muda dan Bandar Udara Internasional Sultan Iskandar Muda di Banda Aceh. beliau dikenal sangat piawai dalam membangun kerajaan aceh darussalam.[3][4]',
    categories: [ 'lainnya' ],
    location: {
      id: 'poi.42949722822',
      full_address: 'Indomaret Iskandar Muda, Ulee Lheu, Banda Aceh, Aceh 23233, Indonesia',
      village: 'Cot Lamkuweueh',
      district: 'Meuraxa',
      city: 'Banda Aceh',
      region: 'Aceh',
      post_code: '',
      coordinates: [ '95.290418', '5.553547' ]
    },
    images: [
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/1/12/Gunongan_Putro%C3%AB_Phang.JPG/323px-Gunongan_Putro%C3%AB_Phang.JPG',
        text: 'Iskandar_Muda_dari_Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Banda_Aceh%27s_Grand_Mosque%2C_Indonesia.jpg/226px-Banda_Aceh%27s_Grand_Mosque%2C_Indonesia.jpg',
        text: 'Iskandar_Muda_dari_Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jirat_Soleutan_Eseukanda_Muda.JPG/225px-Jirat_Soleutan_Eseukanda_Muda.JPG',
        text: 'Iskandar_Muda_dari_Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jirat_Soleutan_Eseukanda_Muda.JPG/220px-Jirat_Soleutan_Eseukanda_Muda.JPG',
        text: 'Iskandar_Muda_dari_Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_the_Aceh_Sultanate.png/22px-Flag_of_the_Aceh_Sultanate.png',
        text: 'Bendera Kesultanan Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_the_Aceh_Sultanate.png/22px-Flag_of_the_Aceh_Sultanate.png',
        text: 'Bendera Kesultanan Aceh'
      }
    ],
    rating: 0
  },
  {
    _id: ObjectId("5fc981741930770bd06990ef"),
    id: 3,
    name: 'PLTD Apung',
    description: 'PLTD Apung adalah kapal generator listrik milik PLN di Banda Aceh, Indonesia, yang saat ini dijadikan tempat wisata, yang dikenal dengan nama "Kapal Apung". Kapal ini memiliki luas sekitar 1.900 Meter Persegi, dengan panjang mencapai 63 Meter.',
    categories: [ 'lainnya' ],
    location: {
      id: '-',
      full_address: 'Punge Blang Cut, Jaya Baru Kota Banda Aceh, Provinsi Aceh',
      village: 'Punge Blang Cut',
      district: 'Aceh Jaya Baru',
      city: 'Banda Aceh',
      region: 'Aceh',
      post_code: '',
      coordinates: [ '123.9100865', '10.318632000000001' ]
    },
    images: [
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/a/ad/PLTD_Apong_Ie_Beuna.JPG/250px-PLTD_Apong_Ie_Beuna.JPG',
        text: 'PLTD_Apung'
      }
    ],
    rating: 0
  },
  ...
]`,
        },
      },
    },
    {
      tag: 'p',
      content: 'For performance reasons, by default, it will return 20 list data only. We can custom the limit data by passing the limit query (we will talking about it below). In other hand, by \'limit\' the result, our API is support fo pagination by default.',
    },
    {
      tag: 'h3',
      content: 'Get data by id',
    },
    {
      tag: 'p',
      content: 'We can get a destination data with specified id. ',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/:id`,
    },
    {
      tag: 'p',
      content: 'Note that we can pass :id param with id or _id value. Both of them will return same data.',
    },
    {
      tag: 'h4',
      content: 'Example',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/1`,
    },
    {
      tag: 'p',
      content: 'or',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/5fc1a02191ce582470a4793e`,
    },
    {
      tag: 'p',
      content: 'Two urls above will return same data.',
    },
    {
      tag: 'accordion-code',
      content: {
        header: 'Result',
        main: {
          tag: 'code',
          content:
`{
  _id: ObjectId("5fc981741930770bd06990ed"),
  id: 1,
  name: 'Masjid Raya Baiturrahman',
  description: 'Masjid Raya Baiturrahman (Aksara Jawoë  : مسجد راي بايتوررحمن ) adalah sebuah Masjid yang terletak di pusat kota Banda Aceh, Provinsi Aceh, Indonesia. Masjid Raya Baiturrahman adalah simbol agama, budaya, semangat, kekuatan, perjuangan dan nasionalisme rakyat Aceh. Masjid ini adalah landmark Banda Aceh sejak era Kesultanan Aceh dan selamat dari bencana tsunami pada 26 Desember 2004 silam.',
  categories: [ 'religi' ],
  location: {
    id: 'poi.463856539974',
    full_address: 'Mesjid Raya Baiturrahman, Jl. Mohd. Jam, Banda Aceh, Aceh 23242, Indonesia',
    village: 'Kampung Baru',
    district: 'Baiturrahman',
    city: 'Banda Aceh',
    region: 'Aceh',
    post_code: '',
    coordinates: [ '95.317205', '5.553652' ]
  },
  images: [
    {
      href: '//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Dalam_Meuseujid_Raya.JPG/350px-Dalam_Meuseujid_Raya.JPG',
      text: 'Masjid_Raya_Baiturrahman'
    },
    {
      href: '//upload.wikimedia.org/wikipedia/commons/thumb/0/05/Moschee_Banda_Aceh_Miniatur.JPG/350px-Moschee_Banda_Aceh_Miniatur.JPG',
      text: 'Masjid_Raya_Baiturrahman'
    },
    {
      href: '//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Masjid_Raya.JPG/350px-Masjid_Raya.JPG',
      text: 'Masjid_Raya_Baiturrahman'
    },
    {
      href: '//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Tugu_Modal_Aceh.JPG/350px-Tugu_Modal_Aceh.JPG',
      text: 'Masjid_Raya_Baiturrahman'
    },
    {
      href: '//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/AMH-6875-KB_View_of_Achin.jpg/220px-AMH-6875-KB_View_of_Achin.jpg',
      text: 'Masjid_Raya_Baiturrahman'
    },
    {
      href: '//upload.wikimedia.org/wikipedia/commons/thumb/2/23/COLLECTIE_TROPENMUSEUM_De_Baiturrahman_moskee_in_Koetaradja_TMnr_60023556.jpg/220px-COLLECTIE_TROPENMUSEUM_De_Baiturrahman_moskee_in_Koetaradja_TMnr_60023556.jpg',
      text: 'Masjid_Raya_Baiturrahman'
    },
    {
      href: '//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Meuseujid_Raya_Bayturrahman.JPG/278px-Meuseujid_Raya_Bayturrahman.JPG',
      text: 'Masjid_Raya_Baiturrahman'
    },
    {
      href: '//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Meuseujid_Raya_Baiturrahman_.jpg/300px-Meuseujid_Raya_Baiturrahman_.jpg',
      text: 'Meuseujid Raya Baiturrahman .jpg'
    }
  ],
  rating: 0
}`,
        },
      },
    },
    {
      tag: 'h3',
      content: `Sort data`,
    },
    {
      tag: 'p',
      content: 'By default, all request will return list data sorted by id. We can change the order of the data by passing \'sort\' query. Here\'s a list of possible values ​​for the query sort: ',
    },
    {
      tag: 'table',
      content: {
        head: ['Value', 'Description'],
        body: [[
          'name',
          'Sort return data by name',
        ], [
          'Rating',
          'Sort return data by rating',
        ], [
          'city',
          'Sort return data by city name',
        ], [
          'region',
          'Sort return data by province name',
        ]],
      },
    },
    {
      tag: 'h4',
      content: 'Example:',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/?sort=name`,
    },
    {
      tag: 'accordion-code',
      content: {
        header: 'Result',
        main: {
          tag: 'code',
          content:
`[
  {
    _id: ObjectId("5fc981741930770bd069937d"),
    id: 782,
    name: 'Agats, Asmat',
    description: 'Agats adalah sebuah distrik di Kabupaten Asmat, Provinsi Papua, Indonesia.[3] Agats juga merupakan ibu kota kabupaten Asmat. Kota ini terletak di pesisir selatan Papua, menghadap ke Laut Arafura.',
    categories: [ 'lainnya' ],
    location: {
      id: 'locality.8852611259448510',
      full_address: 'Agats, Asmat, Papua, Indonesia',
      village: '',
      district: '',
      city: 'Asmat',
      region: 'Papua',
      post_code: '',
      coordinates: [ '138.13333', '-5.54167' ]
    },
    images: [
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Agats_Skyline.jpg/250px-Agats_Skyline.jpg',
        text: 'Agats Skyline.jpg'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/2/26/Port_of_Agats.jpg/250px-Port_of_Agats.jpg',
        text: 'Agats'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Salib_Suci_Cathedral_Church.jpg/250px-Salib_Suci_Cathedral_Church.jpg',
        text: 'Agats'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mosque_of_Saiful_Bukhori.jpg/250px-Mosque_of_Saiful_Bukhori.jpg',
        text: 'Agats'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/8/86/Icon_of_Asmat_Regency.jpg/250px-Icon_of_Asmat_Regency.jpg',
        text: 'Agats'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Agats_Skyline.jpg/250px-Agats_Skyline.jpg',
        text: 'Agats Skyline.jpg'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/22px-Flag_of_Indonesia.svg.png',
        text: 'Agats'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png',
        text: 'Edit the value on Wikidata'
      }
    ],
    rating: 0
  },
  {
    _id: ObjectId("5fc981741930770bd0699327"),
    id: 678,
    name: 'Agrowisata Bontolabbu',
    description: "Agrowisata Bontolabbu (disebut juga Wisata Bontolabbu) merupakan agrowisata buatan yang menawarkan nuansa yang romantis, wisata kuliner dan pemancingan yang berada di Dusun Bontolabbu, Desa Jenetaesa, Kecamatan Simbang, Kabupaten Maros, Sulawesi Selatan, Indonesia. Agrowisata ini menerapkan konsep perpaduan tradisional dan milenial dalam penataan interior agrowisata dan suasana alam pendesaan dengan konsep bangunan bambu [1]. Di agrowisata ini, pengunjung dapat menikmati panorama indah nan sejuk hamparan sawah dan sunrise dan juga bisa menikmati berbagai macam jajanan umum dan tradisional yang lezat khas Bugis–Makassar, seperti labbu palu, dadara', onde-onde Jawa, kopi, sarabba, dan lainnya. Pengunjung bisa menikmati kuliner ikan nila segar dari hasil pancingan sendiri.[2] Saat malam hari, keheningan dan lampu hias mantap memanjakan pengunjung.",
    categories: [ 'lainnya' ],
    location: {
      id: '-',
      full_address: 'Dusun Bontolabbu, Desa Jenetaesa, Kecamatan Simbang, Kabupaten Maros, Sulawesi Selatan, Indonesia.',
      village: 'Janatesa',
      district: 'Simbang',
      city: 'Maros',
      region: 'Sulawesi Selatan',
      post_code: '',
      coordinates: [ '-' ]
    },
    images: [],
    rating: 0
  },
  {
    _id: ObjectId("5fc981741930770bd0699328"),
    id: 679,
    name: 'Agrowisata Mangambang 575',
    description: 'Agrowisata Mangambang 575 (disebut juga Wisata Mangambang) merupakan agrowisata buatan yang menawarkan wisata kuliner dan pemancingan yang berada di Dusun Marana, Desa Marannu, Kecamatan Lau, Kabupaten Maros, Sulawesi Selatan, Indonesia. Agrowisata ini memiliki udara yang sejuk dari hembusan angin perairan Selat Makassar, panorama senja nan indah, fajar menyingsing yang indah, langit biru di kala cerah, dan gemerlap malam dengan hiasan lampu warna-warni. Destinasi wisata ini terbilang baru, namun sudah mampu menarik wisatawan lokal untuk menikmatinya. Buktinya hampir tiap hari, Mangambang 575 dipadati pengunjung [1]. Ini disebabkan sensasi berbeda yang ditawarkan dari wisata lainnya. Agrowisata ini sangat cocok datang bersama keluarga atau pasangan.',
    categories: [ 'lainnya' ],
    location: {
      id: '-',
      full_address: 'Dusun Marana, Desa Marannu, Kecamatan Lau, Kabupaten Maros, Sulawesi Selatan, Indonesia.',
      village: 'Marannu',
      district: 'Lau',
      city: 'Maros',
      region: 'Sulawesi Selatan',
      post_code: '-',
      coordinates: [ '-' ]
    },
    images: [
      {
        href: '//upload.wikimedia.org/wikipedia/id/thumb/0/0b/Agrowisata_Mangambang_575.jpg/284px-Agrowisata_Mangambang_575.jpg',
        text: 'Agrowisata Mangambang 575.jpg'
      }
    ],
    rating: 0
  },
  ...
]`,
        },
      },
    },
    {
      tag: 'p',
      content: ['By request to url above, we will get 20 list data that ordered by name. If we want to revese the order, we can pass',
        {
          tag: 'mark',
          text: 'desc=true',
        },
        ' in the end of url.'],
    },
    {
      tag: 'h4',
      content: 'Example:',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/?sort=name&desc=true`,
    },
    {
      tag: 'h3',
      content: 'Limit data',
    },
    {
      tag: 'p',
      content: ['As mentioned above, we can set the limit of data by passing',
        {
          tag: 'mark',
          text: 'limit',
        },
        ' query with any value from 0 to maximum amount of data (682 data). If we don\'t set limit value, return data will be limited to 20 list data for performance reasons.'],
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/?limit=2`,
    },
    {
      tag: 'accordion-code',
      content: {
        header: 'Result',
        main: {
          tag: 'code',
          content:
`[
  {
    _id: ObjectId("5fc981741930770bd06990ed"),
    id: 1,
    name: 'Masjid Raya Baiturrahman',
    description: 'Masjid Raya Baiturrahman (Aksara Jawoë  : مسجد راي بايتوررحمن ) adalah sebuah Masjid yang terletak di pusat kota Banda Aceh, Provinsi Aceh, Indonesia. Masjid Raya Baiturrahman adalah simbol agama, budaya, semangat, kekuatan, perjuangan dan nasionalisme rakyat Aceh. Masjid ini adalah landmark Banda Aceh sejak era Kesultanan Aceh dan selamat dari bencana tsunami pada 26 Desember 2004 silam.',
    categories: [ 'religi' ],
    location: {
      id: 'poi.463856539974',
      full_address: 'Mesjid Raya Baiturrahman, Jl. Mohd. Jam, Banda Aceh, Aceh 23242, Indonesia',
      village: 'Kampung Baru',
      district: 'Baiturrahman',
      city: 'Banda Aceh',
      region: 'Aceh',
      post_code: '',
      coordinates: [ '95.317205', '5.553652' ]
    },
    images: [
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Dalam_Meuseujid_Raya.JPG/350px-Dalam_Meuseujid_Raya.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/0/05/Moschee_Banda_Aceh_Miniatur.JPG/350px-Moschee_Banda_Aceh_Miniatur.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Masjid_Raya.JPG/350px-Masjid_Raya.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Tugu_Modal_Aceh.JPG/350px-Tugu_Modal_Aceh.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/AMH-6875-KB_View_of_Achin.jpg/220px-AMH-6875-KB_View_of_Achin.jpg',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/2/23/COLLECTIE_TROPENMUSEUM_De_Baiturrahman_moskee_in_Koetaradja_TMnr_60023556.jpg/220px-COLLECTIE_TROPENMUSEUM_De_Baiturrahman_moskee_in_Koetaradja_TMnr_60023556.jpg',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Meuseujid_Raya_Bayturrahman.JPG/278px-Meuseujid_Raya_Bayturrahman.JPG',
        text: 'Masjid_Raya_Baiturrahman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Meuseujid_Raya_Baiturrahman_.jpg/300px-Meuseujid_Raya_Baiturrahman_.jpg',
        text: 'Meuseujid Raya Baiturrahman .jpg'
      }
    ],
    rating: 0
  },
  {
    _id: ObjectId("5fc981741930770bd06990ee"),
    id: 2,
    name: 'Iskandar Muda dari Aceh',
    description: 'Sultan Iskandar Muda (Aksara Jawoë: سلطان إسكندر مودا) (Lahir di Bandar Aceh Darussalam, Kesultanan Aceh, 1590 atau 1593[1] – wafat di Bandar Aceh Darussalam, Kesultanan Aceh, 27 Desember 1636) merupakan sultan yang paling besar dalam masa Kesultanan Aceh, yang berkuasa dari tahun 1607 sampai 1636.[2] Aceh mencapai kejayaannya pada masa kepemimpinan Iskandar Muda, di mana daerah kekuasaannya yang semakin besar dan reputasi internasional sebagai pusat dari perdagangan dan pembelajaran tentang Islam.[1] Beliau juga pernah melakukan serangan terhadap Portugis, tetapi serangan tersebut tidak berhasil, meskipun begitu Aceh tetap merupakan kerajaan yang merdeka. Namanya kini diabadikan untuk Universitas Iskandar Muda, Kodam Iskandar Muda dan Bandar Udara Internasional Sultan Iskandar Muda di Banda Aceh. beliau dikenal sangat piawai dalam membangun kerajaan aceh darussalam.[3][4]',
    categories: [ 'lainnya' ],
    location: {
      id: 'poi.42949722822',
      full_address: 'Indomaret Iskandar Muda, Ulee Lheu, Banda Aceh, Aceh 23233, Indonesia',
      village: 'Cot Lamkuweueh',
      district: 'Meuraxa',
      city: 'Banda Aceh',
      region: 'Aceh',
      post_code: '',
      coordinates: [ '95.290418', '5.553547' ]
    },
    images: [
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/1/12/Gunongan_Putro%C3%AB_Phang.JPG/323px-Gunongan_Putro%C3%AB_Phang.JPG',
        text: 'Iskandar_Muda_dari_Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Banda_Aceh%27s_Grand_Mosque%2C_Indonesia.jpg/226px-Banda_Aceh%27s_Grand_Mosque%2C_Indonesia.jpg',
        text: 'Iskandar_Muda_dari_Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jirat_Soleutan_Eseukanda_Muda.JPG/225px-Jirat_Soleutan_Eseukanda_Muda.JPG',
        text: 'Iskandar_Muda_dari_Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jirat_Soleutan_Eseukanda_Muda.JPG/220px-Jirat_Soleutan_Eseukanda_Muda.JPG',
        text: 'Iskandar_Muda_dari_Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_the_Aceh_Sultanate.png/22px-Flag_of_the_Aceh_Sultanate.png',
        text: 'Bendera Kesultanan Aceh'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_the_Aceh_Sultanate.png/22px-Flag_of_the_Aceh_Sultanate.png',
        text: 'Bendera Kesultanan Aceh'
      }
    ],
    rating: 0
  }
]`,
        },
      },
    },
    {
      tag: 'p',
      content: [`By GET request with url above, we will get 2 first ordered data. If we want to get All data, we can set`,
        {
          tag: 'mark',
          text: 'limit=0',
        },
        'in the request url.'],
    },
    {
      tag: 'h3',
      content: 'Pagination',
    },
    {
      tag: 'p',
      content: ['Until here, we just get the first limited data. How we can get the next data? It\'s simple way to get it. We can add',
        {
          tag: 'mark',
          text: 'page=value',
        },
        'to skip to next data. Default value of page is 0. It means API will skip 0 data'],
    },
    {
      tag: 'h4',
      content: 'Example',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/?page=1`,
    },
    {
      tag: 'accordion-code',
      content: {
        header: 'Result',
        main: {
          tag: 'code',
          content:
`[
  {
    _id: ObjectId("5fc981741930770bd0699101"),
    id: 36,
    name: 'Kantor Pos Medan',
    description: 'Kantor Pos Medan adalah kantor pos besar di Medan, Indonesia. Dibuka pada tahun 1911, kantor pos ini adalah salah satu bangunan bersejarah yang hingga kini masih berdiri kokoh di Medan. Bangunan ini masih tetap mempertahankan fungsinya hingga kini.',
    categories: [ 'lainnya' ],
    location: {
      id: 'poi.1185411006163',
      full_address: 'Kantor Pos Medan Baru, Jl. Iskandar Muda, Medan, Sumatera Utara 20154, Indonesia',
      village: 'Babura',
      district: 'Medan Baru',
      city: 'Medan',
      region: 'Sumatera Utara',
      post_code: '',
      coordinates: [ '98.125026', '3.548713' ]
    },
    images: [
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/6/67/COLLECTIE_TROPENMUSEUM_Het_post-_en_telegraafkantoor_en_de_Nienhuys-fontein_TMnr_10015240.jpg/220px-COLLECTIE_TROPENMUSEUM_Het_post-_en_telegraafkantoor_en_de_Nienhuys-fontein_TMnr_10015240.jpg',
        text: 'Kantor_Pos_Medan'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Medan-post-office.jpg/220px-Medan-post-office.jpg',
        text: 'Kantor_Pos_Medan'
      }
    ],
    rating: 0
  },
  {
    _id: ObjectId("5fc981741930770bd0699102"),
    id: 38,
    name: 'Taman Wisata Iman Sitinjo',
    description: 'Taman Wisata Iman berada di Bukit Sitinjo dengan luas 130.000 m2, terletak di Desa Sitinjo, Kecamatan Sitinjo, Kabupaten Dairi, Sumatra Utara. Terletak sekitar 10 km dari Ibu Kota Kabupaten Dairi, Sidikalang atau sekitar 154 km dari Medan.',
    categories: [ 'taman' ],
    location: {
      id: 'poi.541165897144',
      full_address: 'Taman Wisata Iman Dairi - Sitinjo, Jalan Sidikalang - Dairi, Dairi, Sumatera Utara 22251, Indonesia',
      village: 'Sitinjo I',
      district: 'Sitinjo',
      city: 'Dairi',
      region: 'Sumatera Utara',
      post_code: '',
      coordinates: [ '98.125026', '3.548713' ]
    },
    images: [
      {
        href: '//upload.wikimedia.org/wikipedia/id/6/6d/Selamat_Datang_TWI.jpg',
        text: 'Taman_Wisata_Iman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/id/thumb/8/84/Vihara_Saddhavana.jpg/180px-Vihara_Saddhavana.jpg',
        text: 'Taman_Wisata_Iman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/id/8/89/Kelahiran_Yesus_TWI.jpg',
        text: 'Taman_Wisata_Iman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/id/1/10/Getsemani_TWI.jpg',
        text: 'Taman_Wisata_Iman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/id/thumb/8/8c/Jalan_Salib_TWI.jpg/180px-Jalan_Salib_TWI.jpg',
        text: 'Taman_Wisata_Iman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/id/thumb/4/43/Golgota_TWI.jpg/180px-Golgota_TWI.jpg',
        text: 'Taman_Wisata_Iman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/id/thumb/8/89/Gereja_TWI.jpg/180px-Gereja_TWI.jpg',
        text: 'Taman_Wisata_Iman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/id/thumb/6/6a/Goa_Maria_TWI.jpg/180px-Goa_Maria_TWI.jpg',
        text: 'Taman_Wisata_Iman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/id/thumb/e/ef/Pura_TWI.jpg/180px-Pura_TWI.jpg',
        text: 'Taman_Wisata_Iman'
      },
      {
        href: '//upload.wikimedia.org/wikipedia/id/thumb/7/79/Mesjid_TWI.jpg/180px-Mesjid_TWI.jpg',
        text: 'Taman_Wisata_Iman'
      }
    ],
    rating: 0
  },
  ...
]`,
        },
      },
    },
    {
      tag: 'p',
      content: 'By request with url above, we will get the second 20 data (21-40). It will be very helpfull for pagination and performance reason.',
    },
    {
      tag: 'h3',
      content: 'Additional',
    },
    {
      tag: 'p',
      content: 'We can use all query above in one url request. In example, we want to get the third five data that ordered by name, we can get request with:',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/?sort=name&page=2&limit=5`,
    },
    {
      tag: 'p',
      content: ['Can we get data by specified name, city, or other criteria? Yes, we can do it! We can learn it at ',
        {
          tag: 'a',
          link: '/docs/search-destinations',
          text: 'search destinations pages.',
        }],
    },
  ],
  'search-destinations': [
    {
      tag: 'h1',
      content: 'Search Destinations',
    },
    {
      tag: 'h3',
      content: 'Overview',
    },
    {
      tag: 'p',
      content: ['In this section, we will learn how to get specified data based on specified value we want. If we want to get general list data, we can learn at ',
        {
          tag: 'a',
          link: '/docs/get-destinations',
          text: 'get destinations page.',
        },
      ],
    },
    {
      tag: 'h3',
      content: 'Search Destinations',
    },
    {
      tag: 'p',
      content: 'To search specified list data, we can make a GET request based on url below',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/search`,
    },
    {
      tag: 'p',
      content: 'Unfortunately, if we make GET request with url above, we will get an error that ask us to give required queries. Yeah, to search data, we need to pass the url at least with a query below',
    },
    {
      tag: 'table',
      content: {
        head: ['Query', 'Value', 'Description'],
        body: [[
          'name',
          '0-9 | a-z',
          'Search for data by a specific name.',
        ], [
          'location',
          'a-z',
          'Search for data by a specific location. Data result fits in with village, district, city, or province name.',
        ], [
          'categories',
          'alam | religi | budaya | sejarah | modern | lainnya',
          'Search for data by available category',
        ], [
          'rating',
          '0-5',
          'Search for data that has a rating greater than equal to the given value',
        ]],
      },
    },
    {
      tag: 'h4',
      content: 'Example:',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/search?name=ina`,
    },
    {
      tag: 'accordion-code',
      content: {
        header: 'Result',
        main: {
          tag: 'code',
          content:
`[
  {
    "_id": "5fc981741930770bd0699105",
    "id": 46,
    "name": "Gunung Sinabung",
    "description": "Gunung Sinabung (bahasa Karo: Deleng Sinabung) adalah gunung api di Dataran Tinggi Karo, Kabupaten Karo, Sumatra Utara, Indonesia. Sinabung bersama Gunung Sibayak di dekatnya adalah dua gunung berapi aktif di Sumatra Utara dan menjadi puncak tertinggi ke 2 di provinsi itu. Ketinggian gunung ini adalah 2.451 meter.",
    "categories": [
        "alam"
    ],
    "location": {
        "id": "poi.979252562308",
        "full_address": "Gunung Sinabung, Tanah Karo, Karo, Sumatera Utara 22153, Indonesia",
        "village": "Gamber",
        "district": "Simpang Empat",
        "city": "Karo",
        "region": "Sumatera Utara",
        "post_code": "",
        "coordinates": [
            "98.125026",
            "3.548713"
        ]
    },
    "images": [
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/4/4e/COLLECTIE_TROPENMUSEUM_Het_kratermeer_van_de_vulkaan_Sinaboen_Karolanden_Sumatra%60s_Oostkust_TMnr_60012279.jpg/120px-COLLECTIE_TROPENMUSEUM_Het_kratermeer_van_de_vulkaan_Sinaboen_Karolanden_Sumatra%60s_Oostkust_TMnr_60012279.jpg",
            "text": "Gunung_Sinabung"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sinabung-20100910.JPG/120px-Sinabung-20100910.JPG",
            "text": "Gunung_Sinabung"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Gunung_Sinabung_2019.jpg/120px-Gunung_Sinabung_2019.jpg",
            "text": "Gunung_Sinabung"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Gunung_Sinabung_01.jpg/80px-Gunung_Sinabung_01.jpg",
            "text": "Gunung_Sinabung"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sinabung%2C_Kab._Karo%2C_Sumatra_Utara.jpg/120px-Sinabung%2C_Kab._Karo%2C_Sumatra_Utara.jpg",
            "text": "Gunung_Sinabung"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/2/29/Sinabung-Gundaling-20100913.JPG/220px-Sinabung-Gundaling-20100913.JPG",
            "text": "Gunung_Sinabung"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/6/66/Erupsi_Gunung_Sinabung_dan_Dampaknya_dilingkungan_sekitar.jpg/220px-Erupsi_Gunung_Sinabung_dan_Dampaknya_dilingkungan_sekitar.jpg",
            "text": "Gunung_Sinabung"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gunung_Sinabung_dilihat_dari_Gunung_Sibayak_2019.jpg/220px-Gunung_Sinabung_dilihat_dari_Gunung_Sibayak_2019.jpg",
            "text": "Gunung_Sinabung"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sinabung.jpg/280px-Sinabung.jpg",
            "text": "Sinabung.jpg"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_map_Northern_Sumatra.png/240px-Location_map_Northern_Sumatra.png",
            "text": "Sinabung berlokasi di Sumatra Utara"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/3/39/Red_triangle_with_thick_white_border.svg/16px-Red_triangle_with_thick_white_border.svg.png",
            "text": "Sinabung"
        }
    ],
    "rating": 0
  },
  {
    "_id": "5fc981741930770bd069910f",
    "id": 62,
    "name": "Pantai Carolina",
    "description": "Pantai Carolina adalah sebuah objek wisata pantai yang terletak di daerah Bungus, 20 km di sebelah selatan Kota Padang, Sumatra Bara. Dapat dicapai dengan kendaraan umum (Oplet 437) dari terminal Oplet Pasaraya kota Padang. Objek wisata ini memiliki Pantai yang bersih dan ramai dikunjungi wisatawan lokal, terutama di akhir pekan dan hari-hari libur.",
    "categories": [
        "alam"
    ],
    "location": {
        "id": "poi.532576041183",
        "full_address": "Pantai Carolina, Bungus - Teluk Kabung, Padang, Sumatera Barat 25243, Indonesia",
        "village": "Bungus Selatan",
        "district": "Bungus Teluk Kabung",
        "city": "Padang",
        "region": "Sumatera Barat",
        "post_code": "",
        "coordinates": [
            "98.125026",
            "3.548713"
        ]
    },
    "images": [
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pantai_Carolina.jpg/220px-Pantai_Carolina.jpg",
            "text": "Pantai_Carolina"
        }
    ],
    "rating": 0
  },
  ...
]`,
        },
      },
    },
    {
      tag: 'p',
      content: 'By request to url above, we will get 20 list data with name which include \'ina\' in it. We can also apply all query in the section before. If we want to get destinations by specified location, we can make GET request with url below:',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/search?location=ban`,
    },
    {
      tag: 'accordion-code',
      content: {
        header: 'Result',
        main: {
          tag: 'code',
          content:
`[
  {
    "_id": "5fc981741930770bd06990ed",
    "id": 1,
    "name": "Masjid Raya Baiturrahman",
    "description": "Masjid Raya Baiturrahman (Aksara Jawoë  : مسجد راي بايتوررحمن ) adalah sebuah Masjid yang terletak di pusat kota Banda Aceh, Provinsi Aceh, Indonesia. Masjid Raya Baiturrahman adalah simbol agama, budaya, semangat, kekuatan, perjuangan dan nasionalisme rakyat Aceh. Masjid ini adalah landmark Banda Aceh sejak era Kesultanan Aceh dan selamat dari bencana tsunami pada 26 Desember 2004 silam.",
    "categories": [
        "religi"
    ],
    "location": {
        "id": "poi.463856539974",
        "full_address": "Mesjid Raya Baiturrahman, Jl. Mohd. Jam, Banda Aceh, Aceh 23242, Indonesia",
        "village": "Kampung Baru",
        "district": "Baiturrahman",
        "city": "Banda Aceh",
        "region": "Aceh",
        "post_code": "",
        "coordinates": [
            "95.317205",
            "5.553652"
        ]
    },
    "images": [
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Dalam_Meuseujid_Raya.JPG/350px-Dalam_Meuseujid_Raya.JPG",
            "text": "Masjid_Raya_Baiturrahman"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/0/05/Moschee_Banda_Aceh_Miniatur.JPG/350px-Moschee_Banda_Aceh_Miniatur.JPG",
            "text": "Masjid_Raya_Baiturrahman"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Masjid_Raya.JPG/350px-Masjid_Raya.JPG",
            "text": "Masjid_Raya_Baiturrahman"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Tugu_Modal_Aceh.JPG/350px-Tugu_Modal_Aceh.JPG",
            "text": "Masjid_Raya_Baiturrahman"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/AMH-6875-KB_View_of_Achin.jpg/220px-AMH-6875-KB_View_of_Achin.jpg",
            "text": "Masjid_Raya_Baiturrahman"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/2/23/COLLECTIE_TROPENMUSEUM_De_Baiturrahman_moskee_in_Koetaradja_TMnr_60023556.jpg/220px-COLLECTIE_TROPENMUSEUM_De_Baiturrahman_moskee_in_Koetaradja_TMnr_60023556.jpg",
            "text": "Masjid_Raya_Baiturrahman"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Meuseujid_Raya_Bayturrahman.JPG/278px-Meuseujid_Raya_Bayturrahman.JPG",
            "text": "Masjid_Raya_Baiturrahman"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Meuseujid_Raya_Baiturrahman_.jpg/300px-Meuseujid_Raya_Baiturrahman_.jpg",
            "text": "Meuseujid Raya Baiturrahman .jpg"
        }
    ],
    "rating": 0
  },
  {
    "_id": "5fc981741930770bd06990ee",
    "id": 2,
    "name": "Iskandar Muda dari Aceh",
    "description": "Sultan Iskandar Muda (Aksara Jawoë: سلطان إسكندر مودا) (Lahir di Bandar Aceh Darussalam, Kesultanan Aceh, 1590 atau 1593[1] – wafat di Bandar Aceh Darussalam, Kesultanan Aceh, 27 Desember 1636) merupakan sultan yang paling besar dalam masa Kesultanan Aceh, yang berkuasa dari tahun 1607 sampai 1636.[2] Aceh mencapai kejayaannya pada masa kepemimpinan Iskandar Muda, di mana daerah kekuasaannya yang semakin besar dan reputasi internasional sebagai pusat dari perdagangan dan pembelajaran tentang Islam.[1] Beliau juga pernah melakukan serangan terhadap Portugis, tetapi serangan tersebut tidak berhasil, meskipun begitu Aceh tetap merupakan kerajaan yang merdeka. Namanya kini diabadikan untuk Universitas Iskandar Muda, Kodam Iskandar Muda dan Bandar Udara Internasional Sultan Iskandar Muda di Banda Aceh. beliau dikenal sangat piawai dalam membangun kerajaan aceh darussalam.[3][4]",
    "categories": [
        "lainnya"
    ],
    "location": {
        "id": "poi.42949722822",
        "full_address": "Indomaret Iskandar Muda, Ulee Lheu, Banda Aceh, Aceh 23233, Indonesia",
        "village": "Cot Lamkuweueh",
        "district": "Meuraxa",
        "city": "Banda Aceh",
        "region": "Aceh",
        "post_code": "",
        "coordinates": [
            "95.290418",
            "5.553547"
        ]
    },
    "images": [
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/1/12/Gunongan_Putro%C3%AB_Phang.JPG/323px-Gunongan_Putro%C3%AB_Phang.JPG",
            "text": "Iskandar_Muda_dari_Aceh"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Banda_Aceh%27s_Grand_Mosque%2C_Indonesia.jpg/226px-Banda_Aceh%27s_Grand_Mosque%2C_Indonesia.jpg",
            "text": "Iskandar_Muda_dari_Aceh"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jirat_Soleutan_Eseukanda_Muda.JPG/225px-Jirat_Soleutan_Eseukanda_Muda.JPG",
            "text": "Iskandar_Muda_dari_Aceh"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jirat_Soleutan_Eseukanda_Muda.JPG/220px-Jirat_Soleutan_Eseukanda_Muda.JPG",
            "text": "Iskandar_Muda_dari_Aceh"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_the_Aceh_Sultanate.png/22px-Flag_of_the_Aceh_Sultanate.png",
            "text": "Bendera Kesultanan Aceh"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_the_Aceh_Sultanate.png/22px-Flag_of_the_Aceh_Sultanate.png",
            "text": "Bendera Kesultanan Aceh"
        }
    ],
    "rating": 0
  },
  ...
]`,
        },
      },
    },
    {
      tag: 'p',
      content: 'As the name suggest, we can search by category with more than one value. To do it, we can separate each category with comma (,).',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/search?categories=sejarah,budaya`,
    },
    {
      tag: 'accordion-code',
      content: {
        header: 'Result',
        main: {
          tag: 'code',
          content:
`[
  {
    "_id": "5fc981741930770bd06990f0",
    "id": 4,
    "name": "Museum Tsunami",
    "description": "Museum Tsunami Aceh (bahasa Inggris: Aceh Tsunami Museum) adalah sebuah museum di Banda Aceh yang dirancang sebagai monumen simbolis untuk bencana gempa bumi dan tsunami Samudra Hindia 2004 sekaligus pusat pendidikan bencana dan tempat perlindungan darurat andai tsunami terjadi lagi.[1]",
    "categories": [
        "sejarah"
    ],
    "location": {
        "id": "poi.489626325852",
        "full_address": "Museum Tsunami Aceh, Jl. Sultan Iskandar Muda, Banda Aceh, Aceh 23243, Indonesia",
        "village": "Sukaramai",
        "district": "Baiturrahman",
        "city": "Banda Aceh",
        "region": "Aceh",
        "post_code": "",
        "coordinates": [
            "95.315111",
            "5.54773"
        ]
    },
    "images": [
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Museum_Tsunami_2.JPG/220px-Museum_Tsunami_2.JPG",
            "text": "Museum Tsunami 2.JPG"
        }
    ],
    "rating": 0
  },
  {
    "_id": "5fc981741930770bd06990f1",
    "id": 5,
    "name": "Museum Aceh",
    "description": "Museum Aceh didirikan pada masa pemerintahan Hindia Belanda, yang pemakaiannya diresmikan oleh Gubernur Sipil dan Militer Aceh Jenderal H.N.A. Swart pada tanggal 31 Juli 1915. Pada waktu itu bangunannya berupa sebuah bangunan Rumah Tradisional Aceh (Rumoh Aceh). Bangunan tersebut berasal dari Paviliun Aceh yang ditempatkan di arena Pameran Kolonial (De Koloniale Tentoonsteling) di Semarang pada tanggal 13 Agustus - 15 November 1914.",
    "categories": [
        "sejarah"
    ],
    "location": {
        "id": "poi.489626325852",
        "full_address": "Museum Tsunami Aceh, Jl. Sultan Iskandar Muda, Banda Aceh, Aceh 23243, Indonesia",
        "village": "Sukaramai",
        "district": "Baiturrahman",
        "city": "Banda Aceh",
        "region": "Aceh",
        "post_code": "",
        "coordinates": [
            "95.315111",
            "5.54773"
        ]
    },
    "images": [
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/3/37/Krong_Pade.JPG/360px-Krong_Pade.JPG",
            "text": "Museum_Negeri_Aceh"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Jingki.JPG/360px-Jingki.JPG",
            "text": "Museum_Negeri_Aceh"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Museum_Aceh.JPG/300px-Museum_Aceh.JPG",
            "text": "Museum_Negeri_Aceh"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/id/thumb/c/c8/F.W._Stammeshaus.jpg/220px-F.W._Stammeshaus.jpg",
            "text": "Museum_Negeri_Aceh"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/id/thumb/2/29/Rumoh_Aceh_Awai.jpg/220px-Rumoh_Aceh_Awai.jpg",
            "text": "Museum_Negeri_Aceh"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/id/thumb/7/7d/Gedung_Pertemuan_Museum_Aceh.jpg/220px-Gedung_Pertemuan_Museum_Aceh.jpg",
            "text": "Museum_Negeri_Aceh"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Jirat_Soleutan_Aceh_Bugeh.JPG/220px-Jirat_Soleutan_Aceh_Bugeh.JPG",
            "text": "Museum_Negeri_Aceh"
        }
    ],
    "rating": 0
  },
  ...
]`,
        },
      },
    },
    {
      tag: 'p',
      content: 'The url above will return 20 list data with sejarah category or budaya category.',
    },
    {
      tag: 'h3',
      content: 'Additional',
    },
    {
      tag: 'p',
      content: ['We can search data with all query above in one url request. In other hand, we can also use all query at ',
        {
          tag: 'a',
          link: '/docs/get-destinations',
          text: 'get destination page ',
        },
        'if it neccessary.'],
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/search?name=c&location=jakarta&categories=modern&sort=name&page=2&limit=2`,
    },
    {
      tag: 'accordion-code',
      content: {
        header: 'Result',
        main: {
          tag: 'code',
          content:
`[
  {
    "_id": "5fc981741930770bd06991d2",
    "id": 299,
    "name": "Pulogadung Trade Center",
    "description": "Pulogadung Trade Center (atau biasa disingkat PTC) adalah tempat perbelanjaan dengan jenis Pusat Grosir di Jakarta Timur. Tempat ini dibangun oleh Grup Djarum.[1]",
    "categories": [
        "modern"
    ],
    "location": {
        "id": "poi.51539692241",
        "full_address": "Pulogadung Trade Center, Jalan Bekasi Raya KM 21, Jakarta Timur, Daerah Khusus Ibukota Jakarta 13920, Indonesia",
        "village": "Rawa Terate",
        "district": "Cakung",
        "city": "Jakarta Timur",
        "region": "Daerah Khusus Ibukota Jakarta",
        "post_code": "13920",
        "coordinates": [
            "106.91605999999999",
            "-6.182954"
        ]
    },
    "images": [],
    "rating": 0
  },
  {
    "_id": "5fc981741930770bd06991d4",
    "id": 301,
    "name": "Pusat Grosir Cililitan",
    "description": "Pusat Grosir Cililitan ( biasa disebut PGC) adalah sebuah pusat perbelanjaan yang besar di Jakarta Timur, Indonesia. PGC mulai dibangun tahun 2002 dan selesai pada tahun 2004. Sebelum PGC dibangun, lahan tersebut merupakan Terminal Cililitan. Setelah PGC dibangun Terminal tersebut dipindahkan ke samping bangunan PGC dan sekarang semenjak PGC2 dibangun, terminal tersebut berada di bawah gedung. Sejak Januari 2007, PGC telah menjadi pusat perbelanjaan pertama yang tersambung dengan halte Transjakarta Cililitan. Halte busway bisa diakses melalui tangga dari lantai 2 PGC menuju jembatan penyeberangan yang sudah tersambung dengan tangga. Pada tahun 2009, PGC menjadi pusat perbelanjaan pertama yang mempunyai halte busway yang berada di dalam gedung.",
    "categories": [
        "modern"
    ],
    "location": {
        "id": "poi.120259179884",
        "full_address": "Pusat Grosir Cililitan (PGC), Jalan Mayor Jenderal Sutoyo No. 76, Jakarta Timur, Daerah Khusus Ibukota Jakarta 13640, Indonesia",
        "village": "Cililitan",
        "district": "Kramat Jati",
        "city": "Jakarta Timur",
        "region": "Daerah Khusus Ibukota Jakarta",
        "post_code": "13640",
        "coordinates": [
            "106.865774",
            "-6.262696"
        ]
    },
    "images": [
        {
            "href": "//upload.wikimedia.org/wikipedia/id/thumb/d/dd/PGCGE.JPG/300px-PGCGE.JPG",
            "text": "Pusat_Grosir_Cililitan"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/id/thumb/7/7f/Halte_Walk.JPG/300px-Halte_Walk.JPG",
            "text": "Pusat_Grosir_Cililitan"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/3/3d/PGC_Pusat_Grosir_Cililitan.jpg/300px-PGC_Pusat_Grosir_Cililitan.jpg",
            "text": "PGC Pusat Grosir Cililitan.jpg"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/id/thumb/2/23/Logo_Transjakarta.svg/22px-Logo_Transjakarta.svg.png",
            "text": "Logo Transjakarta.svg"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Roundeltjk7.png/22px-Roundeltjk7.png",
            "text": "Roundeltjk7.png"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/id/thumb/2/23/Logo_Transjakarta.svg/22px-Logo_Transjakarta.svg.png",
            "text": "Logo Transjakarta.svg"
        },
        {
            "href": "//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Roundeltjk10.png/22px-Roundeltjk10.png",
            "text": "Roundeltjk10.png"
        }
    ],
    "rating": 0
  }
]`,
        },
      },
    },
  ],
  'destination-reviews': [
    {
      tag: 'h1',
      content: 'Get Destinations Reviews',
    },
    {
      tag: 'h3',
      content: 'Overview',
    },
    {
      tag: 'p',
      content: 'In this section, we will learn how to get, edit, post, and delete a specified review data based on destination _id.',
    },
    {
      tag: 'h3',
      content: 'Get Review by Destination Id',
    },
    {
      tag: 'p',
      content: 'To get specified review data, we can make a GET request based on url below',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/review/:id`,
    },
    {
      tag: 'p',
      content: 'Note that :id param is _id value. We can\'t pass id value because it will return error.',
    },
    {
      tag: 'h3',
      content: 'Add a review',
    },
    {
      tag: 'p',
      content: ['We can add a review to specified destination review by make',
        {
          tag: 'mark',
          text: 'POST',
        },
        'request to url below. '],
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/review/:id`,
    },
    {
      tag: 'p',
      content: 'To create a POST request, we need to include all required data below into you body request.',
    },
    {
      tag: 'table',
      content: {
        head: ['Key', 'Value', 'Description'],
        body: [[
          'name',
          'string & at least 3 letters',
          'Name value must be string with minimum length is 3 letters.',
        ], [
          'rating',
          'number & 0-5',
          'Rating value must be a number and between 0 to 5.',
        ], [
          'comment',
          'string',
          'Comment value must be string.',
        ]],
      },
    },
    {
      tag: 'h4',
      content: 'Example:',
    },
    {
      tag: 'p',
      content: 'Endpoint',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/review/5fc1a02191ce582470a4793e`,
    },
    {
      tag: 'p',
      content: 'Body request',
    },
    {
      tag: 'code',
      content:
`{
  name: 'jhon',
  rating: 5,
  comment: 'Beautiful place ever!',
}`,
    },
    {
      tag: 'h3',
      content: 'Edit a review',
    },
    {
      tag: 'p',
      content: ['We can edit a review to specified destination review by make',
        {
          tag: 'mark',
          text: 'PUT',
        },
        'request to url below. '],
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/review/:id/:review_id`,
    },
    {
      tag: 'p',
      content: 'To create a PUT request, we need to include all required data above into you body request even though we only want to change one value.',
    },
    {
      tag: 'h4',
      content: 'Example:',
    },
    {
      tag: 'p',
      content: 'Endpoint',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/review/5fc1a02191ce582470a4793e/5fc710a8c6ea589856bc5583`,
    },
    {
      tag: 'p',
      content: 'Body request',
    },
    {
      tag: 'code',
      content:
`{
  name: 'jhon',
  rating: 5,
  comment: 'Beautiful place ever!',
}`,
    },
    {
      tag: 'h3',
      content: 'Delete a review',
    },
    {
      tag: 'p',
      content: ['We can delete a review to specified destination review by make',
        {
          tag: 'mark',
          text: 'DELETE',
        },
        'request to url below. '],
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/review/:id/:review_id`,
    },
    {
      tag: 'p',
      content: 'To create a DELETE request, we don\'t need to include body request.',
    },
    {
      tag: 'h4',
      content: 'Example:',
    },
    {
      tag: 'p',
      content: 'Endpoint',
    },
    {
      tag: 'code',
      content: `${origin}api/v1/destinations/review/5fc1a02191ce582470a4793e/5fc710a8c6ea589856bc5583`,
    },
  ],
  'usage-get-destinations': [
    {
      tag: 'h1',
      content: 'Usage Example - Get Destinations',
    },
  ],
  'usage-search-destinations': [
    {
      tag: 'h1',
      content: 'Usage Example - Search Destinations',
    },
  ],
  'usage-destination-reviews': [
    {
      tag: 'h1',
      content: 'Usage Example - Get Destinations Reviews',
    },
  ],
};
