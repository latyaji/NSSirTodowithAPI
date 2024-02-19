var admin = require('firebase-admin');

var serviceAccount = require('./todoapp-afd99-firebase-adminsdk-79h6s-e97ee44c5c.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const message = {
  notification: {
    title: 'Todo Task Create',
    body: 'Hello,Here we are trying push notification for ToDoTask',
  },
  token:
    'dJHzIzKGQGmnINbKzn7Ghv:APA91bGzgY1anNVfvuz1HCdz4EY9B2Ya5vMt6arjtH64dQROGABy87ASBeGAGeXZL6Ymv3WESoV5F5Ua7pmWrx49GMFCF9UO3z3w_8EAgb9jv4Plvf9f0HZUvbdjmvPx1eDkQSy9SQ_z',
};

admin.messaging()
  .send(message)
  .then((res) => console.log('Send Successfully',res))
  .catch(err => {
    console.log('catch notification error------', err);
  });
