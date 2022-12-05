
let pokemonRepository = (function () {
   let pokemonList = [

         {name: 'Psyduck' , height: '0.8' , type: ['water', 'psychic'] } ,
         {name: 'Minccino' , height: '0.4' , type: ['normal'] } ,
         {name: 'Lapras' , height: '2.5' , type: ['ice', 'water'] } ,
         {name: 'Areceus' , height: '3.2' , type: ['normal'] } ,
         {name: 'Pichu' , height: '0.3' , type: ['electric'] } ,
         {name: 'Onix' , height: '8.8' , type: ['rock', 'ground'] } ,
         {name: 'Pidgey' , height: '0.3' , type: ['flying', 'normal'] } ,
         {name: 'Hoppip' , height: '0.4' , type: ['grass', 'flying'] } ,
         {name: 'Arcanine' , height: '1.9' , type: ['fire'] } ,  
         ] ; 
 
   return {
     add: function(pokemon) {pokemonList.push(pokemon) ;
     } ,
     getAll: function() {return pokemonList ;
     } ,
   } ;
})() ;

 pokemonRepository.add({name: 'Cottonee' , height: '0.3' , type: ['fairy', 'grass'] }, )

 pokemonRepository.getAll().forEach(function(pokemon) {
   if (pokemon.height >= 5.0) {
      document.write(pokemon.name + ' ' + pokemon.height + " - Wow! That's Big!" + "</br>" ) 
   } 
   else if (pokemon.height < 0.3) {
      document.write(pokemon.name + ' ' + pokemon.height + " - Oh!  Its so tiny!" + "</br>" )
   }
   else {document.write(pokemon.name + ' ' + pokemon.height + "</br>" ) 
   }
})




//for Loop

// for (let i=0; i < pokemonList.length; i++) {
//    document.write(pokemonList[i].name + ' ' + '(Height: ' + pokemonList[i].height + ')') ; 
// if (pokemonList[i].height >= 5.0) {document.write (" - Wow! That's Big!")} ;
//    document.write('</br>')
// }

