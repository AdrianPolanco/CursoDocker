var cron = require('node-cron');
let times = 0;
cron.schedule('1-59/5 * * * * *', () => {
  times++;
  console.log('Running task each 5 seconds', times);
});