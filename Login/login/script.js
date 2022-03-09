
function login() {
    alert("Login button pressed");

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    fetch('https://tugalism.pt//api/login', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(res => res.json())
        .then(res => checkLogin(res));

}

function checkLogin(res) {
    if (res.token != null) {
        alert("Login com sucesso!");
        localStorage.setItem("token", res.token);
        location.replace("./UserArea.html");
    }
    else {
        alert("Erro!");
    }
}