    
    const form = document.getElementById("form");


    form.addEventListener('submit', async (e)=>{ 
        e.preventDefault()
        
        const dados = {
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value
        }

        const url = "http://localhost:2000/api/usuario/login"
        const config = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                email:dados.email,
                senha:dados.senha
            })
        }

        const res = await fetch(url, config);
        const json = await res.json();
        
        if(res.ok){
            form.reset(); 
            alertaSucesso('Logado com sucesso!')  
            const data = new Date(Date.now() + 28800000)
            document.cookie = `token=${json.token}; expires="${data.toUTCString()}"; path=/; secure; SameSite=Strict`;
            return
        }
        switch (json.erro) {
            case 'email':
                alertaErro("Email invalido")
                break;
            case 'senha':
                alertaErro("Senha invalida")
            break;
            default:
                break;
        }

    })
    const alertaErro = (mensagem)=>{
            window.scrollTo({top: 0, behavior: 'smooth'});
            const erro = document.getElementById('erro');
        
            erro.innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>${mensagem}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
        
          }
        
          const alertaSucesso = (mensagem)=>{
            window.scrollTo({top: 0, behavior: 'smooth'});
            const sucesso = document.getElementById('sucesso');
            window.location.href = "http://localhost:3030/usuario/";
          }