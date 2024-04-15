let carros = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100, disponivel: true },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90, disponivel: true },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80, disponivel: false },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85, disponivel: true },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95, disponivel: true }
];

let totalLocacao = 0;
let diasLocacao = 3;

for (let i = 0; i < carros.length; i++) {
    let carro = carros[i];
    totalLocacao += carro.precoDia * diasLocacao;
}

console.log("Preço total da locação de três dias para todos os carros:", totalLocacao);