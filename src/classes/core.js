import * as config from "../../config.js";

// variaveis base da classe
var objetos = {}; // guarda o stack de modulos
var current = ''; // guarda o modulo selecionado

function _recuperar(url,el){
  return new Promise(function(resolve, reject) {
      var xhttp = new XMLHttpRequest(true, true);
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          resolve(this.responseText);
          }
      };
      xhttp.open("POST", `${url}${el}.html`, true);
      xhttp.send();
  });
}

function _load(el){
  if(current !== el){
    var p = config.configuracoes.modules[el].class;
    objetos[el] = new p();
    objetos[el].path = config.configuracoes.modules[el].path;
    _recuperar(objetos[el].path, el).then((resp)=>{
      var texto = verificaReplace(resp);
      config.configuracoes.content[0].innerHTML = texto;
    });
    current = el;   
  }
}

export default class Core{
  constructor(){
  }
  
  // O metodo call permite chamar métodos de um modulo que não seja o principal e já tenha sido instanciado
  call(obj,method){
      objetos[obj][method]();
  }
  
  // O método exec permite executar métodos do modulo atual
  exec(method){
    objetos[current][method]();
  }

  // o método load permite instanciar o modulo desejado
  load(el){
    _load(el);  
  }
}

function verificaReplace(el){
  var retorno = el ? el : config.configuracoes.content[0].outerHTML;
  var propriedades = objetos[current] ? Object.keys(objetos[current]) : [];
  
  propriedades.filter(function(item) {return item !== 'path'}).forEach((index) =>{
    console.log(index);
    var re = RegExp(`\!!${index}\!!`, 'gi');
    retorno = retorno.replace(re, objetos[current][index]);
    
  });
  
  return retorno;
}

window.onload = function() {
  verificaReplace(null);
};

window.core = new Core();