function loginSubmit(email, password){
    let data = JSON.stringify({
        "email": email,
        "password": password
    });
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("POST", '/api/auth/login');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    console.log(data);
}