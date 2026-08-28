import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../injectionTokens/baseUrl.injectionToken';

export function baseUrlInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const base_url = inject(BASE_URL);
  let clonedReq: HttpRequest<unknown>;
  if (!req.url.includes('http')) {
    clonedReq = req.clone({ url: base_url.concat(req.url) });
  } else {
    clonedReq = req;
  }
  return next(clonedReq);
}
