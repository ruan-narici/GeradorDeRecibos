const numeroReciboGerado = document.querySelectorAll("#numeroReciboGerado");
const valorReciboGerado = document.querySelectorAll("#valorReciboGerado");
const receboDe = document.querySelectorAll("#receboDe");
const correspondeA = document.querySelectorAll("#correspondeA");
const cidadeEstadoData = document.querySelectorAll("#cidadeEstadoData");
const cpfCnpjPagadorGerado = document.querySelectorAll("#cpfCnpjPagadorGerado");
const cpfCnpjBeneficiarioGerado = document.querySelectorAll("#cpfCnpjBeneficiarioGerado");

function capturarDadosEAlimentarRecibo() {
    
    numeroReciboGerado.forEach(x => {
        x.value = localStorage.getItem("numeroDoRecibo");
    });
    valorReciboGerado.forEach(x => {
        x.value = "R$" + localStorage.getItem("totalProdutoServico");
    });
    receboDe.forEach(x => {
        x.innerHTML = localStorage.getItem("nomeCompletoPagador");
    })
    correspondeA.forEach(x => {
        x.innerHTML = localStorage.getItem("descricaoProdutoServico");
    })
    cidadeEstadoData.forEach(x => {
        x.innerHTML = localStorage.getItem("cidadeEstadoData");
    })
    cpfCnpjPagadorGerado.forEach(x => {
        x.innerHTML = localStorage.getItem("cpfCnpjPagador");
    })
    cpfCnpjBeneficiarioGerado.forEach(x => {
        x.innerHTML = localStorage.getItem("cpfCnpjBeneficiario");
    })
    localStorage.clear();
}

capturarDadosEAlimentarRecibo();
