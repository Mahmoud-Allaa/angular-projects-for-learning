import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        // Network error → No internet connection or server unreachable
        snackBar.open('Network error. Please check your internet connection.', 'Close', {
          duration: 5000,
          verticalPosition: 'top',
        });
      } else if (error.status === 401) {
        // Unauthorized → رجعه للـ login
        router.navigate(['/login']);
        snackBar.open('Unauthorized, redirecting to login...', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
        });
      } else if (error.status === 404) {
        snackBar.open('Not Found.', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
        });
      } else if (error.status === 500) {
        snackBar.open('Something went wrong. Please try again later.', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
        });
      } else {
        snackBar.open('Unexpected Error.', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
        });
      }

      // لازم نرجع error عشان اللي بيتابع Observable يعرف إن في مشكلة
      return throwError(() => error);
    })
  );
};
