/*
    Per una nota App di food delivery, ci viene richiesto di 
    implementare alcune funzionalità per la gestione del carrello.
*/

//prodotti attualmente presenti nel carrello dell'utente
const productsInCart = [
  {
    id: 324234,
    category: 0,
    quantity: 1,
    title: "Margherita",
    description: "Pomodoro, mozzarella e basilico",
    ingredients: ["pomodoro", "mozzarella", "basilico"],
    price: 6.5,
  },
  {
    id: 098394,
    category: 0,
    quantity: 1,
    title: "Calzone Classico",
    description: "Ripieno di Pomodoro, mozzarella e prosciutto cotto",
    ingredients: ["pomodoro", "mozzarella", "prosciutto cotto"],
    price: 7.0,
  },
  {
    id: 432432,
    category: 4,
    quantity: 1,
    title: "Coca Cola Zero (33CL)",
    description: "",
    price: 3.0,
  },
  {
    id: 564564,
    category: 0,
    quantity: 1,
    title: "Salamino",
    description: "Pomodoro, mozzarella e salamino piccante",
    ingredients: ["pomodoro", "mozzarella", "salamino"],
    price: 7.5,
  },
  {
    id: 564564,
    category: 0,
    quantity: 1,
    title: "Salamino",
    description: "Mozzarella, salsiccia, patate al forno",
    ingredients: ["mozzarella", "salsiccia", "patate al forno"],
    price: 7.5,
  },
  {
    id: 333445,
    category: 4,
    quantity: 1,
    title: "Acqua Naturale (1L)",
    description: "",
    price: 2,
  },
  {
    id: 656765,
    category: 3,
    quantity: 3,
    title: "Cheesecake Cioccolato",
    description: "Dolce a base di formaggio fresco e topping al cioccolato",
    price: 5,
  },
];

//array statico di oggetti che contiene tutte le categorie presenti nell'app
const categories = [
  {
    id: 0,
    name: "pizze",
  },
  {
    id: 1,
    name: "panini",
  },
  {
    id: 2,
    name: "sushi",
  },
  {
    id: 3,
    name: "dessert",
  },
  {
    id: 4,
    name: "bevande",
  },
];

//FUNZIONI DA IMPLEMENTARE:

/* 
  ---------------------------------------
  getTotalAmount: restituisce il prezzo finale che l'utente dovrà pagare al checkout
  ---------------------------------------
*/
function getTotalAmount() {
  return productsInCart.reduce((sum, product) => sum + product.price, 0);
}

console.log("Total amount:", getTotalAmount());

/* 
  ---------------------------------------
  getCategoryCode: prende come parametro il nome di una categoria e ne restituisce l'id
  ---------------------------------------
*/

const getCategoryCode = (categoryName) =>
  categories.find((category) => category.name == categoryName)?.id;

console.log("Category code for 'pizze':", getCategoryCode("pizze"));
console.log("Category code for 'pizzee':", getCategoryCode("pizzee"));

/*
  ---------------------------------------
  getCategoryCount: prende come parametro il nome di una categoria e restituisce il numero di prodotti presenti per questa
  ---------------------------------------
*/

const getCategoryCount = (categoryName) =>
  productsInCart.filter((item) => item.category == categoryName).length;

console.log(
  "Number of 'pizze' items:",
  getCategoryCount(getCategoryCode("pizze"))
);

/*
  ---------------------------------------
  removeFromCart: prende l'id di un prodotto e ne rimuove una unità dal carrello. Se quantity diventa 0, rimuove il prodotto dall'array
  ---------------------------------------
*/

function removeFromCart(productId) {
  let selectedItem = productsInCart.find((item) => productId == item.id);
  selectedItem.quantity -= 1;
  if (selectedItem.quantity <= 0) {
    let itemIndex = productsInCart.findIndex(
      (item) => item.id == selectedItem.id
    );
    productsInCart.splice(itemIndex, 1);
    return productsInCart;
  } else {
    return selectedItem.quantity;
  }
}

const getTitleFromId = (productId) =>
  productsInCart.find((item) => item.id == productId).title;

console.log(
  `Remove one ${getTitleFromId(656765)}, you now have`,
  removeFromCart(656765)
);

console.log(removeFromCart(098394));

/*
  ---------------------------------------
  printCart: stampa su console tutti i prodotti divisi per categoria. 

  formato richiesto:
      *** PIZZA ***
      - 1 x Margherita (Pomodoro, mozzarella e basilico) | 6.5€
      - 1 x Calzone classico (Ripieno di Pomodoro, mozzarella e prosciutto cotto) | 7€

      *** BEVANDE ***
      - 1 x Coca Cola Zero (33CL) | 3€

      *** TOTALE ***
      16.5€
  ---------------------------------------
*/

/*
  ---------------------------------------
  getPizzeBianche: Restituisce tutte le pizze bianche presenti nel carrello (pizze senza pomodoro)
  ---------------------------------------

*/
