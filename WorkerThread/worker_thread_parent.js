const {
   Worker,
   isMainThread, 
   parentPort, 
   workerData,
  setEnvironmentData,
  getEnvironmentData
} = require('worker_threads');


if (isMainThread) {
  console.warn('메인 쓰레드 입니다.');
  setEnvironmentData('Main','Thread');

  let data = getEnvironmentData('Main');
  console.warn(data);


} else {
  console.warn('자식 쓰레드 입니다.');
 
}