# Use a imagem do nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copie os arquivos para o diretório padrão do nginx
COPY . /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80
