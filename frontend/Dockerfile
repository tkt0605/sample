FROM node:18
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*
WORKDIR /todo
COPY ./todo/package*.json ./
RUN npm install vuex@next
RUN npm install js-cookie 
RUN npm install vue-router
RUN npm install 
COPY ./todo/ .
EXPOSE 8080
CMD [ "npm", "run", "serve" ]