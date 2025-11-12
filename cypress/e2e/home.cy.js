import { HomePage } from "../support/pages/HomePage"
import { LoginPage } from "../support/pages/LoginPage"

describe('Página home da aplicação MiniShop', ()=> {
    const home = new HomePage()
    const loginPage = new LoginPage()

    beforeEach(()=>{
        cy.fixture('usuarios').as('usuarios')

        cy.get('@usuarios').then((usuarios) => {
            const usuario = usuarios.usuarioValido
            home.visitar()
            loginPage.login(usuario.usuario, usuario.senha) 

        }
    )


        
    })

    it('Deve exibir o titulo correto', ()=>{
        home.verificarTitulo
    })

})