const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

//CONHECIMENTOS

function initKnowledges() {
  async function knowJson() {
    const response = await fetch("./js/knowledges.json");
    const json = await response.json();
    const knows = json.knowJson;

    createKnowLedges(knows);
  }
  knowJson();
}
initKnowledges();

function createKnowLedges(array) {
  array.map((item) => {
    let knowledge = c("#knowledge");
    let ul = document.createElement("ul");
    ul.classList.add("knows");
    let h3 = document.createElement("h3");
    h3.classList.add("know-title");
    h3.innerHTML = item.titulo;
    ul.appendChild(h3);
    knowledge.append(ul);
    item.ferramentas.forEach((element) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      let span = document.createElement("span");
      (img.src =
        "images/icons/" + element.toLowerCase().replace(" ", "") + ".png"),
        (span.innerHTML = element);
      li.append(img, span);

      ul.appendChild(li);
    });
  });
}

function initAnimaScroll() {
  function animaScroll() {
    const knows = cs(".knows");
    if (knows.length) {
      const windowMetade = window.innerHeight * 0.8;
      knows.forEach((el) => {
        const knowsTop = el.getBoundingClientRect().top;
        const knowVisible = knowsTop - windowMetade < 0;
        if (knowVisible) {
          el.classList.add("animar");
        }
      });
    }
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
initAnimaScroll();

function initAnimaCards() {
  function animaCards() {
    const card = cs(".card");
    if (card.length) {
      const windowMetade = window.innerHeight * 0.8;
      card.forEach((el) => {
        const cardTop = el.getBoundingClientRect().top;
        const cardVisible = cardTop - windowMetade < 0;
        if (cardVisible) {
          el.classList.add("animaToTop");
        }
      });
    }
  }
  animaCards();
  window.addEventListener("scroll", animaCards);
}
initAnimaCards();

function scrollSuave() {
  const about = c('#nome a[href^="#"]');
  about.addEventListener("click", scrollToAbout);
}
scrollSuave();

function scrollToAbout(event) {
  event.preventDefault();
  const element = event.target.getAttribute("href");
  const section = c(element).offsetTop;

  window.scroll({
    top: section,
    behavior: "smooth",
  });
}

function myProjects() {
  const projects = c("#projects");

  async function project() {
    const response = await fetch("./js/projects.json");
    const json = await response.json();

    createProjects(json);

    if (cs(".knows").length) {
      initModalProjeto();
    }
  }
  project();
}
myProjects();

function createProjects(array) {
  array.projects.map((item) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.setAttribute("data-info1", item.info[0]);
    cardBody.setAttribute("data-info2", item.info[1]);
    let thumb = document.createElement("img");
    thumb.classList.add("thumb");
    thumb.src = `${"./images/projetos/" + item.thumb}`;
    thumb.setAttribute("data-image", item.image);
    cardBody.append(thumb);

    card.append(cardBody, createProjectText(item));
    loader.setAttribute("hidden", "");
    projects.append(card);
  });
}

function createProjectText(array) {
  let cardText = document.createElement("div");
  cardText.classList.add("card-text");
  let h4 = document.createElement("h4");
  h4.innerText = array.name;
  let p1 = document.createElement("p");
  p1.innerText = array.type;
  cardText.append(h4, p1);
  let tecnologies = document.createElement("div");
  tecnologies.classList.add("tecnologies");

  array.tecnology.map((i) => {
    let tech = document.createElement("img");
    tech.classList.add("tecnology");

    tech.src = "./images/icons/" + i + ".png";
    tech.title = i.toUpperCase();
    tech.alt = i.toUpperCase();

    tecnologies.appendChild(tech);

    cardText.appendChild(tecnologies);
  });
  return cardText;
}

function initModalProjeto() {
  const projeto = cs(".card");
  let modal = c(".modal");
  let modalContainer = c(".modalContainer");
  let modalContent = c(".modalContent");
  let loader = c("#loader");

  modalContainer.append(loader);
  loader.removeAttribute("hidden");

  projeto.forEach((item) => {
    item.addEventListener("click", () => {
      c("body").style.overflowY = "hidden";
      modal.classList.add("ativo");
      modalContainer.classList.add("ativo");

      async function carregaImagem() {
        const response = await fetch(
          document.location.origin +
            document.location.pathname +
            "images/projetos/" +
            item.querySelector(".thumb").getAttribute("data-image")
        );
        const src = await response.url;
        let img = "<img src='" + src + "'>";
        modalContent.innerHTML = img;
        modalContainer.append(modalContent);
        loader.setAttribute("hidden", "");
      }
      carregaImagem();

      fechaModal();

      let info1 = item.querySelector(".card-body").getAttribute("data-info1");
      let info2 = item.querySelector(".card-body").getAttribute("data-info2");
      initModalInfo(info1, info2);
    });
  });
}

function limpaModal() {
  let modalContent = c(".modalContent").querySelector("img");
  modalContent.src = "";
  modalContent.alt = "";
}

function fechaModal() {
  let modal = c(".modal");
  let modalContainer = c(".modalContainer");
  let modalInfo = c(".modalInfo");
  modal.addEventListener("click", ({ target }) => {
    if (
      target.classList.contains("modal") ||
      target.classList.contains("fechar")
    ) {
      modal.classList.remove("ativo");
      modalContainer.classList.remove("ativo");
      if (modalInfo.classList.contains("ativo")) {
        modalInfo.classList.remove("ativo");
        c(".modalContent").style.opacity = "1";
      }
      c("body").style.overflowY = "auto";
    } else if (target.classList.contains("fecharInfo")) {
      modalInfo.classList.remove("ativo");
      c(".modalContent").style.opacity = "1";
    }
  });
}

function initModalInfo(info1, info2) {
  let modal = c(".modalInfo");
  modal.querySelector("h4").innerText = info1;
  modal.querySelector("p").innerText = info2;
  mostrarInfo();
}

function mostrarInfo() {
  let info = c(".info");
  let modalInfo = c(".modalInfo");

  if (info) {
    info.addEventListener("click", () => {
      if (!modalInfo.classList.contains("ativo")) {
        modalInfo.classList.add("ativo");
        c(".modalContent").style.opacity = "0.3";
      }
    });
  }
}

function mostrarAno() {
  let span = document.querySelectorAll(".ano");
  let ano = new Date().getFullYear();
  span.forEach((el) => (el.innerText = ano));
  // console.log(span);
}
mostrarAno();
