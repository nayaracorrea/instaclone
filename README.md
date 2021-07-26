<h1 align="center">  InstaClone </h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autora">Autora</a> 
</p>

## 💻 Sobre o projeto

Esse é o InstaClone. A ideia era recriar apenas o layout do Instagram para aperfeiçoar os conhecimentos em React Native.

## ⚙️ Funcionalidades

- [x] Feed
- [x] Stories
- [x] Botões de Interação
- [x] Menu

## 🎨 Layout

O Layout é o do Instagram no modo claro.


### Aplicativo

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img src="https://media.giphy.com/media/4PQhCe5m55En1nptIb/giphy.gif" />

</p>


## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


#### 🧭 Rodando a aplicação mobile

```bash

# Clone este repositório
$ git clone git@github.com:nayaracorrea/instaclone.git

# No seu terminal/cmd instale o Expo CLI
$ npm install --global expo-cli

# Acesse a pasta do projeto no seu terminal/cmd
$ cd instaclone

# Vá para a pasta da aplicação
$ cd instaclone

# Instale as dependências
$ npm install ou yarn install

#Iniciar json-server
$ yarn json-server server.json -d 1000 -w

# Inicie o Expo
$ expo start --android ou expo start --ios

# Obs.: Se for executar a aplicação no Android lembre-se de ter um emulador em execução antes de
# iniciar o expo

# Obs.2: A aplicação pode ser executada diretamente no seu smartphone.

# Para isso você precisa ter instalado no seu dispositivo o aplicativo do Expo e scannear o QR Code
# que aparece no canto inferior esquerdo da página que irá abrir após rodar o comando expo start.

```

### Rodando ADB Android

Insira nas variáveis de ambiente (PATH) o caminho para as plataformas do Android
C:\Users\{USERNAME}\AppData\Local\Android\sdk\platform-tools

Abra o emulador ou execute em seu dispositivo.

Obs.: Caso realize o teste em seu dispositivo é necessário conectá-lo a máquina via cabo usb. Vá até as configurações do dispositivo, clique em Opções do desenvolvedor e ative a Depuração de USB. Após isso realize as etapas abaixo.

Abra o prompt de comando e execute os comandos abaixo

```bash

# Verifique os dispositivos conectados
$ adb devices

# Finalize os processos adb em execução
$ adb kill-server

# Inicialize o processo adb
$ adb start-server

# Adicione está linha de comando para que o Android reconheça o localhost
$ adb reverse tcp:3000 tcp:3000

```



## 🛠 Tecnologias

As seguintes ferramentes foram usadas na construção do projeto:

### **Aplicativo** [JavaScript](https://www.javascript.com/))

- **[React Native](https://reactnative.dev/)**
- **[Expo](https://docs.expo.io/)**
- **[Styled-Component](https://styled-components.com/)**

> Veja o arquivo [package.json](https://github.com/nayaracorrea/moveit-mobile/blob/master/package.json)

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

## 🙋 Autora

<a href="https://app.rocketseat.com.br/me/nayaraflorentino-1602180404901">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/43212442?s=400&u=6330cdf68f31859541a3805c6e2fa3bf59f90f82&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Nayara Corrêa</b></sub></a> <a href="https://app.rocketseat.com.br/me/nayaraflorentino-1602180404901" title="Rocketseat">🚀
 </a>

Feito por Nayara Corrêa 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Nayara-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nayaracorreaflorentino/)](https://www.linkedin.com/in/nayaracorreaflorentino/)
[![Gmail Badge](https://img.shields.io/badge/-nayara.florentino@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:nayara.florentino@gmail.com)](mailto:nayara.florentino@gmail.com)
