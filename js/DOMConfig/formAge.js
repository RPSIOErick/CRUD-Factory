document.addEventListener('DOMContentLoaded', () => {
    const idadeInput = document.getElementById('idade_input');
    if (idadeInput) {
        console.log('Elemento com ID "idade_input" encontrado!');
        idadeInput.addEventListener('input', function (e) {
            // Remove qualquer caractere não numérico do valor do input
            this.value = this.value.replace(/\D/g, '');
            console.log('Foi digitado');
        });
    } else {
        console.error('Elemento com ID "idade_input" não encontrado.');
    }
});
