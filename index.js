const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const app = express();
const port = 3000 || process.env.PORT;
app.use(express.json());

const swaggerDocument = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition : {
    openapi : "3.0.0",
    info : {
    version: "4.0.0", 
    title: "User Project CRUD" 
    },
    servers:[{
      url:'http://localhost:3000/'
    }
    ]
  },
  apis : ['index.js']
}

const swaggerspec= swaggerDocument(options);

app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerspec)
);


const Router = require('./routes/route.js');

/**
 * @swagger
 * /:
 *  get: 
 *   description: use to get the server is running or not
 *   responses:
 *     200:
 *     description: A succesful response
 */
app.get('/', (req, res) => {
  res.status(200).json({message: 'Server Runing'});
});

/**
 * @swagger
 * /users:
 *  get: 
 *   description: use to get the user info by user id
 *   responses:
 *     200:
 *     description: A succesfull response
 */
app.use('/users', Router);



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

module.exports = app;