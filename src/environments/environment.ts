// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
   apiKey: "AIzaSyB1uNF2XEJRBMTstg3_DvmWZeQk4HC8F2w",
    authDomain: "burger-queen-e8209.firebaseapp.com",
    databaseURL: "https://burger-queen-e8209.firebaseio.com",
    projectId: "burger-queen-e8209",
    storageBucket: "burger-queen-e8209.appspot.com",
    messagingSenderId: "464256674320"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
