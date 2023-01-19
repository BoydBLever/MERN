const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
console.log(bListPkmn);
const pkmnIds = pokémon.map( p => p.id )
console.log(pkmnIds);

//an array of pokemon objects where the id is evenly divisible by 3
const mod3Pkmn = pokémon.filter(p => p.id % 3 === 0);
console.log("***************1️⃣************");
console.log(mod3Pkmn);
//an array of pokemon objects that are "fire" type
const firePkmn = pokémon.filter(p => p.types.includes("fire")); 
console.log("***************2️⃣************");
console.log(firePkmn);
//an array of pokemon objects that have more than one type
const manyTypePkmn = pokémon.filter(p => p.types.length > 1);
console.log("***************3️⃣************");
console.log(manyTypePkmn);
//an array with just the names of the pokemon
const Pkmn = pokémon.map(p => p.name);
console.log("***************4️⃣************");
console.log(Pkmn);
//an array with just the names of pokemon with an id greater than 99
const Pkmn99 = pokémon.filter(p => p.id > 99);
console.log("***************5️⃣************");
console.log(Pkmn99);
//an array with just the names of the pokemon whose only type is poison
const poisonPkmn = pokémon.filter(p => p.types[0] === "poison" && p.types.length === 1);
console.log("***************6️⃣************"); 
console.log(poisonPkmn);
//an array containing just the first type of all the pokemon whose second type is "flying"
const flying2Pkmn = pokémon.filter(p => p.types[1] = "flying" );
console.log("***************7️⃣************");
console.log(flying2Pkmn);
//a count of the number of pokemon that are "normal" type
const countNormalPkmn = pokémon.filter(p =>
    // console.log(p.types);
    p.types.includes("normal")
).length;
console.log("***************8️⃣************");
console.log(countNormalPkmn);
