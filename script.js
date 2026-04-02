const produtos = {
    "123" : {"nome": "Jorge e Mateus", "preco" : 9.0000},
    "456" : {"nome": "Fala Mansa", "Preco": 3.0000},
    "789" : {"nome": "Sabrina Camperter", "preco": 12.0000},
    "147" : {"nome": "Gaucho da Fronteira", "preco": 90.5000},
};

let carrinho =[];

const audio = new Audio ("bip.mp3")

window.onload = () => {
    document.getElementById("cod").focus();
}

 function addProduto () {
    const codHtml = document.getElementById("cod");
    const qtdHtml = document.getElementById("qtd");
    
    const valorCod = codHtml.value;
    const valorQtd = qtdHtml.value;

    if (!produtos[valorCod]) {
        alertItem();
        return;
    }

    const infoProduto = produtos[codHtml];

    const item = {
        nome: infoProduto.nome,
        preco: infoProduto.preco,
        quantidade: valorQtd,
        subtot: infoProduto.preco * valorQtd
    };
    carrinho.push(item);
    audio.currentTime = 0;
    audio.play();

    atualizarTela();
    
    qtdHtml.value = "1";
    codHtml.value = "";



}  