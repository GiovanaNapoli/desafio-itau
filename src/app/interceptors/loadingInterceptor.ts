import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay, finalize, Observable } from 'rxjs';

export function loadingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const spinner = inject(NgxSpinnerService);

  spinner.show();
  return next(req).pipe(
    delay(1000),
    finalize(() => spinner.hide())
  );
}
