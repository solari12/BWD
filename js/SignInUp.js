let btnSignIn = document.getElementById("btnSignIn");
let btnSignUp = document.getElementById("btnSignUp");
let nameField = document.getElementById("nameField");
let repassField = document.getElementById("repassField");
let emailField = document.getElementById("emailField");
let findPass = document.getElementById("findPass");
let title = document.getElementById("title");

// Ẩn trường "Repassword" và "Email" khi bắt đầu vào trang web
repassField.style.maxHeight = "0";
emailField.style.maxHeight = "0";

btnSignIn.onclick = function(){
    // Hiển thị từ từ trường "Repassword" và "Email"
    repassField.style.maxHeight = "0";
    emailField.style.maxHeight = "0";
    findPass.style.display = "block";

    title.innerHTML = "Đăng nhập";
    btnSignUp.classList.add("disable");
    btnSignIn.classList.remove("disable");
}

btnSignUp.onclick = function(){
    // Hiển thị từ từ trường "Repassword" và "Email"
    repassField.style.maxHeight = "60px";
    emailField.style.maxHeight = "60px";
    findPass.style.display = "none";

    title.innerHTML = "Đăng ký";
    btnSignUp.classList.remove("disable");
    btnSignIn.classList.add("disable");
}
