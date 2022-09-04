const {
  Worker,
   isMainThread, 
   parentPort, 
   workerData,
  setEnvironmentData,
  getEnvironmentData
} = require('worker_threads');


const childUUID = createUUID();


console.log(`Start Worker Child ${childUUID}`);
console.warn(`Thread Category is Main = ${isMainThread}`);

let i=0;
let timer = setInterval(()=>{

  console.warn(`Running Worker Child ${childUUID}`);

  if(i===3){
    console.warn('Complete Worker Notification to Parent');
    clearTimeout(timer);
  }
  i++;
},1000)

function createUUID() {
  let d = new Date().getTime();
  if (
    typeof performance !== 'undefined' &&
    typeof performance.now === 'function'
  ) {
    d += performance.now(); // use high -precision timer if available
  }
  return 'work-xxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  })
 }