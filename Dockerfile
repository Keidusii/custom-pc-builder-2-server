FROM node:20
WORKDIR /server 
COPY --from=build . .
RUN npm ci --production
EXPOSE 5002

ENTRYPOINT ["node", "index.js"]
