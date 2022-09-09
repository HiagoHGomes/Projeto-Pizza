let modalQt = 1;
let modalKey = 0;
let cart = [];
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
        modalQt = 1
        modalKey = key;



        //Eixibir informações do modal:
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        c('.pizzaInfo--size.selected').classList.remove('selected');
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if (sizeIndex==2){
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        c('.pizzaInfo--qt').innerHTML = modalQt;

        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        },150);
    });//Para adicionar um evento de clique.
   
    c('.pizza-area').append(pizzaItem);
});

//Eventos do modal (cancelar/voltar)

function closeModal() {
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.pizzaWindowArea').style.display = 'none';
    },500);
    modalQt = 1;
}

cs('.pizzaInfo--cancelButton', '.pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});

//Fecha o modal clicando fora dele.
const withOnOutside = (fn) => (event) => {
    if (event.target === event.currentTarget) {
        fn(event);
    }
};
let modal = c(".pizzaWindowArea");
modal.addEventListener("click", withOnOutside(() => closeModal()));

//Botão de - e +:
c(".pizzaInfo--qtmenos").addEventListener('click', ()=>{
    if(modalQt>1){
        modalQt--;
        c('.pizzaInfo--qt').innerHTML = modalQt;
    }
});

c(".pizzaInfo--qtmais").addEventListener('click', ()=>{
    modalQt++;
    c('.pizzaInfo--qt').innerHTML = modalQt;
    // c('.pizzaInfo--actualPrice').innerHTML = modalQt;
});

//Tamanho da pizza: 
cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', (e)=>{
        c('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    })
});



//Adicionar ao carrinho:
c('.pizzaInfo--addButton').addEventListener('click',()=>{
    //Qual a pizza:
    console.log(modalKey);

    //Qual o tamanho:
    let size = c('.pizzaInfo--size.selected').getAttribute('data-key');
    console.log(size)

    //Quantidade:
    console.log(modalQt)
})


cart.push({
    id: pizzaJson[modalKey].id,
    size: size,
    qt: modalQt,
})

