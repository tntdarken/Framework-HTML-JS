// import { content } from '../../../../config.js';

export default class CriarTorneio{
    constructor(){
        this.nome = 'Arhtur Luiz';
        this.sobrenome = 'Lara Quites';
        this.arthur = 'elcio';
    }

    alertar(){
        alert('criartorneio');
    }

    log(){
        console.log('criarartorneio',this);
    }

    //TODO : Passar estes metodos para dentro do core.js e fazer uma forma de carregar o html na pasta.

    // recuperar(){
    //     return new Promise(function(resolve, reject) {
    //         var xhttp = new XMLHttpRequest();
    //         xhttp.onreadystatechange = function() {
    //             if (this.readyState == 4 && this.status == 200) {
    //             resolve(this.responseText);
    //             }
    //         };
    //         xhttp.open("GET", "./src/modulos/torneios/criacao/criarTorneio.html", true);
    //         xhttp.send();
    //     });
    // }

    // load(){
    //     this.recuperar().then((resp) => {
    //         this.html = resp;
    //         content[0].innerHTML = this.html;
    //     });
    // }
}