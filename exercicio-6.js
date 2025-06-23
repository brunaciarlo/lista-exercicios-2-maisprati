// Memoization
// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

function memoize(fn){
    const cache = new Map();

    return function( ... args){
        const key = JSON.stringify(args);

        if(cache.has(key)){
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    }
}

function soma(a, b) {
    console.log('Calculando soma...');
    return a + b;
}

const somaMemo = memoize(soma);

console.log(somaMemo(2,3)); 
console.log(somaMemo(3,4)); 
console.log(somaMemo(2,3)); 

