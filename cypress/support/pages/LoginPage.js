export class LoginPage{
    //ações
    login(usuario,senha){
        cy.login({usuario: usuario, senha:senha})
    }
}