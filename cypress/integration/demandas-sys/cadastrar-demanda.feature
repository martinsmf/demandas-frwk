Feature: Cadastrar Demanda

    Como usuário do sistema Demandas SYS
    desejo realizar o cadastro de demandas
    para realizar o gerenciamento das mesmas.

        Background: Login
             * eu faço login com "matheus.fernandes" e "frame2021"

        Scenario: Cadastro com sucesso
            Given que preencho os campos:
                  | codigo   | 2222222300    |
                  | nome     | TesteDemanda6 |
                  | tipo     | Completa      |
                  | cenarios | 01            |
             When cadastro essa demanda
             Then devo ver a mensagem "Cadastro realizado com sucesso!"
        
        Scenario Outline: Cadastro sem sucesso
          Todos os campos são obrigatórios
            Given que preencho os campos:
                  | codigo   | <codigo>   |
                  | nome     | <nome>     |
                  | tipo     | <tipo>     |
                  | cenarios | <cenarios> |
             When cadastro essa demanda
             Then devo ver a mensagem: "<mensagem>"

        Examples:
                  | codigo     | nome                        | tipo     | cenarios | mensagem                                   |
                  | ""         | Demanda sem informar o nome | Parcial  | 02       | Preencha o Código da Demanda!              |
                  | 2222222285 | Demanda com código repetido | Completa | 02       | Código '22222-22285' já foi cadastrado     |
                  | 2222222291 | ""                          | Completa | 02       | Preencha o Nome da Demanda!                |
                  | 2222222291 | Teste demanda 2             | completa | 01       | Nome \'Teste demanda 2\' já foi cadastrado |

	