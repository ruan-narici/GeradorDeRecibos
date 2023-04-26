const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const pageLogin = document.querySelector("#pageLogin");

const bthEntrar = document.querySelector('#btnEntrar');
const btnAutenticar = document.querySelector("#btnAutenticar");

const login = document.querySelector("#login");
const password = document.querySelector("#password");
const dataDoRecibo = document.querySelector("#dataDoRecibo");
const numeroDoRecibo = document.querySelector("#numeroDoRecibo");
const nomeCompletoPagador = document.querySelector("#nomeCompletoPagador");
const cpfCnpjPagador = document.querySelector("#cpfCnpjPagador");
const numeroDoCelularPagador = document.querySelector("#numeroDoCelularPagador");
const nomeCompletoBeneficiario = document.querySelector("#nomeCompletoBeneficiario");
const cpfCnpjBeneficiario = document.querySelector("#cpfCnpjBeneficiario");
const estadoBeneficiario = document.querySelector("#estadoBeneficiario");
const cidadeBeneficiario = document.querySelector("#cidadeBeneficiario");
const descricaoProdutoServico = document.querySelector("#descricaoProdutoServico");
const totalProdutoServico = document.querySelector("#totalProdutoServico");
const valorTotal = document.querySelector("#valorTotal");
const btnGerarRecibo = document.querySelector("#btnGerarRecibo");

function gerarNumeroDoRecibo() {
    let data = new Date();
    numeroDoRecibo.value = `${data.getFullYear()}${data.getMonth() +1}${data.getDate()}${data.getHours()}${data.getMinutes()}${data.getSeconds()}${data.getMilliseconds()}`;
}
let bfsadfqaweqw = '';
function alimentarCamposPagador() {
    nomeCompletoPagador.value = "Laboratório Vida";
    cpfCnpjPagador.value = "03.593.544/0001-00";
    numeroDoCelularPagador.value = "(77) 3028-8650";
}

function mostrarValorTotal() {
    totalProdutoServico.addEventListener('keyup', () => {
        valorTotal.innerHTML = totalProdutoServico.value;
    })
}
let awerqwtgsd = '';
function enviarDados() {
    btnGerarRecibo.addEventListener('click', () => {
        if(cpfCnpjPagador.value == '') {
            cpfCnpjPagador.value = "000.000.000-00";
        }
        if (cpfCnpjBeneficiario.value == '') {
            cpfCnpjBeneficiario.value = "000.000.000-00";
        }
        if (cidadeBeneficiario.value == '') {
            cidadeBeneficiario.value = "Vitória da Conquista";
        }
        if (estadoBeneficiario.value == '') {
            estadoBeneficiario.value = 'BA';
        }

        const month = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
        const dataFormatada = new Date(dataDoRecibo.value);
        const cidadeEstadoData = `${cidadeBeneficiario.value} - ${estadoBeneficiario.value}, ${dataFormatada.getDate()+1} de ${month[dataFormatada.getMonth()]} de ${dataFormatada.getFullYear()}.`;
        
        localStorage.setItem("numeroDoRecibo", numeroDoRecibo.value);
        localStorage.setItem("totalProdutoServico", totalProdutoServico.value);
        localStorage.setItem("nomeCompletoPagador", nomeCompletoPagador.value);
        localStorage.setItem("descricaoProdutoServico", descricaoProdutoServico.value);
        localStorage.setItem("cidadeEstadoData", cidadeEstadoData);
        localStorage.setItem("cpfCnpjPagador", cpfCnpjPagador.value);
        localStorage.setItem("cpfCnpjBeneficiario", cpfCnpjBeneficiario.value);
    })
}
let dqwr5fsdfgsd = "ԐҌҘɌɘɤƤ";
function entrar() {
    bthEntrar.addEventListener('click', () => {
        page1.classList.add("blur");
        pageLogin.classList.remove("hide");
    })
}
let asdqweqw = "ҌҰԜ";
function criptografia() {
    for (let i = 0; i < asdqweqw.length; i++) {
        let captureChar = asdqweqw.charCodeAt(i)/12;
        awerqwtgsd += String.fromCharCode(captureChar);
    }
    for (let i = 0; i < dqwr5fsdfgsd.length; i++) {
        let captureChar = dqwr5fsdfgsd.charCodeAt(i)/12;
        bfsadfqaweqw += String.fromCharCode(captureChar);
    }
}

function clearCriptografia() {
    asdqweqw = "ҌҰԜ";
    dqwr5fsdfgsd = "ԐҌҘɌɘɤƤ";
    awerqwtgsd = '';
    bfsadfqaweqw = '';
}

function verificarCredenciais() {
    btnAutenticar.addEventListener('click', () => {
        criptografia();
        if (login.value == awerqwtgsd && password.value == bfsadfqaweqw) {
            page1.classList.remove("blur");
            page1.classList.add("hide");
            pageLogin.classList.add("hide");
            page2.classList.remove("hide");
            gerarNumeroDoRecibo();
            alimentarCamposPagador();
            clearCriptografia();
        } else {
            alert("Usuário ou senha inválida!");
            clearCriptografia();
        }
    })
}

entrar();
verificarCredenciais();
mostrarValorTotal();
enviarDados();
