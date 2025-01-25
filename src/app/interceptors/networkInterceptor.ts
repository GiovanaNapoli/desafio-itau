import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export function networkInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const toast = inject(ToastrService);
  const spiner = inject(NgxSpinnerService);

  if (navigator.onLine) {
    return next(req);
  } else {
    toast.error('Você está offline!');
    spiner.hide();
    throw new Error('Você está offline!');
  }
}
