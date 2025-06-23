// Validação de Datas 
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano){

    const mesesValidos = ['janeiro', 'fevereiro', 'março','abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const mesesTrinta = ['abril', 'junho', 'setembro', 'novembro'];
    const anoBissexto = ano => {
        return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    };

    if(!mesesValidos.includes(mes) || dia <= 0){
        return false;
    }

    if(mes === 'fevereiro'){
        if((anoBissexto(ano) === true && dia > 29) || (anoBissexto(ano) === false && dia > 28)){
            return false;
        }
    }

    if(mesesTrinta.includes(mes)){
        if(dia > 30){
            return false;
        }
    }

    if(!mesesTrinta.includes(mes)){
        if(dia > 31){
            return false;
        }
    }

    return true;    
}

console.log(ehDataValida(29, 'fevereiro', 2024));
console.log(ehDataValida(29, 'fevereiro', 2025));
console.log(ehDataValida(31, 'junho', 2023));
console.log(ehDataValida(30, 'junho', 2025));
console.log(ehDataValida(31, 'agosto', 2025));