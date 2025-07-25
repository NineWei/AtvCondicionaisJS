let idade = parseFloat(prompt("Digite sua idade: "));
let registro = prompt("Digite seu status (Registrado ou Não registrado): ");

let resultadoIdade = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(resultadoIdade);


switch (registro) { 
    case "Registrado":
        console.log("Seja bem-vindo!");
        break;
    case "Não registrado":
        console.log("Complete seu registro.");
        break;
    default:
        console.log("Status desconhecido.");
}

let resultadoAcesso = (idade >= 18 && registro === "Registrado") ? "Acesso completo" : "Acesso limitado";
console.log(resultadoAcesso);