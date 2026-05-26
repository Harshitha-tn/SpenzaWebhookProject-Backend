const axios = require('axios');

axios
  .post(
    'http://localhost:3000/events/webhook',
    {
      eventType: 'payment_success',
      amount: 1000,
      user: 'Harshitha',
    },
  )
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err.message);
  });