## How to Work or Run Application With Dynamic Data

# Need to install React, Express And MongoDB for run application

1) MongoDB
- First Download MongoDB and Install.
- Set DB Name, DB connection string and collection name accordingly used in express js
- Start MongoDB

Download MongoDB - https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.6-signed.msi
Set DB Name - local
Set DB URL - "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
Set Collection Name - cus_payment_details

2) Express Js:- React code related to Express code is here:- https://github.com/KanganeP/Express_CustomerRewardPoint
- Download file from git.
- Open file in VS Code
- Open Terminal for cmd - npm install
                        - npm install -g nodemon
              Run Cmd   - nodemon server.js or node server.js:- Need to run express code before run react code.

3) React Js 
- Download file from git.
- Open file in VS Code
- Open Terminal for cmd - npm install
              Run Cmd   - npm start

              
## In app.js file commect and uncommect for run dynamic data.
- Uncomment - import DynamicDataRewards from './components/FunctionalComponent/DynamicData/CusRewardPoints';
- Uncomment - <DynamicDataRewards /> 

- comment - // import StaticDataRewards from './components/FunctionalComponent/StaticData/CusRewardPoints';
- comment - {/* <StaticDataRewards /> */}

- comment - // import OtherSolution from './components/OtherSolution/CusRewardPoint';
- comment - {/* <OtherSolution /> */}