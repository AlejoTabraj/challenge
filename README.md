# challenge
The present challenge was implemented in react and node.

## To start the client run: yarn run dev in the client folder.
## To start the server: npm start in the server folder.

The client in react was initialized with parcel, 
the server in turn was developed using the stable
version 14.15.3 of node to be able to use es6 modules

The fetch in react is managed with axios and no environment 
variables were used so it has to be changed manually, the same 
happens with the server is connected to a postgres service in the cloud,
the configuration was thought to be able to work in different devices 
without having to configure the environment each time

In the frontend we used material-ui models and it handles 
all the logic of the application leaving in the api REST 
the only function of recording, serving and deleting data.

In the server we defined only one table for the database 
to load the costs and we used sequelize express and postgreSQL 