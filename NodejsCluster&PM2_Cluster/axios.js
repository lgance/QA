const axios = require('axios');


for (let i=0;i<=5000;i++){
  callTest();
}

function callTest(){
  return new Promise(async(resolve,reject)=>{
    try {
      let response = await axios.get('http://localhost:5500');

      console.warn(response.data);


      resolve(response);
    } catch (error) {
      reject(error);
    }
  })
}