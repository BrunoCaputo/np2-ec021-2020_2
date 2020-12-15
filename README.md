# Gerador de Memes

## Descrição

Core de um gerador de memes desenvolvido para a disciplina de Tópicos Avançados II \[EC021] do Inatel.

## Dependências

-   [Restify](http://restify.com/): Utilizado para criação e mapeamento das rotas junto ao [restify-router](https://github.com/ukayani/restify-router);
-   [Mongoose](https://mongoosejs.com/): Utilizado para comunicação com o banco de dados;
-   [Axios](https://github.com/axios/axios): Utilizado para requisições HTTP/HTTPS;
-   [Dotenv](https://github.com/motdotla/dotenv): Utilizado para criação e uso de variáveis de ambiente;
-   [Nodemon](https://nodemon.io/): Utilizado apenas em desenvolvimento para rodar o servidor.

## Como configurar o projeto

Antes de executar o projeto, é necessário configurar o arquivo `.env` presente na raíz. O arquivo [.env.template](.env.template) mostra como deve ser formado
o `.env`. A seguir serão descritos cada variável presente.

-   PORTA: Porta na qual o servidor será executado. É recomendado utilizar a porta **5000**. Caso seja utilizado outra porta, mudar também o campo **EXPOSE** no arquivo [Dockerfile](Dockerfile);
-   DB_URL: URL do banco de dados utilizado;
-   DB_NAME: Nome do banco de dados utilizado;
-   AUTH_URL: URL do servidor de autenticação utilizado para as rotas `login` e `validateToken`.

## Como criar a imagem Docker

Para criar a imagem Docker é necessário executar o comando `docker build -t {image_name} .` na pasta raíz do projeto, na qual `{image_name}` é o nome da imagem que será criada.

## Como executar o projeto

Para executar o projeto é necessário executar o comando `docker run -d --name {container_name} -p {local_port}:{exposed_port} {image_name}`, nos quais `container_name` é o nome do container que será criado, `local_port` é a porta que irá executar o core localmente, `exposed_port` é a porta que é exposta pelo docker \(campo **EXPOSE** no [Dockerfile](Dockerfile)) e `image_name` é a imagem que foi gerada no passo de [criação da imagem Docker](#como-criar-a-imagem-docker).

Para parar a execução, execute o comando `docker stop {container_name}`.

Caso a versão containerizada não seja utilizada, execute o comando `npm run start`.
