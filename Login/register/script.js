function register() {
    alert("Register button pressed");

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var Rpassword = document.getElementById("Rpassword").value;
    var name = document.getElementById("name").value;

    if (password == Rpassword) {
        fetch('https://tugalism.pt//api/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                name: name
                
            })
        }).then(res => res.json())
            .then(res => checkRegister(res));
    }
}

function checkRegister(res) {
    console.log(res);
    if (res.message == "CREATED") {
        alert("Conta criada com sucesso!");
        location.replace("../login/index.html");
    } else {
        alert("Erro");
    }
}

