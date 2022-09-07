const c = (el)=> {
    return document.querySelector(el);
}
const cs = (el)=> document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true); // Clonar um item do html.
    //Preencher as informações itempizza
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;//Adicionar dois algarimos depois da virgula
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault(); //Previne a ação padrão.(Nesse caso atualizar a pagina.)

        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        },150);
    });//Para adicionar um evento de clique.
   
    c('.pizza-area').append(pizzaItem);
});