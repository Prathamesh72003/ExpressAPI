# REST API's USING EXPRESS, NODE.JS and MONGODB

<p align="center">
<img src="https://www.shawndsilva.com/public/assets/images/jXAvz9h.png" alt="Logo" width="600" height="350">
</p>

This project provides a basic template for building RESTful APIs with CRUD (Create, Read, Update, Delete) operations using Express, Node.js, and MongoDB with Mongoose. The API endpoints allow you to interact with a database to manage resources effectively.

## Prerequisites
Make sure you have the following installed on your machine:
<ol>
<li>Node.js (version LTS: 18.6.0)</li>
<li>MongoDB (version LTS: 6.0.6)</li>
</ol>

## Getting Started
To get started with the project, follow these steps:
<ol>
  <li>Clone the repository:</li>
 
  ```
  git clone https://github.com/Prathamesh72003/ExpressAPI.git
  ```
  
  <li>Navigate to the project directory:</li>
  
  ```
  cd ExpressAPI
  ```
  
  <li>Open the command prompt in the root dir and install the dependencies:</li>
  
  ```
  npm install
  ```
  
  <li>Start the development server:</li>
 
  ```
  npm run devStart
  ```
</ol>

## API Endpoints
The following API endpoints are available for interacting with the resources:

### 1. Create a resource in our case client

    POST http://localhost:3000/clients

    Content-Type: application/json

    {
        "name": "Prathamesh Thakare",
        "department": "DevOps"
    }
   
### 2. Read resources/clients

   To retrive all clients

    GET http://localhost:3000/clients
   
   To retrive a specific client

    GET http://localhost:3000/clients/648b6b20f8fd97495b0a732e
   
### 3.Update a resource/client

    PATCH http://localhost:3000/clients/648b720460a51d02475bc583
    
    Content-Type: application/json

    {
        "name": "Prathamesh Prabhakar Thakare"
    }
    
### 4. Delete a resource/client

   To delete a specific client

    DELETE http://localhost:3000/648b6b20f8fd97495b0a732e
    
## Error Handling
All the API's handles errors gracefully and returns appropriate status codes and error messages in the response.

## Contribution
Contributions are welcome! If you find any issues or would like to add new features, please submit a pull request.

## Acknowledgments
<ol>
  <li>Express</li>
  <li>Node.js</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
</ol>

Feel free to explore, modify, and use this template to kickstart your own RESTful API project. Happy coding!

  
