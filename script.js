const veiculos = [

{

    modelo: "Toyota Corolla 2022",

    preco: "R$ 160/dia",

    cidade: "São Paulo, SP",

    imagem: "https://i.im.ge/2025/04/13/p4p1ir.1000347153.md.jpeg"

},

{

    modelo: "Honda PCX 2025",

    preco: "R$ 90/dia",

    cidade: "Belo Horizonte, MG",

    imagem: "https://i.im.ge/2025/04/14/p4JUYS.1000347156.jpeg"

},

{

    modelo: "Honda Civic 2022",

    preco: "R$ 160/dia",

    cidade: "Curitiba, PR",

    imagem: "https://i.im.ge/2025/04/14/p4JABD.1000347158.md.jpeg"

},

{

    modelo: "Volkswagen Polo 2018",
    
    preco: "R$ 80/dia",
    
    cidade: "Salvador, Ba",
    
    imagem: "https://i.im.ge/2025/04/14/p44lEW.1000347160.jpeg"
    
}

];

function exibirVeiculos(lista) {

const container = document.getElementById("veiculos-container");

container.innerHTML = "";

lista.forEach((v, index) => {

    container.innerHTML += `

    <div class="card" onclick="abrirDetalhes(${index})" style="cursor:pointer;">

        <img src="${v.imagem}" alt="${v.modelo}" />

        <div class="card-content">

        <h2>${v.modelo}</h2>

        <p>${v.preco} - ${v.cidade}</p>

        </div>

    </div>

    `;

});

}

function filtrarVeiculos() {

const termo = document.getElementById("search").value.toLowerCase();

const filtrados = veiculos.filter(v =>

    v.modelo.toLowerCase().includes(termo) ||

    v.cidade.toLowerCase().includes(termo)

);

exibirVeiculos(filtrados);

}

window.onload = () => exibirVeiculos(veiculos);

function abrirDetalhes(index) {

const v = veiculos[index];

document.getElementById("modal-titulo").innerText = v.modelo;

document.getElementById("modal-descricao").innerText = `Disponível em ${v.cidade} por ${v.preco}`;

document.getElementById("modal-contato").innerText = "Contato: (11) 91234-5678";

document.getElementById("modal-fotos").innerHTML = `

    <img src="${v.imagem}" />

    <img src="https://source.unsplash.com/300x200/?car,interior" />

    <img src="https://source.unsplash.com/300x200/?car,engine" />

`;

document.getElementById("modal").classList.remove("hidden");

}

function fecharModal() {

document.getElementById("modal").classList.add("hidden");

}
