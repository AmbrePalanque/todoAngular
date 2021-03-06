// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyCCF9GKKvyavtdXJVoAuhOFuAigt1ubdPw',
    authDomain: 'todolist-1276a.firebaseapp.com',
    databaseURL: 'https://todolist-1276a.firebaseio.com',
    projectId: 'todolist-1276a',
    storageBucket: 'todolist-1276a.appspot.com',
    messagingSenderId: '563602660230'
  }
};
