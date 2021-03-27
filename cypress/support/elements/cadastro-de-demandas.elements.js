/// <reference types="Cypress" />

class CadastroDemandas{

    get inputCodigo(){
        return cy.get('#codigo')
    }

    get inputNnome(){
        return cy.get('#nome')
    }

    get inputCenarios(){
        return cy.get('#cenarios')
    }

    get radioButtonCompleta(){
        return cy.get('#form_cliente td input[value="1"]')
    }

    get radioButtonParcial(){
        return cy.get('#form_cliente td input[value="2"]')
    }

    get buttonCadastrar(){
        return cy.contains('button', 'Cadastrar')
    }

    get buttonLimpar(){
        return cy.get('[value=Limpar]')
    }

    get divResultado(){
        return cy.get('#resultado')
    }

}

export default new CadastroDemandas();