import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { getLoading, getErrorMessage } from './store/Shared/shared.selector';

import { setLoadingSpinner } from './store/Shared/shared.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'Angular NgRx';
  showLoading: Observable<boolean>;
  errorMessage: Observable<string>;
  constructor(private store: Store<AppState>, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);


  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
