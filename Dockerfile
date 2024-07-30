# Use a imagem oficial do Node.js como imagem base
FROM node:16-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do projeto para o diretório de trabalho, exceto os especificados no .dockerignore
COPY . .

# Adiciona o .env para forçar a otimização
COPY .env .env

# Define as permissões corretas para o diretório de trabalho
RUN chown -R node:node /app

# Muda para o usuário não-root
USER node

# Expõe a porta em que a aplicação irá rodar
EXPOSE 5000

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
