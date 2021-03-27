Feature: Cadastrar Demanda

    Como usuário do sistema Demandas SYS
    desejo realizar o cadastro de demandas
    para realizar o gerenciamento das mesmas.

        Background: Login
             * eu faço login com "matheus.fernandes" e "frame2021"

        Scenario: Cadastro com sucesso
            Given que preencho os campos:
                  | codigo   | 2222222288    |
                  | nome     | TesteDemanda3 |
                  | tipo     | Completa      |
                  | cenarios | 01            |
             When cadastro essa demanda
             Then devo ver a mensagem "Cadastro realizado com sucesso!"
        @smoke
        Scenario Outline: Cadastro sem sucesso
            Given que preencho os campos:
                  | codigo   | <codigo>   |
                  | nome     | <nome>     |
                  | tipo     | <tipo>     |
                  | cenarios | <cenarios> |
             When cadastro essa demanda
             Then devo ver a mensagem "<mensagem>"

        Examples:
                  | codigo | nome          | tipo    | cenarios | mensagem |
                  |        | Projeto teste | Parcial | 02       |          |
             

