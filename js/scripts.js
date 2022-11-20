let pokemonList = [

   {name: 'Psyduck', height: '0.8', type: ['water', 'psychic']} ,
   {name: 'Minccino', height: '0.4', type: ['normal']} ,
   {name: 'Lapras', height: '2.5', type: ['ice', 'water']} ,
   {name: 'Areceus', height: '3.2', type: ['normal']} ,
   {name: 'Pichu', height: '0.3', type: ['electric']} ,
   {name: 'Onix', height: '8.8', type: ['rock', 'ground']} ,
   {name: 'Pidget', height: '0.3', type: ['flying', 'normal']} ,
   {name: 'Hoppip', height: '0.4', type: ['grass', 'flying']} ,
   {name: 'Arcanine', height: '1.9', type: ['fire']} ,  
]

for (let i=0; i < pokemonList.length; i++) {
   document.write(pokemonList[i].name + ' ' + '(Height: ' + pokemonList[i].height + ')') ;
   if (pokemonList[i].height >= 5.0) {document.write (" - Wow! That's Big!")} ;
   document.write('</br>')
}