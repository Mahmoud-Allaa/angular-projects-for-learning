import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  // BehaviorSubject = stream يبتدي بقيمة ابتدائية (هنا false)
  private _loading = new BehaviorSubject<boolean>(false);

  // Observable نستخدمه في الكومبوننتات
  loading$ = this._loading.asObservable();

  show() {
    this._loading.next(true);
  }

  hide() {
    this._loading.next(false);
  }
}
