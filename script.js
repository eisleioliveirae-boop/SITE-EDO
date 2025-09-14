
(function(){
    emailjs.init("rbNmUP_uVXlHnf3Ko"); 
})();

function sendMail(event) {
    event.preventDefault();
    emailjs.sendForm("service_ju5k04n", "template_8qmusmm", event.target)
        .then(() => {
            alert("Mensagem enviada com sucesso!");
        }, (err) => {
            alert("Erro ao enviar mensagem: " + JSON.stringify(err));
        });
}
