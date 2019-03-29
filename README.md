## Project Planner App

Small test project created with React, Redux, Redux Thunk, and Firebase to learn more about Firebase. 
This project utilizes cloud functions and cloud firestore. 

Visit https://marioplanpractice.firebaseapp.com for a working demo deployed on Firebase servers. 

To run Locally, clone the project, and make sure you set up your own firebase configuration in `src/config/fbConfig.js` which would look like this:

```
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: YOUR_API_KEY,
    authDomain: YOUR_AUTH_DOMAIN,
    databaseURL: YOUR_DATABASE_URL,
    projectId: YOUR_PROJECT_ID,
    storageBucket: YOUR_STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
```
Currently, you should be able to:

1) Register
2) Login / Logout
3) Create a new 'project'
4) View Projects others have created
5) View Notifications refresh as new users register or as users create a new project.

To update any cloud functions:

make sure you have `firebase-tools` installed globally. If not, `sudo npm install -g firebase-tools`

`firebase login` -> to login to your firebase google account 

`firebase init` -> to create your own firestore instance of this project

`firebase deploy --only functions` to deploy only `functions/index.js` which is where the logic for all cloud functions live. 

`firebase deploy` to deploy whole project.

Tutorial Reference I used: https://www.youtube.com/watch?v=Oi4v5uxTY5o&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3

Future Wishlist:

1) Add scss support, mobile styling
2) Implement add comment functionality (adding comments to a collection in firebase, make them associated with each other...)
3) Try porting over project to React-Native-Web

