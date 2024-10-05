/* 

Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. 

Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:
*/

// Função principal

function calcularTotalMedalhas() {
    let paises = [];
    let medalhas = [];
    let totalMedalhas = 0;
  
    while (true) {
      let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");
  
      if (pais.toLowerCase() === "sair") {
        break;
      }
  
      let medalhasOuro = parseFloat(prompt(`Digite o número de medalhas de ouro do ${pais}:`));
      let medalhasPrata = parseFloat(prompt(`Digite o número de medalhas de prata do ${pais}:`));
      let medalhasBronze = parseFloat(prompt(`Digite o número de medalhas de bronze do ${pais}:`));
  
      if (!isNaN(medalhas)) {
        paises.push(pais);
        medalhas.push(medalhasOuro+medalhasPrata+medalhasBronze);
        totalMedalhas += medalhas; 
      } else {
        alert("Por favor, insira um valor numérico válido para as medalhas.");
      }
    }
  
    if (paises.length > 0) {
      let maiorMedalhas = medalhas[0];
      let menorMedalhas = medalhas[0];
      let paisMaiorMedalhas = paises[0];
      let paisMenorMedalhas = paises[0];
  
      for (let i = 1; i < medalhas.length; i++) {
        if (medalhas[i] > maiorMedalhas) {
          maiorMedalhas = medalhas[i];
          paisMaiorMedalhas = paises[i];
        }
        if (medalhas[i] < menorMedalhas) {
          menorMedalhas = medalhas[i];
          paisMenorMedalhas = paises[i];
        }
      }
  
      alert(`Relatório de número de melhadas Olimpiadas 2024:
      - País com maior número de medalhas: ${paisMaiorMedalhas} (${maiorMedalhas}
      - País com menor número de medalhas: ${paisMenorEmissao} (${menorEmissao}`);
    } else {
      alert("Nenhum número de melhadas foi inserido.");
    }
  }
  calcularTotalMedalhas();


  // Função principal
function calcularTotalMedalhas() {
  let paises = [];
  let medalhas = [];

  while (true) {
      let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");
  
      if (pais.toLowerCase() === "sair") {
          break;
      }
  
      let medalhasOuro = parseFloat(prompt(`Digite o número de medalhas de ouro do ${pais}:`));
      let medalhasPrata = parseFloat(prompt(`Digite o número de medalhas de prata do ${pais}:`));
      let medalhasBronze = parseFloat(prompt(`Digite o número de medalhas de bronze do ${pais}:`));
  
      if (!isNaN(medalhasOuro) && !isNaN(medalhasPrata) && !isNaN(medalhasBronze)) {
          let totalMedalhas = medalhasOuro + medalhasPrata + medalhasBronze;
          paises.push(pais);
          medalhas.push(totalMedalhas);
      } else {
          alert("Por favor, insira um valor numérico válido para as medalhas.");
      }
  }

  if (paises.length > 0) {
      let maiorMedalhas = medalhas[0];
      let menorMedalhas = medalhas[0];
      let paisMaiorMedalhas = paises[0];
      let paisMenorMedalhas = paises[0];

      for (let i = 1; i < medalhas.length; i++) {
          if (medalhas[i] > maiorMedalhas) {
              maiorMedalhas = medalhas[i];
              paisMaiorMedalhas = paises[i];
          }
          if (medalhas[i] < menorMedalhas) {
              menorMedalhas = medalhas[i];
              paisMenorMedalhas = paises[i];
          }
      }

      alert(`Relatório de número de medalhas Olimpíadas 2024:
      - País com maior número de medalhas: ${paisMaiorMedalhas} (${maiorMedalhas})
      - País com menor número de medalhas: ${paisMenorMedalhas} (${menorMedalhas})`);
  } else {
      alert("Nenhum número de medalhas foi inserido.");
  }
}

// Executa a função
calcularTotalMedalhas();