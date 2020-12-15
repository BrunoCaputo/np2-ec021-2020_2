# Gerador de Memes

## Descrição

Core de um gerador de memes desenvolvido para a disciplina de Tópicos Avançados II \[EC021] do Inatel.

## Dependências

## Como configurar o projeto

## Como criar a imagem Docker

Para criar a imagem Docker é necessário executar o comando `docker build -t {image_name} .`, estando na pasta raíz do projeto, onde `{image_name}` é o nome da imagem que será criada.

## Como executar o projeto

Para executar o projeto é necessário executar o comando `docker run -d --name {container_name} -p {local_port}:5000 {image_name}`, onde `container_name` é o nome do container que será criado, `local_port` é a porta que irá executar o core localmente e `image_name` é a imagem que foi gerada no passo de [criação da imagem Docker](#como-criar-a-imagem-docker).

Para parar a execução, execute o comando `docker stop {container_name}`.
