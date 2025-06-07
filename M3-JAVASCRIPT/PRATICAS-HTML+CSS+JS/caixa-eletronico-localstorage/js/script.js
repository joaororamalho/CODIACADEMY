let saldo = parseFloat(localStorage.getItem("saldo")) || 100;
let historico = JSON.parse(localStorage.getItem("historico")) || [];

atualizarSaldo();
carregarHistorico();

function atualizarSaldo() {
  document.getElementById("saldo").innerText = `R$ ${saldo.toFixed(2)}`;

  localStorage.setItem("saldo", saldo);
}

function depositar() {
  let valor = parseFloat(document.getElementById("valor").value);

  if (isNaN(valor) || valor <= 0) {
    alert("Digite um valor válido para saque!");
    return;
  }

  saldo += valor;
  atualizarSaldo();
  adicionarTransacao(`Depósito de R$ ${valor.toFixed(2)}`);
  document.getElementById("valor").value = "";
}

function sacar() {
  let valor = parseFloat(document.getElementById("valor").value);

  if (isNaN(valor) || valor <= 0) {
    alert("Digite um valor válido para saque!");
    return;
  }

  if (valor > saldo) {
    alert("Erro: Saldo insuficiente!");
    return;
  }

  saldo -= valor;
  atualizarSaldo();
  adicionarTransacao(`Saque de R$ ${valor.toFixed(2)}`);
  document.getElementById("valor").value = "";
}

function adicionarTransacao(descricao) {
  let dataHora = new Date().toLocaleDateString();
  let novaTransacao = `${descricao} - ${dataHora}`;

  historico.unshift(novaTransacao);
  localStorage.setItem("historica", JSON.stringify(historico));

  carregarHistorico();
}

function carregarHistorico() {
  let listaHistorico = document.getElementById("historico-transacoes");
  listaHistorico.innerHTML = "";

  historico.forEach((transacao) => {
    let li = document.createElement("li");
    li.innerText = transacao;
    listaHistorico.appendChild(li);
  });
}
