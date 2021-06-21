function matchpass() {
    var firstpassword = document.f1.password.value;
    var secondpassword = document.f1.password2.value;

    if (firstpassword == secondpassword) {
        alert("Success!")
    } else {
        alert("password not match");
        return false;
    }
}


