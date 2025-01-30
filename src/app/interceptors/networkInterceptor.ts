import {
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { from, Observable, of, switchMap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DbServiceService } from '../services/db-service.service';

export function networkInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const toast = inject(ToastrService);
  const spiner = inject(NgxSpinnerService);

  const db = inject(DbServiceService);

  if (!navigator.onLine) {
    const searchQuery = extractSearchQuery(req.urlWithParams);
    spiner.hide();

    return from(
      db.characters.where('name').startsWithIgnoreCase(searchQuery).toArray()
    ).pipe(
      switchMap((cacheData) => {
        if (cacheData.length > 0) {
          toast.error(
            'Você está offline! Mas os dados estão salvos localmente!'
          );

          return of(
            new HttpResponse({
              status: 200,
              body: { data: { results: cacheData } },
            })
          );
        } else {
          toast.error('Você está offline!');
          return of(
            new HttpResponse({ status: 200, body: { data: { results: [] } } })
          );
        }
      })
    );
  }
  return next(req);
}

function extractSearchQuery(url: string): string {
  const urlObj = new URL(url);
  return urlObj.searchParams.get('name') || '';
}
