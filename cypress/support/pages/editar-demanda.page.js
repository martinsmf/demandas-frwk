/// <reference types="Cypress" />

import EditarDemandasElements from '../elements/editar-demanda.elements';

class EditarDemandaPage{

    alterarCadastro(dados){
        EditarDemandasElements.inputCodigo.type(`{selectall}{del} ${dados.codigo}`)
        EditarDemandasElements.inputNome.type(`{selectall}{del} ${dados.nome}`)
        EditarDemandasElements.inputCenarios.type(`{selectall}{del} ${dados.cenarios}`)
    }

    selecionarTipo(dados){
        switch (dados.tipo) {
            case 'completa':
                    EditarDemandasElements.radioButton.check().first()
                break;
            case 'completa':
                EditarDemandasElements.radioButton.check().last()
            break;
            default:
                console.log('Nenhum seletor encontrado.')
                break;
        }
    }


}

export default new EditarDemandaPage();