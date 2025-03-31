# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas

Nome: Lucas Mendes
📌 Idade: 32 anos
📌 Profissão: Executivo de vendas
📌 Necessidades: Precisa chegar rápido a compromissos sem atrasos, evitando áreas congestionadas ou perigosas.
📌 Dores: Perder tempo no trânsito, passar por locais com alto risco de assaltos.
📌 Solução: Rotas otimizadas que garantam rapidez e segurança, usando aplicativos de navegação confiáveis.

Nome: Juliana Souza
📌 Idade: 28 anos
📌 Profissão: Professora
📌 Necessidades: Caminhar com segurança com seu filho pequeno, evitando calçadas ruins e áreas perigosas.
📌 Dores: Falta de acessibilidade, medo de passar por ruas desertas ou sem iluminação.
📌 Solução: Caminhos seguros e bem iluminados, com alternativas acessíveis para carrinhos de bebê.

Nome: Felipe Andrade
📌 Idade: 29 anos
📌 Profissão: Designer gráfico
📌 Necessidades: Precisa de rotas rápidas, seguras e acessíveis para pedalar pela cidade, evitando ruas perigosas e com alto fluxo de carros.
📌 Dores: Falta de ciclovias, vias com buracos ou bloqueadas, risco de acidentes com motoristas desatentos.
📌 Solução: Um sistema de navegação que indique rotas seguras para ciclistas, mostrando ciclovias, ruas com menor tráfego e locais com suporte para bicicletas (como bicicletários).

Nome: Rafael Lima
📌 Idade: 24 anos
📌 Profissão: Motoboy
📌 Necessidades: Encontrar as rotas mais rápidas para entregar pedidos sem atraso, evitando vias bloqueadas.
📌 Dores: Perder tempo com ruas intransitáveis ou bloqueadas, enfrentar risco de acidentes em vias perigosas.
📌 Solução: Aplicativo que sugira rotas seguras e ágeis, considerando interdições e trânsito em tempo real.

Nome: Marina Castro
📌 Idade: 45 anos
📌 Profissão: Advogada
📌 Necessidades: Precisa de rotas acessíveis, sem escadas ou calçadas esburacadas.
📌 Dores: Falta de rampas, elevadores quebrados, dificuldades em locais movimentados.
📌 Solução: Mapas que indicam caminhos acessíveis e seguros para cadeirantes e pessoas com dificuldades de locomoção.

> Enumere e detalhe as personas da sua solução. Para
> tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
> Lembre-se que você deve ser enumerar e descrever precisamente e
> personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`|  QUERO/PRECISO ... `FUNCIONALIDADE`                  |PARA ... `MOTIVO/VALOR`                       |
|--------------------|------------------------------------------------------|----------------------------------------------|
| MOTORISTA          | CAMPO PARA RELATAR POSSIVEIS FALHAS                  |  PARA CIENCIAS DE POSSIVEIS FALHAS NO SITE   |
| MOTORISTA          |  BOTÃO DE EMERGENCIA PARA LUGAR DIRETO NA POLICIA    | AFIM DE PROPORCIONAR MAIS CONFORTABILIDADE   |
| MOTORISTA          |  AVISO PARA ORIENTAÇÃO CASO ENTRE EM AREAS DE RISCO  |  PARA EVITAR SITUAÇÃO DE DESCONFORTO         |
| CICLISTA           |  INDICAR AREAS COM CICLOVIAS                         |  PARA EVITAR ACIDENTE E LUGARES INAPROPIADOS |
| MOTORISTA          | INDICA ROTAS SEGURAS COM TEMPO E DISTANCIA           |  PARA MAIOR CONFORTO E  SEGURANÇA            |
| MOTORISTA          |  AREAS CONGESTIONADAS EM TEMPO REAL                  |  PARA UM TRAJETO MAIS RAPIDO                 |


> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                      |  Prioridade |
|------|---------------------------------------------------------------------------------------------|-------------|
RF001  |A PÁGINA DEVE PERMITIR QUE OS USUÁRIOS SE CADASTREM E FAÇAM LOGIN UTILIZANDO E-MAIL E SENHA, | ALTA        |
       |OU ATRAVÉS DE AUTENTICAÇÃO VIA                                                               |             |
       |REDES SOCIAIS (GOOGLE,FACEBOOK, ETC.).                                                       |             |
RF002  | A PÁGINA DEVE OFERECER UMA FUNCIONALIDADE DE BUSCA QUE PERMITA AOS USUÁRIOS ENCONTRAR
         ROTAS E MEIOS DE TRANSPORTE DISPONÍVEIS (ÔNIBUS, METRÔ, BICICLETAS, ETC.) COM BASE EM SUA
         LOCALIZAÇÃO ATUAL E DESTINO DESEJADO.
 ALTA
 RF003
 O SISTEMA DEVE FORNECER UM BOTÃO DE IDENTIFICAÇÃO DE OCORRENCIAS URBANAS, PERMITINDO QUE
 OS USUÁRIOS SINALIZEM PROBLEMAS NA RUA COMO: BURACOS, LOCAIS PERIGOSOS, BLITZ E
 ENGARRAFAMENTO.
 ALTA
 RF004 O SISTEMA DEVE APRESENTAR UM MAPA INTERATIVO QUE MOSTRE A LOCALIZÇÃO DO USUÁRIO E OS
 LOCAIS DE RISCOS PRÓXIMOS. ALTA
 RF005 O SISTEMA DEVE PERMITIR QUE OS CLICLISTAS VISUALIZEM NO MAPA A LOCALIZAÇÃO DAS CICLOVIAS
 DISPONÍVEIS NA CIDADE. MÉDIA
 RF006 O SISTEMA DEVE TER CADASTRO DE LISTAS ALTA
 RF007 USUÁRIOS DEVEM PODER COMPARTILHAR INFORMAÇÕES SOBRE LOCAIS DE RISCOS NAS REDES SOCIAS
 PARA ALERTA AMIGOS E FAMILIARES. MÉDIA
 RF008 PERMITIR QUE OS USUÁRIOS ESCOLHAM ROTAS MAIS RÁPIDAS, SEGURAS OU ACESSÍVEIS. ALTA
 RF009 PERMITIR QUE OS USUÁRIOS REPORTEM INCIDENTES (ASSALTOS, VIAS MAL ILUMINADAS, ETC.). MEDIA
 RF010 CONECTE-SE A APIS DE MAPAS (GOOGLE MAPS, OPENSTREETMAP) PARA TRAÇAR ROTAS PRECISAS. ALTA
 RF011 A PAGINA DEVE PERMITIR QUE OS USUÁRIOS ACESSEM ROTAS FEITAS ANTERIORMENTE MEDIA
 RF012 A PAGINA DEVE PERMITIR QUE O USUÁRIO INSIRA UM PONTO DE PARTIDA E UM DESTINO ALTA


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais
>   (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais
>   (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
