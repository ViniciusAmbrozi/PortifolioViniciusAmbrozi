// Função para escrever letras uma após a outra
function escrevendoLetra() {
  // Função interna para ativar a letra
  function ativaLetra(elemento) {
    // Divide o texto do elemento em um array de letras
    const arrTexto = elemento.innerHTML.split("");
    // Limpa o conteúdo HTML do elemento
    elemento.innerHTML = "";
    // Para cada letra no array de texto, define um timeout para adicionar a letra ao conteúdo HTML do elemento
    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }

  // Seleciona o elemento com a classe 'digitando'
  const titulo = document.querySelector(".digitando");
  // Chama a função ativaLetra no elemento selecionado
  ativaLetra(titulo);
}

escrevendoLetra();

// Função para ativar o menu mobile
function menuMobol() {
  // Seleciona o ícone do menu e o menu de navegação
  const ativaMenu = document.querySelector(".fa-bars");
  const navMenu = document.querySelector("header .navegacao-primaria");

  // Adiciona um ouvinte de evento de clique ao ícone do menu
  ativaMenu.addEventListener("click", () => {
    // Alterna a classe 'fa-x' no ícone do menu e a classe 'ativado' no menu de navegação
    ativaMenu.classList.toggle("fa-x");
    navMenu.classList.toggle("ativado");
  });
}

menuMobol();

// Função para mostrar informações sobre mim
function sobreMim() {
  // Seleciona vários elementos na página
  const divExperiencia = document.querySelectorAll(".experience_content div");
  const liExperiencia = document.querySelectorAll(".experience_content ul li");
  const divEducation = document.querySelectorAll(".education_content div");
  const liEducation = document.querySelectorAll(".education_content ul li");

  // Adiciona a classe 'ativo' ao primeiro elemento de cada lista
  divExperiencia[0].classList.add("ativo");
  liExperiencia[0].classList.add("ativo");
  divEducation[0].classList.add("ativo");
  liEducation[0].classList.add("ativo");

  // Função para mostrar o slide
  function slideShow(index) {
    // Remove a classe 'ativo' de todos os divs e botões de experiência
    divExperiencia.forEach((div) => {
      div.classList.remove("ativo");
    });
    liExperiencia.forEach((botao) => {
      botao.classList.remove("ativo");
    });
    // Adiciona a classe 'ativo' ao div e botão de experiência no índice especificado
    divExperiencia[index].classList.add("ativo");
    liExperiencia[index].classList.add("ativo");
  }

  // Função para mostrar o slide 2
  function slideShow2(index) {
    // Remove a classe 'ativo' de todos os divs e botões de educação
    divEducation.forEach((div) => {
      div.classList.remove("ativo");
    });
    liEducation.forEach((botao) => {
      botao.classList.remove("ativo");
    });
    // Adiciona a classe 'ativo' ao div e botão de educação no índice especificado
    divEducation[index].classList.add("ativo");
    liEducation[index].classList.add("ativo");
  }

  // Adiciona um ouvinte de evento de clique a cada botão de experiência
  liExperiencia.forEach((event, index) => {
    event.addEventListener("click", () => {
      slideShow(index);
    });
  });

  // Adiciona um ouvinte de evento de clique a cada botão de educação
  liEducation.forEach((event, index) => {
    event.addEventListener("click", () => {
      slideShow2(index);
    });
  });
}

sobreMim();

// Seleciona todos os itens da lista e botões
const listaAll = document.querySelectorAll(".projects_armazenamento ul li");
const buttonGeral = document.querySelectorAll(".projects_models ul li");
const buttonAll = document.querySelectorAll(".projects_models .all");

// Função para carregar a página
function loadingPage() {
  // Adiciona um ouvinte de evento de DOMContentLoaded ao documento
  document.addEventListener("DOMContentLoaded", function () {
    // Mostra a lista quando a página é carregada
    showLista(listaAll, "all");
  });
}

loadingPage();

// Função para mostrar a lista
function showLista(lista, button = "all") {
  // Para cada item na lista
  lista.forEach((item) => {
    // Remove a classe 'ativo'
    item.classList.remove("ativo");
    // Se o botão é 'all' ou o item contém a classe do botão, adiciona a classe 'ativo'
    if (button === "all" || item.classList.contains(button)) {
      item.classList.add("ativo");
    }
  });
}

// Para cada botão geral
buttonGeral.forEach((item) => {
  // Adiciona um ouvinte de evento de clique
  item.addEventListener("click", (e) => {
    // Obtém o botão atual
    let currentbutton = e.target;
    // Se o botão atual contém a classe 'all', 'design', 'graphic' ou 'website', mostra a lista correspondente
    if (currentbutton.classList.contains("all")) {
      showLista(listaAll);
    }
    if (currentbutton.classList.contains("design")) {
      showLista(listaAll, "design");
    }
    if (currentbutton.classList.contains("graphic")) {
      showLista(listaAll, "graphic");
    }
    if (currentbutton.classList.contains("website")) {
      showLista(listaAll, "website");
    }
  });
});
