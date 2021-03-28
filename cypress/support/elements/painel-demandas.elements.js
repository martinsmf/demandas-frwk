/// <reference types="Cypress" />

class PainelDemandasElements{

    get paragraph(){
        return cy.get('p[class$=label-info]')
    }

    get inputPesquisar(){
        return cy.get('.search-query')
    }

    get buttonPesquisar(){
        return cy.get('button[type=submit]')
    }


}

export default new PainelDemandasElements();