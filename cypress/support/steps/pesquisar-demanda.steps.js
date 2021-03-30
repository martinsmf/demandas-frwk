/* global Given, Then, When */
/// <reference types="Cypress" />

import PainelDemandasPage from '../pages/painel-demandas.page'
import PainelDemandasElements from '../elements/painel-demandas.elements'


Given('que seleciono o {string}', responsavel => {
    PainelDemandasPage.selcionaResponsavel(responsavel)
	
});


When('realizo a pesquisa da {string}', demanda => {
    PainelDemandasPage.pesquisarDemanda(demanda)
})


When('realizo a pesquisa', () => {
	PainelDemandasElements.buttonPesquisar.click()
});


Then('devo ver apenas a {string} informada', demanda => {
    PainelDemandasElements.tableColunasPainel.eq(0).should('contain.text', demanda)
})  


Then(/^devo ver o "([^"]*)" da demanda$/, codigo => {
	PainelDemandasElements.tableColunasPainel.should('contain.text', codigo)
});


Then('devo ver a {string}', demanda => {
	PainelDemandasElements.tableColunasPainel.eq(0).should('contain.text', demanda)
	
});

