import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { SomethingInterestingComponent } from './app/something-interesting/something-interesting.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
