function saludar(){

    let txtemail = document.getElementById("txtemail").value;
    let txtpassword = document.getElementById("txtpassword").value;

    if (txtemail=== ""){
        if (txtpassword=== ""){
         alert("Email y password vacio");
        }else{
            alert("Email vacio, password relleno");
        }
    }else{
        if (txtpassword=== ""){
            alert("Email relleno, Password vacio");
        }else{
            alert("Login Corecto, Email y password relleno");
        }
    }
    
}