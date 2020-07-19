// É necessário definir aqui todos os módulos.
import CriarTorneio from './src/modulos/torneios/criacao/CriarTorneio.js';
import GerenciarTorneio from './src/modulos/torneios/gerenciamento/GerenciarTorneio.js';

// necessário exportar o stack de modulos
// export { CriarTorneio };
export const configuracoes = {
    modules:{
        CriarTorneio:{class:CriarTorneio, path:'./src/modulos/torneios/criacao/'},
        GerenciarTorneio:{class:GerenciarTorneio, path:'./src/modulos/torneios/gerenciamento/'},
    }, 
    content:document.getElementsByClassName('conteudo') 
};

// necessário exportar o nome do conteúdo principal
// export const content = document.getElementsByClassName('conteudo');