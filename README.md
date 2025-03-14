# Clonando repósitório em sua máquina
- Para clonar este repositório em sua máquina, utilize o seguinte comando:
   ```bash
   cd pasta-desejada 
   git clone https://github.com/ReisLcb/conteudo-trabalho-LP2
   ```

- Para instalar as dependências, basta executar no terminal dentro da pasta local do projeto:
  ```bash
  npm install
  ```

## Instalação das dependências 
### IMPORTANTE
- Esse documento foi feito em Março de 2025, portanto as versões LTS que serão utilizadas podem ser diferentes dependendo de quando você está lendo isso.
- Sempre atualize os repositórios do Ubuntu com o comando **`sudo apt update`**.
- Caso algum dos comando não funcione, tente usar o **`sudo`** antes para dar permissão de super usuário
  
## Instalação do Nodejs e npm
- Primeiro, verifique se o **Nodejs** e o **npm** estão instalados:
   ```bash
   node -v
   ## se saída for v22.14.0 é a versão LTS mais recente
   ## se saída for "Command 'node' not found..." então não o Node.js não está instalado
   npm -v
   ## se saída for v10.9.2 é a versão LTS mais recente
   ## se saída for "Command 'npm' not found..." então não o npm não está instalado
   ```
- Caso não esteja instalado nenhuma versão ou uma versão anterior, instale o NVM (Node Version Manager), usando comando:
  ```bash
  sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash source ~/.bashrc
  ## preste atenção na versão (v0.40.1) pode ser que não seja mais a versão
  ## mais recente do NVM
  ```
  
- Agora podemos usar os comando **`nvm`** para instalar ou atualizar o **`Node.js`** e o **`npm`**. O comando a seguir mostra todas as versões do Node.js que está disponível:
  ```bash
   nvm list-remote
   ## uma longa lista vai aprecer
  ```
  
- Para instalar a versão LTS mais recente use o comando:
  ```bash
  nvm install node --lts
  ```
  
- E depois da instalação, é preciso selecionar qual versão vamos utilizar com o comando:
  ```bash
  nvm use --lts
  ```

## Instalando o typescript
- Verifique qual a versão ou se está instalado globalmente em sua máquina:
  ```bash
  tsc -v
  ## se saída for v5.7 é a versão LTS mais recente.
  ## se saída for "Command 'tsc' not found..." então não o Typescript não está instalado.
  ```
  
- Se já possui um projeto feito com Typescript é importante verificar a versão dele, dentro da pasta do projeto use o comando:
  ```bash
  cd pasta-do-seu-projeto
  npx tsc -v
  ## se saída for v5.7 é a versão LTS mais recente.
  ```
  
- Caso não estiver instalado globalmente, use o seguinte comando para instalar a versão mais recente:
  ```bash
  sudo npm install -g typescript
  ```
  
- Se já estiver instalado mas for uma versão antiga, atualize com o seguinte comando:
  ```bash
  sudo npm update -g typescript
  ```
  
- Para instalar dentro de um projeto, vá até a pasta e execute:
  ```bash
  sudo npm install --save-dev typescript
  ```
  
- Para atualizar o Typescript de um projeto, é melhor remove-lo e depois adicionar a versão mais recente, isso porque o comando npm update só atualiza dentro da mesma versão (por exemplo, versão 4.8.x para 4.9.x), por causa disso execute os comandos:
  ```bash
  sudo npm uninstall typescript
  sudo npm install --save-dev tpescript@latest
  ```
  
- Agora verifique dentro do arquivo **`package.json`** a versão do Typescript do seu projeto:
  ```JSON
  {
	"devDependecies": {
		"typescript": "^5.7.3"
	}
  }
  ```

## Iniciando projeto
- Crie uma nova pasta e mavegue até ela
   ```bash
   mkdir nome-da-pasta
   cd pasta desejada
   ```
- Inicie o typescript no diretório do projeto
   ```bash
   npx tsc --init
   ```
- Inicie o `package.json` no projeto com o comando
   ```bash
   npm --init -y
   ```
  
- Instalar as bibliotecas que serão necessárias para o projeto
  ```bash
  sudo npm install typescript ts-node @types/node @types/express -D
  sudo npm install axios express readline
  ```
