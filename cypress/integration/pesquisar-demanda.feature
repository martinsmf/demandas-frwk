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
             When realizo a pesquisa da "<demanda>"
             Then devo ver o "<codigo>" da demanda

        Examples:
                  | demanda         | codigo      |
                  | Teste demanda   | 22222-22285 |
                  | Teste demanda 2 | 89999-99999 |

