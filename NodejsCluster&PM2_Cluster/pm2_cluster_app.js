const express = require('express')
const app = express()


/** 
 * 1. Install PM2
 * 2. pm2 start pm2_cluster_app.js -i 4 ( used 4 cpu )
 * 3. pm2 monit
 * 4. node axios.js
 * 
 * 
 * Memory , CPU  Cluster
 */

const port = 5500;
const appClusterUUID = createUUID();


app.listen(port,()=>{
  console.log(`Node.js Cluster Test Example ${port}`)
});


app.get('/',async function (req, res) {

  res.send(`CLUSTER Node ${appClusterUUID}`);
})


function wait(){
  return new Promise(async(resolve)=>{
    setTimeout(()=>{
      resolve(true);
    },4000)
  })
}

function createUUID() {
  let d = new Date().getTime();
  if (
    typeof performance !== 'undefined' &&
    typeof performance.now === 'function'
  ) {
    d += performance.now(); // use high -precision timer if available
  }
  return 'clst-xxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  })
 }