var admin = require('firebase-admin');

var serviceAccount = require('./todoapp-afd99-firebase-adminsdk-79h6s-e97ee44c5c.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const message = {
  notification: {
    title: 'Welcome Back!',
    body: 'You have successfully logged in.'
  },
  token:
    'd1H-HoiLSTW-e9_Npa8M5i:APA91bGe5O63tb1ocyoDqBUHGsIyOuFwPkn2IbYzhTosbSFRy52cHkt3NpFwrdrkD3l6LK7NHb3S3vJ9w9eBb3CI08x49TV8Xg6kGshE9BLpwt_BfXxUYLnice0wzFm9pO5zQ3G_sVfo',
};

admin.messaging()
  .send(message)
  .then((res) => console.log('Send Successfully',res))
  .catch(err => {
    console.log('catch notification error------', err);
  });


  // https://www.youtube.com/watch?v=tKZeFRB_xMk&t=303s

