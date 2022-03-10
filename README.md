# ImageProcessingAPI

## Overview
This is a simple placeholder API that allows to place images into the frontend with the size set via URL parameters, and used also as a library to serve properly scaled versions of images to the front end to reduce page load size. Instead of uploading multible copies of the same image to be used throughout the website, the API will handle resizing and serving stored images.

## Setup Environmint
Dependencies needed to run this project:

### Typescript
`npm i typescript ts-node`
### Express
```
npm i express
npm i @types/express
npm i @types/node
```
### sharp
library used for resizing images
`npm i sharp @types/sharp`
### Testing
installing jasmine and supertest(library for endpoint testing)
```
npm i jasmine
npm i jasmine-spec-reporter
npm i @types/jasmine
npm i supertest @types/supertest
```
### Nodemon
`npm i nodemon`

### Usage
To run this project enter `npm run start` in the terminal, now the server is running on port `3000`, it can be accessed at `http://localhost:3000`
You can use display and resize images by entering three parameters, `name, width, height` in the `api` route
#### Example
`http://localhost:3000/api?name=rawa2.jpg&width=200&height=200`
