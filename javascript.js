let count = 1;


function render(){
    let container = document.getElementById('pokemon');
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg" alt="" />`;
}

let prev = document.getElementById('prev');
let next = document.getElementById('next');

render();

prev.onclick = function(){
    if(count > 1){
        count = count -1;
        render();
    }

}

next.onclick = function(){
    if (count < 649){
        count = count +1
        render();
    }

}

