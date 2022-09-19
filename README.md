# Perfanalytics

Perfanalytics is build to measure web performance and serve it as graphical datas. It consists of three systems that communicate with each other.

- **Perfanalytics.js**
- **Perfanalytics.API**
- **Perfanalytics Dashboard**

As an extra, there is one test environment, which created to produce us test data:

- Test Enviroment: https://perfanalytics-ty.herokuapp.com/test/

* This data is visualized in the **dashboard**: https://perfanalytics-ty.herokuapp.com/
 
### Perfanalytics.API
An express API which manages the entire data transfer process. 

- **GET**/
	- Serves dashboard
- **GET**/test
	- Data produce environment
- **GET**/data 
	- Returns only data of the last hour
- **POST**/data
	- Gets data from data produce environment and returns to API
 
### Perfanalytics.js
A script which measure all the website by using [window performance elements][window performance elements] It sends data to the API.

It calculates based on the data that has been processed. Therefore, it is recommended to be called with the defer tag in order to work fully efficiently.

- Example:
`<script defer src=https://perfanalytics-ty.herokuapp.com/script/perfanalytics.js></script>`
 
#### Perfanalytics Dashboard
Dashboard is produced with React, SASS and Recharts.
[![Dashboard](https://media.giphy.com/media/5k0IXtKsbLMlfj631y/giphy.gif "Dashboard")](https://media.giphy.com/media/5k0IXtKsbLMlfj631y/giphy.gif "Dashboard")

### Development
`npm run all:install`
`npm run dev`

## Production
Change ports and urls according to own usage. 
- Also react proxy in client's package.json

*With Docker:*
`docker build . -t <imageName>`
`docker run -p 7000:7000 <imageName>`

Without Docker:
`npm run build`

## Test
To run all tests:

`npm run all:intall`
`npm test`
