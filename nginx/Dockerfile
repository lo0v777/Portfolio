FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx-ssl.conf /etc/nginx/nginx.conf  

EXPOSE 80 443  

CMD ["nginx", "-g", "daemon off;"]