// Função para exibir a árvore DOM
function showDOMTree(htmlCode) {
    // Cria um elemento temporário para analisar o HTML
    var temp = document.createElement('div');
    temp.innerHTML = htmlCode;

    // Remove qualquer espaço em branco entre os elementos
    var tree = temp.firstChild;

    // Exibe a árvore DOM
    console.log(tree);
}

// Função para lidar com a colagem do HTML
function handlePaste(event) {
    // Obtém o conteúdo colado
    var clipboardData, pastedData;
    clipboardData = event.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('text/html');

    // Exibe a árvore DOM
    showDOMTree(pastedData);
}

// Adiciona um ouvinte de evento para lidar com a colagem
document.addEventListener('paste', handlePaste);
