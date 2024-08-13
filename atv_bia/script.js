document.addEventListener("DOMContentLoaded"), ()=> {
    const form = document.getElementById("contactForm");

    form.addEventListener('submit', (event) => {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        //const CryptoJS = require('crypto-js');

        const chave = 'PROTECTION_kEY'

        const nome_criptografado = CryptoJS.AES.encrypt(nome, chave).toString();
        const email_criptografado = CryptoJS.AES.encrypt(email, chave).toString();
        const mensagem_criptografado = CryptoJS.AES.encrypt(mensagem, chave).toString();

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
        <h2>DADOS CRIPTOGRAFADOS</h2>
        <p><strong>Nome:</strong>${nome_criptografado}</p>
        <p><strong>Email:</strong>${email_criptografado}</p>
        <p><strong>Mensagem:</strong>${mensagem_criptografado}</p>
        `;

    });
}
