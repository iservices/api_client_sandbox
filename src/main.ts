//main entry point
import {bootstrap} from 'angular2/platform/browser';
// import {App} from './app';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ToyComponent} from './toys.component.ts';

// bootstrap(App, [])
bootstrap(ToyComponent, [HTTP_PROVIDERS])
  .catch(err => console.error(err));