  window.addEventListener("load", function () {


    //get product form
    let productCreateForm = document.querySelector("form.product-create-form");

    //get login form
    let loginForm = document.getElementById("login-form-validation");

    //product create validation

    if (productCreateForm != null) {
      productCreateForm.addEventListener("submit", (e) => {
        // name fields
        let productName = document.querySelector("input.product-name");
        let textName = document.querySelector(".input-product-name-error");
        // description fields
        let productDescription = document.querySelector(
          "textarea.product-description"
        );
        let textDescription = document.querySelector(
          ".input-product-description-error"
        );
  // ===========================NAME FIELD VALIDATION===================================
        // if product name is empty
        if (productName.value == "") {
          e.preventDefault();
          // product name
          textName.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " Este campo no puede estar vacío";
          productName.classList.add("input-error","is-invalid");
          // if product name is less than 5 characters
        } else if (productName.value.length < 5) {
          e.preventDefault();
          textName.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " Este campo debe tener mínimo 5 caracteres";
          productName.classList.add("input-error", "is-invalid");
        } else {
          //class remove for productName
          productName.classList.remove("input-error", "is-invalid");
          textName.innerHTML = "";
        }

  // ===========================BRAND FIELD VALIDATION===================================  
  let brandName = document.getElementById("brands");
  let textBrand = document.querySelector(".input-product-brand-error");

        // if product brand is empty
        if (brandName.value == "") {
          e.preventDefault();
          // brand name
          textBrand.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " El campo marca no puede estar vacío ";
          brandName.classList.add("input-error","is-invalid");
          
        } else {
          //class remove for brandName
          brandName.classList.remove("input-error", "is-invalid");
          textBrand.innerHTML = "";
        }

  // ===========================REGULAR PRICE FIELD VALIDATION===================================  
  let regularPrice = document.getElementById("regular-price");
  let textRegularPrice = document.querySelector(".input-product-regular-price-error");

        // if product regular price is empty
        if (regularPrice.value == "") {
          e.preventDefault();
          // regular price name
          textRegularPrice.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " Este campo debe contener un valor";
          regularPrice.classList.add("input-error","is-invalid");
          
        } else {
          //class remove for regularPrice
          regularPrice.classList.remove("input-error", "is-invalid");
          textRegularPrice.innerHTML = "";
        }


  // ==================PRODUCT DESCRIPTION VALIDATION============================
        // if product description is empty
        if (productDescription.value == "") {
          e.preventDefault();
          textDescription.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " Este campo no puede estar vacío";
          productDescription.classList.add("input-error", "is-invalid");
          // if product description is less than 20 characters
        } else if (productDescription.value.length < 20) {
          e.preventDefault();
          textDescription.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " Este campo debe tener mínimo 20 caracteres";
          productDescription.classList.add("input-error", "is-invalid");

        }

        //if all fields meet criteria
        else {
          //class remove for productDescription
          productDescription.classList.remove("input-error", "is-invalid");
          textDescription.innerHTML = "";
        }

  // ==================PRODUCT COLOR VALIDATION============================
  let productColor = document.getElementById("colors");
  let textProductColor = document.querySelector(".input-product-color-error");
        // if product color is empty
        if (productColor.value == "") {
          e.preventDefault();
          textProductColor.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " El campo color no puede estar vacío ";
          productColor.classList.add("input-error", "is-invalid");
        }else {
          //class remove for productDescription
          productColor.classList.remove("input-error", "is-invalid");
          textProductColor.innerHTML = "";
        }

  // ==================PRODUCT STOCK VALIDATION============================
  let productStock = document.getElementById("stock");
  let textProductStock = document.querySelector(".input-product-stock-error");
        // if product stock is empty
        if (productStock.value == "") {
          e.preventDefault();
          textProductStock.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " Este campo no puede estar vacío";
          productStock.classList.add("input-error", "is-invalid");
          // if product stock is less than 1 product
        } else if (productStock.value < 1) {
          e.preventDefault();
          textProductStock.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " Este campo debe tener mínimo 1 producto en stock";
          productStock.classList.add("input-error", "is-invalid");

        }

        //if all fields meet criteria
        else {
          //class remove for productDescription
          productStock.classList.remove("input-error", "is-invalid");
          textProductStock.innerHTML = "";
        }

  // ===========================CATEGORY FIELD VALIDATION===================================  
  let productCategory = document.getElementById("categories");
  let textProductCategory = document.querySelector(".input-product-categories-error");

        // if product brand is empty
        if (productCategory.value == "") {
          e.preventDefault();
          // brand name
          textProductCategory.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " Este campo no puede estar vacío";
          productCategory.classList.add("input-error","is-invalid");
          
        } else {
          //class remove for brandName
          productCategory.classList.remove("input-error", "is-invalid");
          textProductCategory.innerHTML = "";
        }


  // ======================= PRODUCT IMAGE VALIDATION ===========================
        //image fields
        let productImage = document.getElementById("imagenProducto");

        if (productImage.files[0]) {
          let productImageValue = productImage.files[0].name.split(".");
          let imageExtension = productImageValue[1].toLowerCase();
          let textImage = document.querySelector(".input-product-image-error");

          if (
            imageExtension == "png" ||
            imageExtension == "jpg" ||
            imageExtension == "jpeg"||
            imageExtension == "gif"
          ) {
            productImage.classList.remove("input-error", "is-invalid");
            textImage.innerHTML = "";
          } else {
            e.preventDefault();
            textImage.innerHTML =
              '<i class="fas fa-exclamation-circle"></i>' +
              " La imagen debe ser con extensión jpg, png, jpeg o gif";
            productImage.classList.add("input-error", "is-invalid");
          }
        } else {
          let textImage = document.querySelector(".input-product-image-error");
          e.preventDefault();
          textImage.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " Debes adjuntar una imagen";
          productImage.classList.add("input-error", "is-invalid");
          console.log("no hay archivo");
        }
        return
      });
    }
    //=========================LOGIN FORM VALIDACION=============================

    //===============================LOGIN EMAIL=================================
    if (loginForm != null) {

      let userEmail = document.querySelector("#input-mail-login");
      let textEmail = document.querySelector(".input-login-email-error");
      let textTypeEmail = document.querySelector(".input-login-email-type-error");

      let userPassword = document.getElementById('input-login-password')
      let textPassword = document.querySelector(".input-login-password-error");
      let textPasswordCharacter = document.querySelector(".input-login-password-character-error");



      loginForm.addEventListener("submit", (e) => {

        //empty email validation
        if (userEmail.value == "") {
          e.preventDefault();
          textEmail.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " Este campo no puede estar vacío";
          userEmail.classList.add("input-error", "is-invalid");

        } 
        else {
          textEmail.innerHTML = ""
          userEmail.classList.remove("input-error", "is-invalid");
        }

        //valid email validation - must contain @ and .com
        if (userEmail.value != "" && !userEmail.value.includes("@" && ".com")) {
          e.preventDefault();
          textTypeEmail.innerHTML = '<i class="fas fa-exclamation-circle"></i>' + " Debes ingresar un formato de mail valido";
          userEmail.classList.add("input-error", "is-invalid");
        }

        else {
          textTypeEmail.innerHTML = ""
          userEmail.classList.remove("input-error");
          userPassword.focus();
        }
    
    
        // ================ LOGIN PASSWORD VALIDATION=========================
        
        if (userPassword.value == "") {
          e.preventDefault();
          textPassword.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " El campo contraseña no puede estar vacio";
          userPassword.classList.add("input-error", "is-invalid");

        } 
        else {
          textPassword.innerHTML = ""
          userPassword.classList.remove("input-error", "is-invalid");
        }

        if (userPassword.value.length > 0 && userPassword.value.length < 8) {
          e.preventDefault();
          textPasswordCharacter.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " El campo debe tener mínimo 8 caracteres";
          userPassword.classList.add("input-error", "is-invalid");
        } 
        else {
          textPasswordCharacter.innerHTML = ""
          userPassword.classList.remove("input-error");
        }

      });
    }


    //============================REGISTER FORM VALIDATION=======================

    //get register form
    let userRegisterForm = document.getElementById("register-form-validation");
    
    if (userRegisterForm != null) {
      
      userRegisterForm.addEventListener('submit', (e) => {

        // e.preventDefault()

      //=================================USER TYPE======================================
      let userType = document.getElementById("user-type")
      let textUserRegisterType = document.querySelector(".div-user-type-errors")//error message

      if (userType.value == ""){
        e.preventDefault()
        textUserRegisterType.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes seleccionar un tipo'
        userType.classList.add("input-error", "is-invalid");

      } else {
        textUserRegisterType.innerHTML = ""
        userType.classList.remove("input-error", "is-invalid");
      }


      //===============================REGISTER NAME====================================

        let userRegisterName = document.getElementById("name-register-validation")//input
        let textUserRegisterName = document.querySelector('.div-name-errors')//error message
        let textUserRegisterCharacteres = document.querySelector('.div-name-characteres-errors')//error message
        


        if (userRegisterName.value == ''){
          e.preventDefault()
          textUserRegisterName.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes ingresar tu nombre'
          userRegisterName.classList.add("input-error", "is-invalid");

        } else {
          textUserRegisterName.innerHTML = ""
          userRegisterName.classList.remove("input-error", "is-invalid");
        }

        if (userRegisterName.value != "" && userRegisterName.value.length < 4) {
          e.preventDefault()
          textUserRegisterCharacteres.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' El nombre debe contener mínimo 4 letras'
          userRegisterName.classList.add("input-error-2", "is-invalid");

        } else {
          textUserRegisterCharacteres.innerHTML = ""
          userRegisterName.classList.remove("input-error-2");
        }
      //===============================DATE REGISTER====================================

        let dateBirth = document.getElementById("dateBirth")//input
        let textDateBirth = document.querySelector('.div-date-errors')//error message
        


        if (dateBirth.value == ''){
          e.preventDefault()
          textDateBirth.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes ingresar una fecha valida'
          dateBirth.classList.add("input-error", "is-invalid");

        } else {
          textDateBirth.innerHTML = ""
          dateBirth.classList.remove("input-error", "is-invalid");
        }


    // ===================REGISTER LAST NAME======================================

        let userRegisterLastName = document.getElementById("lastname-register-validation")//input
        let textRegisterLastName = document.querySelector('.div-lastName-errors')//class
        let textRegisterLastNameCharacters = document.querySelector('.div-lastName-characteres-errors')//class

        if (userRegisterLastName.value == '') {
          e.preventDefault()
          textRegisterLastName.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes ingresar tu apellido'
          userRegisterLastName.classList.add("input-error", "is-invalid");

        } else {
          textRegisterLastName.innerHTML = ''
          userRegisterLastName.classList.remove("input-error", "is-invalid");
        }

        if (userRegisterLastName.value.length > 0 && userRegisterLastName.value.length < 4) {
          e.preventDefault()
          textRegisterLastNameCharacters.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' El apellido debe contener mínimo 4 letras'
          userRegisterLastName.classList.add("input-error-2", "is-invalid");

        } else {
          textRegisterLastNameCharacters.innerHTML = ''
          userRegisterLastName.classList.remove("input-error-2");
        }

    //==============================REGISTER EMAIL==========================================

        let userRegisterEmail = document.getElementById("email-register-validation")//input
        let textUserRegisterEmail = document.querySelector(".div-email-errors")//class
        let textUserRegisterEmailCharacter = document.querySelector(".div-email-character-errors")//class

        if (userRegisterEmail.value == '') {
          e.preventDefault()
          textUserRegisterEmail.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes ingresar un correo electrónico'
          userRegisterEmail.classList.add("input-error", "is-invalid");
          
        } else {
          textUserRegisterEmail.innerHTML = ""
          userRegisterEmail.classList.remove("input-error", "is-invalid");
        }

        if (userRegisterEmail.value != "" && !userRegisterEmail.value.includes("@" && ".com")) {
          e.preventDefault()
          textUserRegisterEmailCharacter.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes ingresar un correo electrónico valido'
          userRegisterEmail.classList.add("input-error-2","is-invalid");

        } else {
          textUserRegisterEmailCharacter.innerHTML = ""
          userRegisterEmail.classList.remove("input-error-2");
        }



    //================================REGISTER PASSWORD====================================

        let userRegisterPassword = document.getElementById("password-register-validation")//input
        let textUserRegisterPassword = document.querySelector('.div-password-errors')//class
        let textUserRegisterPasswordCharacter = document.querySelector('.div-password-character-errors')//class

        let userRegisterConfirmPassword = document.getElementById ("confirm-password-register-validation")
        let textUserRegisterConfirmPassword = document.querySelector('.div-confirm-password-errors')//class


        if (userRegisterConfirmPassword.value != userRegisterPassword.value) {
          e.preventDefault()
          textUserRegisterConfirmPassword.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' No coinciden las contraseñas'
          userRegisterConfirmPassword.classList.add("input-error", "is-invalid");
          userRegisterPassword.value = "";
          userRegisterConfirmPassword.value = "";

        } else {
          textUserRegisterConfirmPassword.innerHTML = ""
          userRegisterConfirmPassword.classList.remove("input-error", "is-invalid");
        }

        if (userRegisterPassword.value == "") {
          e.preventDefault()
          textUserRegisterPassword.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes ingresar una contraseña valida'
          userRegisterPassword.classList.add("input-error", "is-invalid");
          userRegisterConfirmPassword.classList.add("input-error", "is-invalid");

        } else {
          textUserRegisterPassword.innerHTML = ""
          userRegisterPassword.classList.remove("input-error", "is-invalid");
          userRegisterConfirmPassword.classList.remove("input-error", "is-invalid");
        }

        if (userRegisterPassword.value != "" && userRegisterPassword.value.length < 8) {
          e.preventDefault()
          textUserRegisterPasswordCharacter.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' La contraseña debe tener mínimo 8 caracteres'
          userRegisterPassword.classList.add("input-error-2", "is-invalid");
          userRegisterConfirmPassword.classList.add("input-error-2", "is-invalid");
          userRegisterPassword.value = "";
          userRegisterConfirmPassword.value = "";

        } else {
          textUserRegisterPasswordCharacter.innerHTML = ""
          userRegisterPassword.classList.remove("input-error-2");
          userRegisterConfirmPassword.classList.remove("input-error-2");
        }

        

    //==============================REGISTER IMAGE====================================

        let userRegisterImage = document.getElementById("image-register-validation")//input
        let textUserRegisterImage = document.querySelector('.div-image-errors')

        if(userRegisterImage.files[0]){
          let userImageValue = userRegisterImage.files[0].name.split('.')
          let userImageExtension = userImageValue[1].toLowerCase()

          if(
            userImageExtension == "png" ||
            userImageExtension == "jpg" ||
            userImageExtension == "jpeg" ||
            userImageExtension == "gif"
          ) {
            textUserRegisterImage.innerHTML = ""
            userRegisterImage.classList.remove('input-error', 'is-invalid')

          } else {
            e.preventDefault()
            textUserRegisterImage.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' La imagen debe ser con extensión jpg, png, jpeg o gif'
            userRegisterImage.classList.add('input-error', 'is-invalid')
          }
          
        } else {
          e.preventDefault()
          textUserRegisterImage.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes adjuntar una imagen'
          userRegisterImage.classList.add('input-error', 'is-invalid')
        }
        //==============================BOUNDARIES CHECK====================================
        let userRegisterBoundaries = document.getElementById('terminos')
        let textUserRegisterBoundaries = document.querySelector('.div-boundaries-errors')
        if (!userRegisterBoundaries.checked) {
          e.preventDefault()
          textUserRegisterBoundaries.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes marcar los terminos y condiciones'
          userRegisterBoundaries.classList.add("input-error", "is-invalid");
          
        } else {
          textUserRegisterBoundaries.innerHTML = ""
          userRegisterBoundaries.classList.remove("input-error", "is-invalid");

          
        }
        return

      })
    }


  });
