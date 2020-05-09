# base image
FROM node:14.2.0-buster AS build

RUN sudo apt-get update

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@9.1.1

COPY . /app
RUN ng build Paypal --prod --output-path=dist

# dist
FROM nginx:1.17.10-alpine as dist
COPY --from=build /app/dist /usr/shar/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]