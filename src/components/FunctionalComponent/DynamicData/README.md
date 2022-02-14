## How to Work or Run Application With Dynamic Data

## Need to install React, Express And MongoDB for run application

## 1) MongoDB
- First Download MongoDB - https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.6-signed.msi
- Set DB Name - local
- Set DB URL - "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
- Set Collection Name - cus_payment_details
- Start MongoDB

## 2) Express Js:- React code is related to Express code is here:- https://github.com/KanganeP/Express_CustomerRewardPoint
- Download file from git.
- Open file in VS Code
- Open terminal and wite <br />
              - npm install,<br />
              - npm install -g nodemon,<br />
              - Run Cmd   - nodemon server.js or node server.js:- Need to run express code before run react code.

## 3) React Js 
- Download file from git.
- Open file in VS Code
- Open terminal and write <br />
              - npm install,<br />
              - Run Cmd   - npm start

              
## In app.js file commect and uncommect for run dynamic data.
- Uncomment - import DynamicDataRewards from './components/FunctionalComponent/DynamicData/CusRewardPoints';<br />
  Uncomment - DynamicDataRewards line under the header section.

- comment - // import StaticDataRewards from './components/FunctionalComponent/StaticData/CusRewardPoints';<br />
  comment - // StaticDataRewards line under the header section.

- comment - // import OtherSolution from './components/OtherSolution/CusRewardPoint';<br />
  comment - // OtherSolution line under the header section. 
