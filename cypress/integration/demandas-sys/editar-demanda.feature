Feature: Editar demanda

    Como usuário do sistema Demandas SYS
    desejo editar uma demanda previamente cadastrada no sistema
    caso tenha necessidade de alterar seus dados cadastrais da 

        Background: Login
             * eu faço login com "matheus.fernandes" e "frame2021"

        Scenario: Editar demanda com sucesso
            Given que a demanda "00122-00220" precisa ser editada
             When altero seus dados:
                  | codigo   | 00122-00220 |
                  | nome     | Edição      |
                  | tipo     | completa    |
                  | cenarios | 01          |
             Then devo ver a mensagem Cadastro alterado com sucesso!
