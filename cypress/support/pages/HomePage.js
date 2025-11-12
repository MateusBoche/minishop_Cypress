export class HomePage{
    //seletores (atributos)
    botaoSair = () => cy.contains('button', 'Sair')
    listaProdutos = () => cy.get('#product-list')
    title = 'MiniShop - Home'


    // Ações (métodos)
    visitar(){
        cy.visit('./html/home.html')
    }

    verificarTitulo(){
        cy.title().should('be.eq', this.title)
    }
}