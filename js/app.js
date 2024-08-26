import { NavBar } from './navbar.js'
import { Router } from './router.js'

class App {
    constructor() {
        this.nav = new NavBar()
        this.router = new Router()
        this.iniciar()
    }

    iniciar() {

        // Carregando os arquivos CSS
        this.carregarCSS('style.css');
        this.carregarCSS('create&edit.css');

        // Carregando a NavBar
        this.nav.carregar();

        document.getElementById('home-link').addEventListener('click', () => {
            window.location.hash = '#home'
            this.router.navegar()

            
        })

        document.getElementById('view-link').addEventListener('click', () => {
            window.location.hash = '#visualizar'
            this.router.navegar()
        })

        this.router.navegar()
    }

    carregarCSS(nomeDoArquivo) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `styles/${nomeDoArquivo}`;
        document.head.appendChild(link);
    }
}

const app = new App()