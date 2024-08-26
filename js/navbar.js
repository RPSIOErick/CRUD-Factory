export class NavBar{
    constructor() {
        this.elemento = document.querySelector('nav')
    }

    carregar() {
        this.elemento.innerHTML = `
            <a href='#home' id='home-link'> Cadastro de Clientes </a>

            <span id='nav-links'>
                <a href='#visualizar' id='view-link'> Visualizar </a>
                <a href='#cadastrar' id='create-link'> Cadastrar </a>
            </span>
        `
    }
}