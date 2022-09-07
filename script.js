const c = (el)=> {
    return document.querySelector(el);
}
const cs = (el)=> document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true); // Clonar um item do html.
    //Preencher as informações itempizza

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;//Adicionar dois algarimos depois da virgula
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault(); //Previne a ação padrão.(Nesse caso atualizar a pagina.)
        let key = e.target.closest('.pizza-item').getAttribute('data-key');//pegar a chave que foi clicada

        //Eixibir informações do modal:
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;


        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        },150);
    });//Para adicionar um evento de clique.
   
    c('.pizza-area').append(pizzaItem);
});