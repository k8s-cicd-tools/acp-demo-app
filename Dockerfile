FROM node:16.17


#Create a new user and group named "demo"
RUN groupadd -r demo && useradd -r -g demo demo

#create home directory for demo user
RUN mkdir /home/demo

#set the home directory to /home/pulumi
ENV HOME=/home/demo

WORKDIR /home/demo
COPY . /home/demo/src

WORKDIR /home/demo/src
RUN npm install


RUN chown -R demo:demo /home/demo
USER demo
ENTRYPOINT ["node" , "index.js"]
