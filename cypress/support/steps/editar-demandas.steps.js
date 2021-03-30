/* global Given, Then, When */
/// <reference types="Cypress" />

import EditarDemandaPage from '../pages/editar-demanda.page';
import EditarDemandasElements from '../elements/editar-demanda.elements';
import PainelDemandasPage from '../pages/painel-demandas.page';
import PainelDemandasElements from '../elements/painel-demandas.elements';
import editarDemandaElements from '../elements/editar-demanda.elements';

Given('que a demanda {string} precisa ser editada', demanda => {
	PainelDemandasPage.pesquisarDemanda(demanda)
    PainelDemandasElements.buttonEditar.click()
});

When('altero seus dados:', dataTable => {
	const dados = dataTable.rowsHash()
    EditarDemandaPage.alterarCadastro(dados)
    EditarDemandaPage.selecionarTipo(dados)
    EditarDemandasElements.buttonEnviar.click()
});

Then('devo ver a mensagem {}', (mensagem) => {
	editarDemandaElements.alertResultadoSucesso.should('have.text', mensagem)
});
