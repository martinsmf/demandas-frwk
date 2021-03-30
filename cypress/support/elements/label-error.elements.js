/// <reference types="Cypress" />

class LabelErrorElements{

    get labelError(){
        return cy.get('td label[class=error]')
    }
}

export default new LabelErrorElements();