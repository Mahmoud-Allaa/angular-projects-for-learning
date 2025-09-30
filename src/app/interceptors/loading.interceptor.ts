import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  // أول ما request يبدأ → show
  loadingService.show();

  // next(req) = يبعته للسيرفر
  // finalize = دايمًا يشتغل لما request يخلص (نجح أو فشل)
  return next(req).pipe(
    finalize(() => loadingService.hide())
  );
};
