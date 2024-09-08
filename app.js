function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    //se o campo pesquisa for uma string sem nada
    if (campoPesquisa == ""){
      section.innerHTML = "<p>Digite um termo no campo de busca para descobrir mais sobre os significados das plantas.</p><p>Você pode buscar tanto pelo nome da planta, quanto pelo seu significado. Tente buscar por \"rosa\" ou \"amor\", por exemplo.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase ()


    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let significado = "";
    let origem = "";
    let combina = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLocaleLowerCase ()
      significado = dado.significado.toLocaleLowerCase ()
      origem = dado.origem.toLocaleLowerCase ()
      combina = dado.combina.toLocaleLowerCase ()
      tags = dado.tags.toLocaleLowerCase ()
      //se titulo includes campoPesquisa
      // então, faça...
      if (titulo.includes(campoPesquisa) || significado.includes(campoPesquisa) || origem.includes(campoPesquisa) || combina.includes(campoPesquisa) ||tags.includes(campoPesquisa)){
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.significado}</p>
          <p class="descricao-meta">${dado.origem}</p>
          <p class="descricao-meta">${dado.combina}</p>
        </div>
      `;

      }

    }
  
    if(!resultados) {

      resultados = "<p>Nada foi encontrado.</p>"


    }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }




