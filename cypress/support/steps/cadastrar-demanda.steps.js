/* global Given, Then, When */
/// <reference types="Cypress" />

import CadastroDemandasPage from '../pages/cadastro-de-demandas.page'
import CadastroDemandasElements from '../elements/cadastro-de-demandas.elements'

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
    CadastroDemandasElements.divResultado.should('be.visible', mensagem)
})