// 12345678
window.addEventListener("load", () => {
  let editUsertForm = document.getElementById("edit-user-form");

  if (editUsertForm != null) {
    editUsertForm.addEventListener("submit", (e) => {

      // name field
      let userName = document.getElementById("edit-userName");
      let textName = document.querySelector(".input-editUser-name-error");

      if (userName.value == "") {
        e.preventDefault();
        textName.innerHTML =
          '<i class="fas fa-exclamation-circle"></i> ' +
          " Debes ingresar tu nombre";
        userName.classList.add("input-error", "is-invalid");
      } else {
        textName.innerHTML = "";
        userName.classList.remove("input-error", "is-invalid");
      }

      // lastname field
      let userLastName = document.getElementById("edit-userLastName");
      let textLastName = document.querySelector(
        ".input-editUser-lastName-error"
      );

      if (userLastName.value == "") {
        e.preventDefault();
        textLastName.innerHTML =
          '<i class="fas fa-exclamation-circle"></i> ' +
          " Debes ingresar tu apellido";
        userLastName.classList.add("input-error", "is-invalid");
      } else {
        textLastName.innerHTML = "";
        userLastName.classList.remove("input-error", "is-invalid");
      }

      //field email
      let userEmail = document.getElementById("edit-userEmail");
      let textEmail = document.querySelector(".div-email-character-errors");
      let textEmailCharacter = document.querySelector(
        ".input-editUser-email-error"
      );

      if (userEmail.value == "") {
        e.preventDefault();
        textEmail.innerHTML =
          '<i class="fas fa-exclamation-circle"></i> ' +
          " Debes ingresar tu email";
        userEmail.classList.add("input-error", "is-invalid");
      } else {
        textEmail.innerHTML = "";
        userEmail.classList.remove("input-error", "is-invalid");
      }

      if (userEmail.value != "" && !userEmail.value.includes("@" && ".com")) {
        e.preventDefault();
        textEmailCharacter.innerHTML =
          '<i class="fas fa-exclamation-circle"></i> ' +
          " Debes ingresar un correo electrónico valido";
        userEmail.classList.add("input-error-2", "is-invalid");
      } else {
        textEmailCharacter.innerHTML = "";
        userEmail.classList.remove("input-error-2");
      }

      //passwords field

      // let userPassword = document.getElementById("edit-userPassword"); //input
      // let textUserPassword = document.querySelector(
      //   ".input-editUser-password-error"
      // ); //class
      // let textUserPasswordCharacter = document.querySelector(
      //   ".div-password-character-errors"
      // ); //class
      // let textMatchPassword = document.querySelector(
      //   ".div-password-matchPassword-errors"
      // );

      // let userConfirmPassword = document.getElementById(
      //   "edit-userConfirmPassword"
      // );
      // let textUserConfirmPassword = document.querySelector(
      //   ".div-confirmPassword-character-errors"
      // ); //class

      // if (userConfirmPassword.value != userPassword.value) {
      //   e.preventDefault();
      //   textUserPassword.innerHTML = "";
      //   textMatchPassword.innerHTML =
      //     '<i class="fas fa-exclamation-circle"></i> ' +
      //     " No coinciden las contraseñas";
      //   userConfirmPassword.classList.add("input-error", "is-invalid");
      //   userPassword.value = "";
      //   userConfirmPassword.value = "";
      // } else {
      //   textMatchPassword.innerHTML = "";
      //   userPassword.classList.remove("input-error", "is-invalid");
      //   userConfirmPassword.classList.remove("input-error", "is-invalid");
      // }

      // if (userPassword.value == "") {
      //   e.preventDefault();
      //   textUserPassword.innerHTML =
      //     '<i class="fas fa-exclamation-circle"></i> ' +
      //     " Debes ingresar una contraseña valida";
      //   userPassword.classList.add("input-error", "is-invalid");
      //   userConfirmPassword.classList.add("input-error", "is-invalid");
      // } else {
      //   textUserPassword.innerHTML = "";
      //   userPassword.classList.remove("input-error", "is-invalid");
      //   userConfirmPassword.classList.remove("input-error", "is-invalid");
      // }

      // if (userPassword.value != "" && userPassword.value.length < 8) {
      //   e.preventDefault();
      //   textUserPasswordCharacter.innerHTML =
      //     '<i class="fas fa-exclamation-circle"></i> ' +
      //     " La contraseña debe tener mínimo 8 caracteres";
      //   userPassword.classList.add("input-error-2", "is-invalid");
      //   userConfirmPassword.classList.add("input-error-2", "is-invalid");
      //   userPassword.value = "";
      //   userConfirmPassword.value = "";
      // } else {
      //   textUserPasswordCharacter.innerHTML = "";
      //   userPassword.classList.remove("input-error-2");
      //   userConfirmPassword.classList.remove("input-error-2");
      // }

      //image fields

      let userImage = document.getElementById("imagenProducto");

      if (userImage.files[0]) {
        let userImageValue = userImage.files[0].name.split(".");
        let imageExtension = userImageValue[1].toLowerCase();
        let textImage = document.querySelector(".input-editUser-image-error");

        if (
          imageExtension == "png" ||
          imageExtension == "jpg" ||
          imageExtension == "jpeg" ||
          imageExtension == "gif"
        ) {
          userImage.classList.remove("input-error", "is-invalid");
          textImage.innerHTML = "";
        } else {
          e.preventDefault();
          textImage.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " La imagen debe ser con extensión jpg, png, jpeg o gif";
            userImage.classList.add("input-error", "is-invalid");
        }
      } else {
        let textImage = document.querySelector(".input-editUser-image-error");
        e.preventDefault();
        textImage.innerHTML =
          '<i class="fas fa-exclamation-circle"></i>' +
          " Debes adjuntar una imagen";
          userImage.classList.add("input-error", "is-invalid");
      }
      return
    });
  } 
});
