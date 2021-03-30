/* global Given, Then, When */
/// <reference types="Cypress" />

import CadastroDemandasPage from '../pages/cadastro-de-demandas.page'
import CadastroDemandasElements from '../elements/cadastro-de-demandas.elements'
import LabelErrorElements from '../elements/label-error.elements';

Given('que preencho os campos:', dataTable => {
    cy.visit('/cadastrar.php')
    const dados = dataTable.rowsHash()
    
    CadastroDemandasPage.prencherCadastro(dados)
    CadastroDemandasPage.selecionarTipo(dados.tipo)
})

When('cadastro essa demanda', () => {
    CadastroDemandasPage.clickCadastrar()
})

Then('devo ver a mensagem {string}', (mensagem) => { 
    CadastroDemandasElements.alertResultadoSucesso.should('contain.text', mensagem)
})

Then('devo ver a mensagem: {string}', (mensagem) => { 
    LabelErrorElements.labelError.should('be.visible', mensagem)
})