/// <reference types="Cypress" />

class PainelDemandasElements{

    get paragraph(){
        return cy.get('p[class$=label-info]')
    }


}

export default new PainelDemandasElements();