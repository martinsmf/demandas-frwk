/// <reference types="Cypress" />

class PainelDemandasElements{

    get selectResponsavel(){
        return cy.get('select[name=responsavel]')
    }

    get optionResaveis(){
        return cy.get('select[name=responsavel] option')
    }

    get paragraph(){
        return cy.get('p[class$=label-info]')
    }

    get inputPesquisar(){
        return cy.get('.search-query')
    }

    get buttonPesquisar(){
        return cy.get('button[type=submit]')
    }

    get buttonDetalhar(){
        return cy.get('#detalhar')
    }

    get buttonEditar(){
        return cy.get('#editar')
    }

    get tableColunasPainel(){
        return cy.get('#clientes tr td')
    }

    get tableLinhasPainel(){
        return cy.get('#clientes tr')
    }


}

export default new PainelDemandasElements();