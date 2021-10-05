$(document).ready(
    console.log("Listo para ejecutar!")
)

$(".main__formulario form").append(`<button type='button' class='btn btn-primary btn-enviar'>Enviar</button>`)
$(".btn-enviar").click(() => {
    $(".header").append(`<div class='alert alert-warning alert-dismissible fade show' role='alert'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                            </svg>
                            FORMULARIO ENVIADO! TENDRÁS TU RESPUESTAS EN LAS PRÓXIMAS 24 HORAS.
                            <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                        </div>`);
})