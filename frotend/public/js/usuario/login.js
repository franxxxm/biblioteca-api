

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

        const res = await fetch(url, config).then( res=>{
            const authHeader = res.headers.get('Authorization');
            console.log(authHeader)
        })
    })