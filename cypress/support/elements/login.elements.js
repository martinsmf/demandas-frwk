/// <reference types="Cypress" />

class LoginElements{
    
    get inputLogin(){
        return cy.get('#login')
    }

    get inputPassword(){
        return cy.get('#senha')
    }

    get buttonLogar(){
        return cy.get('.btn-success')
    }

    get buttonLimpar(){
        return cy.get('.btn-warning')
    }
}

export default new LoginElements();