import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowser} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {AppModule} from './app/app.module';


// bootstrapApplication(App).catch((err) => console.error(err));

platformBrowser().bootstrapModule(AppModule).then(r => console.log(r))
