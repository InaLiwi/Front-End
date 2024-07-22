function registrarUsuario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
  
    if (password === confirm_password) {
      var usuario = {
        nombre: nombre,
        email: email,
        password: password
      };
      localStorage.setItem("usuario", JSON.stringify(usuario));
      alert("Usuario registrado con éxito");
    } else {
      alert("Las contraseñas no coinciden");
    }
  }

function loginUsuario() {
    var email = document.getElementById("email_login").value;
    var password = document.getElementById("password_login").value;
  
    var usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario.email === email && usuario.password === password) {
      alert("Login exitoso");
    } else {
      alert("Email o contraseña incorrectos");
    }
  }

