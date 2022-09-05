const c = (el)=> {
    return document.querySelector(el);
}
const cs = (el)=> document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true); // Clonar um item do html.
    //Preencher as informações itempizza
    c('.pizza-area').append(pizzaItem);
});