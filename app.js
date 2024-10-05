document.addEventListener("DOMContentLoaded", () => {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const correoReg = document.getElementById('correo-reg');
    const contraseñaReg = document.getElementById('contraseña-reg');
    const registrarBtn = document.getElementById('registrar');
    
    const correoLogin = document.getElementById('correo-login');
    const contraseñaLogin = document.getElementById('contraseña-login');
    const iniciarSesionBtn = document.getElementById('iniciar-sesion');

    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const toLogin = document.getElementById('to-login');
    const toRegister = document.getElementById('to-register');

    // Cambiar entre login y registro con animaciones de fade
    toLogin.addEventListener('click', () => {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        loginForm.classList.add('visible');
    });

    toRegister.addEventListener('click', () => {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        registerForm.classList.add('visible');
    });

    // Validaciones
    const validarNombre = (nombre) => /^[a-zA-Z]{3,}$/.test(nombre);
    const validarCorreo = (correo) => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(correo);
    const validarContraseña = (contraseña) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(contraseña);

    const agregarError = (input, mensaje) => {
        input.classList.add('shake');
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = mensaje;

        setTimeout(() => {
            input.classList.remove('shake');
        }, 300);  // Duración del efecto shake
    };

    const limpiarError = (input) => {
        input.nextElementSibling.textContent = '';
    };

    registrarBtn.addEventListener('click', () => {
        let valid = true;

        if (!validarNombre(nombre.value)) {
            agregarError(nombre, 'Nombre inválido');
            valid = false;
        } else {
            limpiarError(nombre);
        }

        if (!validarNombre(apellido.value)) {
            agregarError(apellido, 'Apellido inválido');
            valid = false;
        } else {
            limpiarError(apellido);
        }

        if (!validarCorreo(correoReg.value)) {
            agregarError(correoReg, 'Correo inválido');
            valid = false;
        } else {
            limpiarError(correoReg);
        }

        if (!validarContraseña(contraseñaReg.value)) {
            agregarError(contraseñaReg, 'Contraseña inválida');
            valid = false;
        } else {
            limpiarError(contraseñaReg);
        }

        if (valid) {
            alert("Registro exitoso");
        }
    });

    iniciarSesionBtn.addEventListener('click', () => {
        let valid = true;

        if (!validarCorreo(correoLogin.value)) {
            agregarError(correoLogin, 'Correo inválido');
            valid = false;
        } else {
            limpiarError(correoLogin);
        }

        if (!validarContraseña(contraseñaLogin.value)) {
            agregarError(contraseñaLogin, 'Contraseña inválida');
            valid = false;
        } else {
            limpiarError(contraseñaLogin);
        }

        if (valid) {
            alert("Inicio de sesión exitoso");
        }
    });
});