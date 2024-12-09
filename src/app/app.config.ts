import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AppRoutingModule, FormsModule), provideAnimationsAsync()
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
