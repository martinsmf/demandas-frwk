/* global Given, Then, When */
/// <reference types="Cypress" />

import PainelDemandasElements from '../elements/painel-demandas.elements'
import LoginPage from '../pages/login.page'
const url = Cypress.config('baseUrl')

When('eu faço login com {string} e {string}', (user, password) => {
    cy.visit(url)
    LoginPage.loginWith(user, password)
})

Then('devo ser direcionado para o painel de demandas', () => {
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/painel.php`)
})

Then('ver o painel de demandas', () => {
    PainelDemandasElements.paragraph.should('contain', 'Painel de Demandas')
})

