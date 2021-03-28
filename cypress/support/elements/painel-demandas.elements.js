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

    get tableColunasPainel(){
        return cy.get('#clientes tr td')
    }

    get tableLinhasPainel(){
        return cy.get('#clientes tr')
    }


}

export default new PainelDemandasElements();