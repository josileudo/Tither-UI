import { AppComponent } from './app/app.component';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {
  importProvidersFrom,
  LOCALE_ID,
  DEFAULT_CURRENCY_CODE
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import ptBr from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { CreateMemberEffect } from './app/store/effects/create-member.effects';
import { provideRegisterFeature } from './app/store/reducers';

registerLocaleData(ptBr);

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule
    ),
    provideStore(),
    provideRegisterFeature(),
    provideRouter(routes),
    provideStoreDevtools(),
    provideEffects(CreateMemberEffect),
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
});
