import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection, isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgIconsConfig } from '@ng-icons/core';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

import { loadingInterceptor } from './interceptors/loadingInterceptor';
import { networkInterceptor } from './interceptors/networkInterceptor';
import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideNgIconsConfig({
      size: '24px',
    }),
    provideHttpClient(
      withInterceptors([loadingInterceptor, networkInterceptor])
    ),
    importProvidersFrom([BrowserAnimationsModule]),
    provideAnimations(), // required animations providers
    provideToastr({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }), // Toastr providers
  ],
};
