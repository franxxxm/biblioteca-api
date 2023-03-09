
const form = document.getElementById("form");

  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const idForReset = ['nome', 'email','senha','confirmar-senha', 'cpf', 'cep','rua','bairro', 'cidade', 'uf', 'fone1', 'fone2', 'fone3', 'observacao']
 
    const load = document.getElementById("reload");
    const caixa = document.getElementById("caixa-registro");

    const senha = document.getElementById("senha").value;
    const senhaConfirme = document.getElementById("confirmar-senha").value

    if(senha !== senhaConfirme){
      return alertaErro('As senha não estão de acordo');
    }

      const dados = {
      nome:document.getElementById("nome").value,
      email:document.getElementById("email").value,
      senha:senha,
      CPF:document.getElementById("cpf").value,
      tipoUser:document.getElementById("tipo-user").value,
      idCurso:document.getElementById("id-curso").value,
      CEP:document.getElementById("cep").value,
      rua:document.getElementById("rua").value,
      bairro:document.getElementById("bairro").value,
      cidade:document.getElementById("cidade").value,
      UF:document.getElementById("uf").value,
      fone1:document.getElementById("fone1").value
    }
    
    const campos = []
    for (const key in dados) {
        if(dados[key] == '' || dados[key] == undefined || dados[key] == null){ 
          campos.push(' ' + key)
        }
      } 
    if(campos.length > 0){
      return alertaErro('Campos vazios: ' + campos)
    }

    dados.fone2 = document.getElementById("fone2").value
    dados.fone3 = document.getElementById("fone3").value
    dados.obs = document.getElementById("observacao").value

    caixa.style.display = 'none';
    load.style.display = 'block'
    load.innerHTML += `<div class="text-light" style="width: 12rem; height: 12rem;" ><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>`

    const url = "http://192.168.88.15:2000/api/usuario";
    const config = {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin' : 'http://192.168.88.15:2000/api/usuario'
      },
      body: JSON.stringify(dados)
    }

    const res = await fetch(url, config);
    const response = await res.json();

    load.style.display = 'none'
    caixa.style.display = 'block';
    console.log(response)
    if(response.mensagem){
      var reset
      const tipoUser = document.getElementById("tipo-user");
      const idCurso = document.getElementById("id-curso");

      tipoUser.selectedIndex = 0;
      idCurso.selectedIndex = 0;
   
      idForReset.forEach(element => {
      reset = document.getElementById(element)
      reset.value = "";
        });
           return alertaSucesso('Usuário cadastrado com sucesso')
      }
    return alertaErro('Esse email já se encontra registrado')
  })

  const alertaErro = (mensagem)=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
    const erro = document.getElementById('erro');

    erro.innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>${mensagem}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`

  }

  const alertaSucesso = (mensagem)=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
    const sucesso = document.getElementById('sucesso');

    sucesso.innerHTML = ` <div class="alert alert-success alert-dismissible fade show" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg> ${mensagem}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
  }