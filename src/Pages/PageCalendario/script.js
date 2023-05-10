// obter o elemento do calendário
const calendario = document.querySelector('.calendario');

// obter a data atual
const hoje = new Date();

// obter o mês e ano atual
const mesAtual = hoje.getMonth();
const anoAtual = hoje.getFullYear();

// obter o número de dias do mês atual
const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

// criar uma tabela e cabeçalho para o calendário
let tabela = '<table>';
tabela += '<thead>';
tabela += '<tr>';
tabela += '<th>Domingo</th>';
tabela += '<th>Segunda</th>';
tabela += '<th>Terça</th>';
tabela += '<th>Quarta</th>';
tabela += '<th>Quinta</th>';
tabela += '<th>Sexta</th>';
tabela += '<th>Sábado</th>';
tabela += '</tr>';
tabela += '</thead>';

// criar as células para os dias do mês atual
tabela += '<tbody>';
let diaAtual = 1;
for (let i = 0; i < 6; i++) {
  tabela += '<tr>';
  for (let j = 0; j < 7; j++) {
    if (i === 0 && j < new Date(anoAtual, mesAtual, 1).getDay()) {
      // células vazias para os dias antes do primeiro dia do mês
      tabela += '<td></td>';
    } else if (diaAtual > diasNoMes) {
      // células vazias para os dias depois do último dia do mês
      tabela += '<td></td>';
    } else {
      // células com o dia do mês atual
      tabela += '<td>' + diaAtual + '</td>';
      diaAtual++;
    }
  }
  tabela += '</tr>';
}
tabela += '</tbody>';
tabela += '</table>';

// adicionar a tabela ao elemento do calendário
calendario.innerHTML = tabela;
