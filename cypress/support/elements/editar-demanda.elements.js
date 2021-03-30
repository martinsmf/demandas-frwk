/// <reference types="Cypress" />

class EditarDemandasElements{

        get inputCodigo(){
            return cy.get('#codigo_editar')
        }

        get inputNome(){
            return cy.get('#nome_editar')
        }

        get inputCenarios(){
            return cy.get('#cenarios_editar')
        }

        get radioButton(){
            return cy.get('input[type=radio]')
        }

        get buttonEnviar(){
            return cy.get('.btn-success')
        }

        get buttonCancelar(){
            return cy.get('#cancelar')
        }

        get alertResultadoSucesso(){
            return cy.get('.alert')
        }

}

export default new EditarDemandasElements();