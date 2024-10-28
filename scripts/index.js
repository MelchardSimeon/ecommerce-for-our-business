
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
    name: 'Sanji Set',
    price: 899
}, {
    image: 'img/4.png',
    name: 'Nami Set',
    price: 899
}, {
    image: 'img/5.png',
    name: 'Chopper Set',
    price: 899
}, {
    image: 'img/6.png',
    name: 'Robin Set',
    price: 899
}, {
    image: 'img/7.png',
    name: 'Brook Set',
    price: 899
}, {
    image: 'img/8.png',
    name: 'Franky Set',
    price: 899
}, {
    image: 'img/9.png',
    name: 'Jinbei Set',
    price: 899
}, {
    image: 'img/10.png',
    name: 'Soge King Set',
    price: 899
}]


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
    price: 629
}, {
    image: 'img/bouquet sets/4.png',
    name: 'Autumn',
    price: 679
}]


let randomSetsData = [{
    image: 'img/random-sets/1.png',
    name:'Blossom',
    price: 649
}, {
    image: 'img/random-sets/2.png',
    name:'Black Pink',
    price: 649
}, {
    image: 'img/random-sets/3.png',
    name:'Amethyst',
    price: 699
}, {
    image: 'img/random-sets/4.png',
    name:'Bad Blood',
    price: 649
}, {
    image: 'img/random-sets/5.png',
    name:'Sunflower',
    price: 699
}]


let passionFelicityData = [{
    image: 'img/passion-felicity/1.png',
    name: 'Passion',
    price: '599'
}, {
    image: 'img/passion-felicity/2.png',
    name: 'Felicity',
    price: '599'
}, {
    image: 'img/passion-felicity/3.png',
    name: 'Euphoria',
    price: '599'
}, {
    image: 'img/passion-felicity/4.png',
    name: 'Iris',
    price: '599'
}]

let pokemonData = [{
    image: 'img/pokemon/c.png',
    name: 'Squirtle',
    price: '59'
}, {
    image: 'img/pokemon/d.png',
    name: 'Bulbasaur',
    price: '59'
}, {
    image: 'img/pokemon/e.png',
    name: 'Charmander',
    price: '59'
}, {
    image: 'img/pokemon/e.png',
    name: 'Pickachu',
    price: '59'
}]

let onepieceKeychainData = [{
    image: 'img/Onepiece-keychains/Luffy.png',
    name: 'Luffy',
    price: '59'
}, {
    image: 'img/Onepiece-keychains/Zorro.png',
    name: 'Zorro',
    price: '59'
}, {
    image: 'img/Onepiece-keychains/Sanji.png',
    name: 'Sanji',
    price: '59'
}, {
    image: 'img/Onepiece-keychains/Brook.png',
    name: 'Brook',
    price: '59'
}, {
    image: 'img/Onepiece-keychains/Chopper.png',
    name: 'Chopper',
    price: '59'
}, {
    image: 'img/Onepiece-keychains/Blackbeard.png',
    name: 'Blackbeard',
    price: '59'
}, {
    image: 'img/Onepiece-keychains/Whitebeard.png',
    name: 'Whitebeard',
    price: '59'
}, {
    image: 'img/Onepiece-keychains/Shanks.png',
    name: 'Shanks',
    price: '59'
}, {
    image: 'img/Onepiece-keychains/Law.png',
    name: 'Law',
    price: '59'
}]

let carBrandData = [{
    image: 'img/carbrands/honda.png',
    name: 'Honda',
    price: '59'
}, {
    image: 'img/carbrands/mazda.png',
    name: 'Mazda',
    price: '59'
}, {
    image: 'img/carbrands/toyota.png',
    name: 'Toyota',
    price: '59'
}, {
    image: 'img/carbrands/mitsubishi.png',
    name: 'Mitsubishi',
    price: '59'
}, {
    image: 'img/carbrands/hyundai.png',
    name: 'Hyundai',
    price: '59'
}, {
    image: 'img/carbrands/bmw.png',
    name: 'BMW',
    price: '59'
}]


let grootData = [{
    image: 'img/otherKeychains/Groot.png',
    name: 'Groot',
    price: '59'
}]

let minipotsData = [{
    image: 'img/otherKeychains/Groot.png',
    name: 'Groot',
    price: '59'
}]


function generateHTML(gridSelector, data, className) {
    const grid = document.querySelector(gridSelector)

    data.forEach(product => {
        const div = document.createElement('div')
        div.className = className + ' hidden' + ' hoverz'
        div.innerHTML = `
        <img src="${product.image}" alt="">
        <p>${product.name}</p>
        <p class="price"><span>&#x20B1</span>${product.price}</p>`;

        grid.appendChild(div)
    })
}


generateHTML('.onepiece-grid', onePieceSetData, 'onepiece-sets');
generateHTML('.fourseasons-grid', fourSeasonsSetData, 'four-seasons');
generateHTML('.randomproducts-grid', randomSetsData, 'random-sets');
generateHTML('.passion-felicity-grid', passionFelicityData, 'passion-felicity-sets');
generateHTML('.pokemon-grid', pokemonData, 'pokemon-keychain-sets');
generateHTML('.onepiece-keychain-grid', onepieceKeychainData, 'onepiece-keychain-sets');
generateHTML('.carbrand-grid', carBrandData, 'carBrand-sets');
generateHTML('.groot-grid', grootData, 'groot-sets');




