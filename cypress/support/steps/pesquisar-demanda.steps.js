/* global Given, Then, When */
/// <reference types="Cypress" />

import PainelDemandasPage from '../pages/painel-demandas.page'
import PainelDemandasElements from '../elements/painel-demandas.elements'


When('realizo a pesquisa da {string}', demanda => {
    PainelDemandasPage.pesquisarDemanda(demanda)
})

Then('devo ver apenas a {string} informada', demanda => {
    PainelDemandasElements.tableColunasPainel.eq(0).should('contain.text', demanda)
    PainelDemandasElements.tableColunasPainel.should('contain.text', demanda)
})  


Then(/^devo ver o "([^"]*)" da demanda$/, (codigo) => {
	PainelDemandasElements.tableColunasPainel.should('contain.text', codigo)
});
