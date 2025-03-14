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

# Iniciando projeto
### IMPORTANTE
- Esse documento foi feito em Março de 2025, portanto as versões LTS que serão utilizadas podem ser diferentes dependendo de quando você está lendo isso.
- Sempre atualize os repositórios do Ubuntu com o comando **`sudo apt update`**.
- Caso algum dos comando não funcione, tente usar o **`sudo`** antes para dar permissão de super usuário
  
## Instalação do Nodejs, npm e typescript
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
