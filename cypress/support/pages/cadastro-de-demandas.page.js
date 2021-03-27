/// <reference types="Cypress"/>

import CadastroDemandasElements from '../elements/cadastro-de-demandas.elements'

class CadastroDemandasPage{

    prencherCadastro(dados){
        CadastroDemandasElements.inputCodigo.type(dados.codigo)
        CadastroDemandasElements.inputNnome.type(dados.nome)
        CadastroDemandasElements.inputCenarios.type(dados.cenarios)
    }

    selecionarTipo(tipo){
        switch (tipo) {
            case 'Completa':
                CadastroDemandasElements.radioButtonCompleta.click()
                break;
            case 'Parcial':
                CadastroDemandasElements.radioButtonParcial.click()
                break;
            default:
                 console.log('Nenhum seletor encontrado.')
                break;
        }
    }

    clickCadastrar(){
        CadastroDemandasElements.buttonCadastrar.click()
    }

    clickLimpar(){
        CadastroDemandasElements.buttonLimpar.click()
    }

}

export default new CadastroDemandasPage();