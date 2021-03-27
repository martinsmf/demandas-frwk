Feature: Login

    Como usuário do sistema de demandas
    desejo fazer login com meu usuário e senha
    para cadastrar e gerenciar as demandas

        Scenario: Login com sucesso
             When eu faço login com "matheus.fernandes" e "frame2021"
             Then devo ser direcionado para o painel de demandas
              And ver o painel de demandas
