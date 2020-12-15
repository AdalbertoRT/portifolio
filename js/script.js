const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

//CONHECIMENTOS

function initKnowledges() {
  async function knowJson() {
    const response = await fetch("./js/knowledges.json");
    const json = await response.json();
    knows = json.knowJson;

    knows.map((item, index) => {
      // let knows = c('.knows');
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
  knowJson();
}
initKnowledges();

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

function myProjects() {
  const projects = c("#projects");

  async function project() {
    const response = await fetch("./js/projects.json");
    const json = await response.json();

    json.projects.map((item) => {
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
      let cardText = document.createElement("div");
      cardText.classList.add("card-text");
      let h4 = document.createElement("h4");
      h4.innerText = item.name;
      let p1 = document.createElement("p");
      p1.innerText = item.type;
      let tech = document.createElement("div");
      tech.classList.add("tecnology");
      item.tecnology.map((i) => {
        let icon = document.createElement("img");
        icon.src = "./images/icons/" + i + ".png";
        icon.title = i.toUpperCase();
        icon.alt = i.toUpperCase();
        tech.appendChild(icon);
      });
      cardText.append(h4, p1, tech);

      card.append(cardBody, cardText);

      projects.append(card);
    });
    if (cs(".knows").length) {
      initModalProjeto();
    }
  }
  project();
}
myProjects();

function initModalProjeto() {
  const projeto = cs(".card");
  projeto.forEach((item) => {
    item.addEventListener("click", () => {
      c("body").style.overflowY = "hidden";
      let src = `${
        document.location.origin +
        document.location.pathname +
        "images/projetos/" +
        item.querySelector(".thumb").getAttribute("data-image")
      }`;

      // let modal = document.createElement("div");
      // modal.classList.add("modal", "background", "ativo");
      // let modalContainer = document.createElement("div");
      // modalContainer.classList.add("modalContainer");
      // let btnContainer = document.createElement("div");
      // btnContainer.classList.add("btnContainer");
      // let fechar = document.createElement("button");
      // fechar.innerText = "x";
      // fechar.classList.add("fechar");
      // let info = document.createElement("button");
      // info.innerText = "Info";
      // info.classList.add("info");
      // btnContainer.append(fechar, info);
      // let modalContent = document.createElement("div");
      // modalContent.classList.add("modalContent");
      // let img = document.createElement("img");
      // img.src = src;
      // modalContent.append(img);
      // modalContainer.append(btnContainer, modalContent);
      // modal.append(modalContainer);

      // c("body").append(modal);

      let modal = c(".modal");
      let modalContainer = c(".modalContainer");
      let modalContent = modal
        .querySelector(".modalContent")
        .querySelector("img");
      modalContent.src = src;
      modalContent.alt = item
        .querySelector(".thumb")
        .getAttribute("data-image")
        .replace(".png", "");

      modal.classList.add("ativo");
      modalContainer.classList.add("ativo");

      fechaModal();

      let info1 = item.querySelector(".card-body").getAttribute("data-info1");
      let info2 = item.querySelector(".card-body").getAttribute("data-info2");
      initModalInfo(info1, info2);
    });
  });
}

function fechaModal() {
  let modal = c(".modal");
  let modalContainer = c(".modalContainer");
  modal.addEventListener("click", ({ target }) => {
    if (
      target.classList.contains("modal") ||
      target.classList.contains("fechar")
    ) {
      modal.classList.remove("ativo");
      modalContainer.classList.remove("ativo");
      c("body").style.overflowY = "auto";
    } else if (target.classList.contains("fecharInfo")) {
      c(".modalInfo").classList.remove("ativo");
      c(".modalContent").style.opacity = "1";
    }
  });
}

function initModalInfo(info1, info2) {
  // let modal = document.createElement("div");
  // modal.classList.add("modalInfo");
  // let fechar = document.createElement("button");
  // fechar.innerText = "x";
  // fechar.classList.add("fecharInfo");
  // let h4 = document.createElement("h4");
  // h4.innerText = info1;
  // let p = document.createElement("p");
  // p.innerText = info2;
  // modal.append(fechar, h4, p);
  // c(".modalContainer").appendChild(modal);
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
