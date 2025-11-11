describe('Teste de Login do MiniShop', () => {


  beforeEach(()=> {
    
    cy.fixture('usuarios').its('usuarioValido').as('usuarioValido')
    cy.fixture('usuarios').its('usuarioInvalido').as('usuarioInvalido')
    cy.visit('./html/index.html')
  })

  it('Verifica o titulo da aba da página', () => {
    cy.title().should('be.eq', 'MiniShop - Login')

  })

  it('Login com campos em branco', () => {
    cy.get('#username').clear()
    cy.get('#password').clear()
    cy.get('button[type=submit]').click()

    //Asserção

    cy.get('div[role=alert]').should('be.visible')

  })

  it('Login com dados incorretos', () => {
    cy.fixture('usuarios').its('usuarioValido').as('usuarioValido')


    //Login por comandos
    cy.get('@usuarioInvalido').then((usuario) => {
      cy.login(usuario)
    })
    
    // cy.login({usuario: 'teste', senha: '12345'})

    //Asserção

    cy.get('div[role=alert]').should('be.visible')

  })

  it('Login com dados corretos', () => {


    //login
     //Login por comandos
     cy.get('@usuarioValido').then((usuario) => {
      cy.login(usuario)
    })
    // cy.login({usuario: 'admin', senha: '12345'})

    //Asserção

    cy.contains('button', 'Sair').should('exist')
    cy.title().should('be.eq', 'MiniShop - Home')

  })

})