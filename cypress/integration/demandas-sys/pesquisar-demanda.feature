Feature: Pesquisar demanda

    Como usuário do sistema Demandas SYS
    desejo realizar a pesquisar das demandas cadastradas
    para falicitar a busca da demanda desejada.

        Background: Login
             * eu faço login com "matheus.fernandes" e "frame2021"

        Scenario Outline: Pesquisar demandas pelo código
             When realizo a pesquisa da "<demanda>"
             Then devo ver apenas a "<demanda>" informada

        Examples:
                  | demanda     |
                  | 22222-22285 |
                  | 22222-22289 |

        Scenario Outline: Pesquisar demandas pelo nome
          caso a busca realizada for por parte do nome
          os dados retornados na pesquisa irá trazer as
          demandas que possuem nomes parecidos
             When realizo a pesquisa da "<demanda>"
             Then devo ver o "<codigo>" da demanda

        Examples:
                  | demanda         | codigo      |
                  | Teste demanda   | 22222-22285 |
                  | Teste demanda 2 | 89999-99999 |


        Scenario Outline: Pesquisar demanda pelo responsável
            Given que seleciono o "<responsavel>"
             When realizo a pesquisa
             Then devo ver a "<demanda>"

        Examples:
                  | responsavel   | demanda     |
                  | Cristiano     | 00001-00003 |
                  | Elaine Borges | 17624-1001  |


