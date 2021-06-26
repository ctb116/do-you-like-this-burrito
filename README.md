# Do you like this Burrito?
By _**Cathy T Bradley**_
<br>
*updated: 6/26/21*
***

## Description
A simple question: do you like this burrito? If so, click the heart-shaped like button. Your response will be noted.

Go to [do-you-like-this-burrito.web.app](https://do-you-like-this-burrito.web.app/) to see the burrito.

## Purpose
To try out [ReactFire](https://github.com/FirebaseExtended/reactfire) to interact with Firebase in a ReactJS application. Why? Originally I used [react-redux-firebase](https://github.com/prescottprue/react-redux-firebase), but never actually used redux to manage Firebase data. This article, [React and Firebase without Redux](https://prescottprue.medium.com/react-and-firebase-without-redux-5c1b2b6a6ba1) by Scott Prue, the creator of react-redux-firebase, convinced me to try out ReactFire.

### Goals
1. Try out ReactFire. Is it easier to use for the applications I want to make?
2. Set up a Firestore Database will real time updates in the application using ReactFire.
3. Deploy application using Firebase Hosting

### Results
**Success!**
<br> 
This application isn't extensive but instead of trying to manage redux state, I can get data from firestore to the component I need as simple as:

```
  const burritoRef = useFirestore()
  .collection('foodTruck')
  .doc('burrito');
  
  const { status, data } = useFirestoreDocData(burritoRef);
```

`useFirestore` gets my firebase app from Context from anywhere in my application. Hooks like `useFirestoreDocData` let me subscribe to that data.

**Not so Success!**
<br>
I used this project to also experiment with an idea to add a casual like button to an image. A user could casually like an image without needing to create an account. A tally of likes is stored in Firestore but the like button checked attribute true/false value is stored in Window.sessionStorage. Meaning a user can like an image, increase the like tally, start a new session, like the image and increase the tally again.

Users (friends and family) didn't like that. They also really didn't like the picture of the burrito I chose. More in [user feedback](https://github.com/ctb116/do-you-like-this-burrito/wiki/user-feedback).

***

## Technologies
- ReactJS (create-react-apt)
- JavaScript
- ReactFire ([quickstart guide](https://github.com/FirebaseExtended/reactfire/blob/main/docs/quickstart.md))
- Firebase
- CSS ([Material-UI](https://material-ui.com/))
- HTML

## Known Bugs/Issues:
- Not mobile friendly. No media query.
- See **Not so Success!** above.
