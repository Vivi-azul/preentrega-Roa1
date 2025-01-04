const products = [
    {
      id: "Adff21",
      nombre: "Pedigree Adulto",
      descripcion: "Sabor carne, pollo y cereales - Alimento 100% completo y balanceado para perros adultos",
      stock: 15,
      categoria: "alimentos",
      imagen: "public/img/pedigree_adulto.png",
      precio: 3000
    },
    {
      id: "Gjmn222",
      nombre: "Dog Chow",
      descripcion: "En cada croqueta encontrarás un alimento 100% balanceado, con probióticos naturales que equilibran su flora intestinal, omegas 6 y 3 y niveles de sodio adecuados.",
      stock: 10,
      categoria: "alimentos",
      imagen: "public/img/dogchow.png",
      precio: 2500
    },
    {
      id: "Lom222",
      nombre: "Juguete Pelota Para Perros",
      descripcion: "Los juguetes para perros Dura Play también vienen en una variedad de tamaños y colores: pelota y un anillo doble con bola. En cada paquete encontraras 3 colores diferentes",
      stock: 21,
      categoria: "accesorios y juguetes",
      imagen: "public/img/pelotapara_perro_colores.jpg",
      precio: 5000
    },
    {
      id: "Htm123",
      nombre: "Purina : Pro Plan",
      descripcion: "Es una comida para que ayuda a los perros de razas medianas a mantenerse fuertes y llenos de vitalidad. Esta fórmula ofrece, a través de sus sabrosas croquetas, un contenido rico en proteínas (26%) y grasas (15%), utilizando como ingrediente principal carne fresca de pollo, que ayuda a los perros a mantener la masa corporal magra y músculos fuertes.",
      stock: 14,
      categoria: "alimentos",
      imagen: "public/img/purina-pro-plan-perros-adult-razas-medianas.png",
      precio: 4000
    },
    {
      id: "Jfw222",
      nombre: "Collarin de Paseo",
      descripcion: "Collar de Nylon para paseo",
      stock: 6,
      categoria: "accesorios y juguetes",
      imagen: "public/img/collar-de-nylon.jpg",
      precio: 2200
    },
    {
      id: "Gtm222",
      nombre: "Bulldog",
      descripcion: "Pequeño bulldog de 3 años",
      stock: 10,
      categoria: "adopciones",
      imagen: "public/img/bulldog.png",
      precio: "Adoptame!"
    },
    {
      id: "Gtm221",
      nombre: "Chiwuawua",
      descripcion: "Tierno y gracioso chiwuawua, de 2 años.",
      stock: 12,
      categoria: "adopciones",
      imagen: "public/img/chiwuawua.jpg",
      precio: "Adoptame!"
    },
    {
      id: "Gtm566",
      nombre: "Dalmata",
      descripcion: "Raza dalmata de 4 años",
      stock: 5,
      categoria: "adopciones",
      imagen: "public/img/dalmata.png",
      precio: "Adoptame!"
    },
    {
      id: "Tmy543",
      nombre: "Cachorro de Labrador",
      descripcion: "Este pequeño cachorro de solo 5 meses, muy tienro y astuto.",
      stock: 6,
      categoria: "adopciones",
      imagen: "public/img/cachorro_labrador.png",
      precio: "Adoptame!"
    },
    {
      id: "Tmy545",
      nombre: "Cachupin",
      descripcion: "Este alimento seco para perro adulto de 25 kg sabor carne y arroz, proporciona todo lo necesario para que tu perro crezca fortalecido",
      stock: 7,
      categoria: "alimentos",
      imagen: "public/img/cachupin_comida.webp",
      precio: 2500
    },
    {
      id: "Tmy546",
      nombre: "Jueguete de Hueso",
      descripcion: "Juguete para perros con forma de hueso",
      stock: 30,
      categoria: "accesorios y juguetes",
      imagen: "public/img/juguete_formadehueso.jpg",
      precio: 1500
    },
    {
      id: "Tmy547",
      nombre: "Cepillo para peinar",
      descripcion: "Cepillo para peinar a perro, utilizalo en seco o durante su baño.",
      stock: 15,
      categoria: "accesorios y juguetes",
      imagen: "public/img/cepilloperro_para_peinar.jpg",
      precio: 750
    },
    {
      id: "Tmy548",
      nombre: "Recomendaciones para cuidado y salud de tu mascota",
      descripcion: "Identifica a tu Mascota con un microchip ó Chapa de identificación. Proporcionale una dieta saludable y equilibrada. Programa visitas regulares al veterinario como parte de una rutina de cuidado preventivo. Si quieres saber mas, contrata nuestros servicios, los cuales incluyen adiestramiento canino",
      stock: 10000,
      categoria: "recomendaciones",
      precio: 25000
    }
  ]

 const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products)
          }, 400)
    })
        
 }

//  export const getProductById = (productId) => {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(products.find(prod => prod.id === productId))
//         }, 500)
//     })
//  }

//  export const getProductByCategoria = (categoriaId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.filter(prod => prod.categoria === categoriaId))
//         }, 800)
//     })
//  }

//  export const getProductsBydescripción = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(products)
//           }, 1000)
//     })
        
//  }

export { getProducts }