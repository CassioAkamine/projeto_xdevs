/*OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartão da lista

passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
passo 3 - fazer aparecer o próximo cartão da lista
passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão
anterior da lista

passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
passo 3 - fazer aparecer o cartão anterior da lista
passo 4 - buscar o cartão que esta selecionado e esconder
*/

//OBJETIVO 1 - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar*/
const btnAvancar = document.getElementById("btn-avancar");
// OBJETIVO 2 - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//OBJETIVO 1 - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
  const ultimoCartao = cartaoAtual === cartoes.length - 1;
  if (ultimoCartao) return;

  //OBJETIVO 1 - passo 4 - buscar o cartão que esta selecionado e esconder
  esconderCartaoSelecionado();

  //OBJETIVO 1 - passo 3 - fazer aparecer o próximo cartão da lista

  cartaoAtual++;
  mostrarCartao();
});

//OBJETIVO 1 - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function () {
  const primeiroCartao = cartaoAtual === 0;
  if (primeiroCartao) return;

  //OBJETIVO 1 - passo 4 - buscar o cartão que esta selecionado e esconder
  esconderCartaoSelecionado();

  //OBJETIVO 1 - passo 3 - fazer aparecer o cartão anterior da lista

  cartaoAtual--;
  mostrarCartao();
});

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}
