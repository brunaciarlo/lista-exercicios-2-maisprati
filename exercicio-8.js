// Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

let vendas = [
    { cliente: 'Alberto', total: 280 },
    { cliente: 'Bianca', total: 129.9 },
    { cliente: 'Diego', total: 30 },
    { cliente: 'Alberto', total: 130 },
    { cliente: 'Joaquina', total: 150 },
    { cliente: 'Bianca', total: 380 }
]

function agruparPorCliente(vendas) {
    return vendas.reduce((somaTotal, venda) => {
        const { cliente, total } = venda;

        somaTotal[cliente] = (somaTotal[cliente] || 0) + total;

        return somaTotal;
    }, {});
}

console.log(agruparPorCliente(vendas));