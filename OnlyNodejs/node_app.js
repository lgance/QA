const express = require('express')
const app = express()

const port = 4500;

app.listen(port,()=>{
  console.log(`Only Node.js Test Example ${port}`)
});

app.get('/',async function (req, res) {

  let uuid = scenarioCreateUUID();
  testWorkflow(uuid);

  res.send(`TRIGGER WORKFLOW ${uuid}`);
})


function testWorkflow(uuid){
  return new Promise(async(resolve,reject)=>{
    try {

      setTimeout(async()=>{
        try {
          TestCase(uuid);
        } catch (error) {
          console.warn(error);
        }
      },0)
    } catch (error) { 
      console.warn('ERROR');
      reject(error);
    }
  })
}

function TestCase(seq){
  return new Promise(async(resolve,reject)=>{
    try {
      let startCondition =1;
      let exitCondition=5;
      
      console.warn(`[Start TC ${seq}`);

      let testTimer = setInterval(async()=>{
        try {
          console.warn(`Running TC ${seq} ${20*startCondition}%`);

          if(startCondition>=exitCondition){
            // 테스트케이스 종료 
            clearTimeout(testTimer);
            console.warn(`Complete TC ${seq}`);
          }
          startCondition++;
        }
        catch (error) {
          console.warn(`Error Exit TC ${seq}`);
          console.error(error);
        }
      },5000)
     
      resolve(true);
    } catch (error) {
      reject(error);
    }
  })
}

function wait(){
  return new Promise(async(resolve)=>{
    setTimeout(()=>{
      resolve(true);
    },4000)
  })
}

function scenarioCreateUUID() {
  let d = new Date().getTime();
  if (
    typeof performance !== 'undefined' &&
    typeof performance.now === 'function'
  ) {
    d += performance.now(); // use high -precision timer if available
  }
  return 'scen-xxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  })
 }