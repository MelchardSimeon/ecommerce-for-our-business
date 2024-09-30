

const onePieceSetData = [{
    image: 'img/1.png',
    name: 'Luffy Set',
    price: 899
}, {
    image: 'img/2.png',
    name: 'Zorro Set',
    price: 899
}, {
    image: 'img/3.png',
    name: 'Zorro Set',
    price: 899
}, {
    image: 'img/4.png',
    name: 'Zorro Set',
    price: 899
}, {
    image: 'img/5.png',
    name: 'Zorro Set',
    price: 899
}, {
    image: 'img/6.png',
    name: 'Zorro Set',
    price: 899
}, {
    image: 'img/7.png',
    name: 'Zorro Set',
    price: 899
}, {
    image: 'img/8.png',
    name: 'Zorro Set',
    price: 899
}, {
    image: 'img/9.png',
    name: 'Zorro Set',
    price: 899
}, {
    image: 'img/10.png',
    name: 'Zorro Set',
    price: 899
}]

let onePieceGrid = document.querySelector('.onepiece-grid')

onePieceSetData.forEach(product => {
    let productsHTML = `
    <div class="onepiece-sets hidden">
        <img src="${product.image}" alt="">
        <p>${product.name}</p>
        <p class="price"><span>&#x20B1</span>${product.price}</p>
    </div>`;
    onePieceGrid.innerHTML += productsHTML;
});


// --------------------------

let fourSeasonsSetData = [{
    image: 'img/bouquet sets/1.png',
    name: 'Spring',
    price: 699
}, {
    image: 'img/bouquet sets/2.png',
    name: 'Summer',
    price: 699
}, {
    image: 'img/bouquet sets/3.png',
    name: 'Winter',
    price: 699
}, {
    image: 'img/bouquet sets/4.png',
    name: 'Autumn',
    price: 699
}]

let fourSeasonsGrid = document.querySelector('.fourseasons-grid')

fourSeasonsSetData.forEach(product => {
    let productsHTML = `
    <div class="four-seasons hidden">
        <img src="${product.image}" alt="">
        <p>${product.name}</p>
        <p class="price"><span>&#x20B1</span>${product.price}</p>
    </div>`;
    fourSeasonsGrid.innerHTML += productsHTML
})


// -------------------------------------------

let randomSetsData = [{
    image: 'img/random-sets/1.png',
    name:'Blossom',
    price: 799
}, {
    image: 'img/random-sets/2.png',
    name:'Blossom',
    price: 799
}, {
    image: 'img/random-sets/3.png',
    name:'Blossom',
    price: 799
}, {
    image: 'img/random-sets/4.png',
    name:'Blossom',
    price: 799
}, {
    image: 'img/random-sets/5.png',
    name:'Blossom',
    price: 799
}]

let randomSetsGrid = document.querySelector('.randomproducts-grid')

randomSetsData.forEach(product => {
    let productsHTML = `
    <div class="random-sets hidden">
        <img src="${product.image}" alt="">
        <p>${product.name}</p>
        <p class="price"><span>&#x20B1</span>${product.price}</p>
    </div>`;

    randomSetsGrid.innerHTML += productsHTML
});


// -------------------------------

let passionFelicityData = [{
    image: 'img/passion-felicity/1.png',
    name: 'Passion',
    price: '559'
}, {
    image: 'img/passion-felicity/2.png',
    name: 'Passion',
    price: '559'
}]

let passionFelicityGrid = document.querySelector('.passion-felicity-grid')

passionFelicityData.forEach(product => {
    let productsHTML = `
    <div class="passion-felicity-sets hidden">
        <img src="${product.image}" alt="">
        <p>${product.name}</p>
        <p class="price"><span>&#x20B1</span>${product.price}</p>
    </div>`

    passionFelicityGrid.innerHTML += productsHTML
})