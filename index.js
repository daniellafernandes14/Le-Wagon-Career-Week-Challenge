import "./styles.css";

const list = document.getElementById("radio-stations");
let request = new XMLHttpRequest();
request.open("GET", "https://teclead.de/recruiting/radios");
request.send();
request.onload = () => {
  console.log(request);
  let data = JSON.parse(request.response);
  data.radios.map((radio) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    list.appendChild(card);

    const a = document.createElement("a");
    a.textContent = radio.name;
    a.setAttribute("id", "name");
    a.setAttribute("href", "#");
    card.appendChild(a);

    const img = document.createElement("img");
    img.setAttribute("id", "image");
    img.setAttribute("class", "image");
    img.src = radio.image;
    card.appendChild(img);

    const p = document.createElement("p");
    p.textContent = radio.frequency;
    card.appendChild(p);
  });
  const openRadio = document.getElementById('name');
  openRadio.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById('image').classList.toggle('image');
    const footer = document.getElementById('footer');
    if (footer.innerHTML === "") {
      footer.innerHTML = `Currently Playing ${radio.name}`;
    }
    else {
      footer.innerHTML = "";
    }
  })
}
