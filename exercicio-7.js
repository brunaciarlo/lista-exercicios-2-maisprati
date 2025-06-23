// Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

let produtos = [
    { nome: 'Caderno', preco: 15.90 },
    { nome: 'Bobbie Goods', preco: 39 },
    { nome: 'Suporte para Notebook', preco: 24 },
    { nome: 'Fone Bluetooth', preco: 29.90 },
    { nome: 'Tinta guache 6 cores', preco: 9 },
    { nome: 'Estojo Grêmio', preco: 39.90 }
]

function ordenaProdutosPorPreco(produtos){
    let listaProdutos = produtos.slice();
    listaProdutos.sort((a, b) => a.preco - b.preco);

    let produtosOrdenados = listaProdutos.map(produto => produto.nome);

    return produtosOrdenados;
}

console.log(ordenaProdutosPorPreco(produtos));