
const nome = document.getElementById("name");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const tipoUser = document.getElementById("user-tipo");
const curso = document.getElementById("curso");
const endereco = document.getElementById("endereco");
const fone1 = document.getElementById("fone1");
const fone2 = document.getElementById("fone2");
const fone3 = document.getElementById("fone3");
const obs = document.getElementById("obs");

const dados = document.getElementById("dados");
const load = document.getElementById("reload");

    function getCookie(name) {
        const cookies = document.cookie.split(";"); // separa todos os cookies por ponto e vírgula
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim(); // remove espaços em branco
          if (cookie.startsWith(`${name}=`)) { // procura pelo cookie com o nome especificado
            return cookie.substring(name.length + 1); // retorna o valor do cookie
          }
        }
        return null; // retorna null se o cookie não for encontrado
      }
    
    const listarDados = async ()=>{
        dados.style.display = 'none'
        load.style.display = 'block'
        const url = `http://localhost:2000/api/usuario/${getCookie("token")}`
        const config = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json' 
            }
        }
        
        const res = await fetch(url, config);
        const json = await res.json();

        load.style.display = 'none'
        dados.style.display = 'block'

        for (const key in json) {
         
          const msg = 'Sem informações'
          nome.textContent = json[key].nome || msg;
          email.textContent = json[key].email || msg;
          cpf.textContent = json[key].CPF || msg;
          tipoUser.textContent = json[key].tipoUser || msg;
          curso.textContent = json[key].idCurso || msg;
          endereco.textContent = `Rua ${json[key].rua}, Bairro ${json[key].bairro}, Cidade ${json[key].cidade} - ${json[key].UF} -  ${json[key].CEP}`
          fone1.textContent = json[key].fone1 || msg;
          fone2.textContent = json[key].fone2 || msg;
          fone3.textContent = json[key].fone3 || msg;
          obs.textContent = json[key].obs || msg;
        }
    }



    listarDados();