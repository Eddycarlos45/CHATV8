# CHATV8

 O projeto CHATV8 tem como objetivo inicial ser um chat em real-time entre usuários. 
 
 # Instalação
➡️Clone o repositório na sua maquina<br/>
➡️Navegue até o diretorio api_ts<br/>
➡️Rode o comando `docker-compose up`<br/>

# Tecnologias 
🟢Node.js (Express)<br/>
🟠MongoDb<br/>
🔵TypeScript<br/>
🔵ReactJS<br/>
🟢Jest<br/>
🔵Docker<br/>
🟠Websocket<br/>

# Como funciona? 🤔

O usuário realiza seu cadastro no sistema utilizando um e-mail e senha válidos, em seguida consegue acessar
a página de login para ter acesso ao chat.

# Motivação 😄

A motivação para desenvolver esse projeto é puramente aprendizado e treinamento em desenvolvimento de softwares

# END-POINTS 🌐
  SIGNUP
 - POST:  '/signup' Cadastra um novo usuário <br />
 exemplo: `http://localhost:3001/signup`
 
 JSON {
"name": "Edson Sousa",
"email": "edson@email.com",
"password": "12345679"
}

LOGIN
 - POST:  '/login' Realiza login do usuário <br />
 exemplo: `http://localhost:3001/login`
 
 JSON {
"email": "edson@email.com",
"password": "12345679"
}

