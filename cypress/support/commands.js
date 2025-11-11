// Comando Login

Cypress.Commands.add('login', (dados = {usuario: '', senha: ''}) => {
    cy.get('#username').clear().type(dados.usuario)
    cy.get('#password').clear().type(dados.senha)
    cy.get('button[type=submit]').click()

})