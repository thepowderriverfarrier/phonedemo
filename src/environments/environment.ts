// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyACmw05N1hEDeV27KPTJEtTSHY6w1FAAzg',
    authDomain: 'phonedemo-2e3bb.firebaseapp.com',
    databaseURL: 'https://phonedemo-2e3bb.firebaseio.com',
    projectId: 'phonedemo-2e3bb',
    storageBucket: 'phonedemo-2e3bb.appspot.com',
    messagingSenderId: '934027323363'
  }
};
