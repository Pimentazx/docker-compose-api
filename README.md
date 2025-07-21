# FASE 2 - BACKEND E QUALIDADE

## DESAFIO - DOCKER

#### DESAFIO 

Criar uma aplicação composta com Docker Compoze e testar por meio da internet.

#### PROPOSTA

- A aplicação deve ter um banco de dados, uma API( Back-End)
- A API deve conversar com o banco de dados através da rede criada pelo arquivo docker-compose.yml
- A configuração pode estar seprada em Dockerfiles ou descritas no docker-compose.yml


##### PASSOS PARA RODAR

1.Navegue até a pasta onde está o docker-compose.yml

2.Execute:
docker-compose up --build

3.Aguarde alguns segundos e acesse:
http://localhost:3000
