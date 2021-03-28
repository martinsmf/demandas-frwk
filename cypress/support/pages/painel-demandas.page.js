/// <reference types="Cypress"/>

import PainelDemandasElements from '../elements/painel-demandas.elements'

class PainelDemandasPage{

    pesquisarDemanda(demanda){
        PainelDemandasElements.inputPesquisar.type(demanda)
        PainelDemandasElements.buttonPesquisar.click()
    }

    linhasDoPainel(){
        PainelDemandasElements.tableLinhasPainel.nextAll()
    }
}

export default new PainelDemandasPage();