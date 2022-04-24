import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coffee } from './../../models/coffee.model';
import { AppState } from './../../store/app.state';
import { loadCoffee, updateCurrPage } from '../state/coffee.action';
import { getCoffee, getCurrPage } from '../state/coffee.selector';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {

  pageSize = 10;
  currPage: Observable<number>;
  pagination: number[] = [];
  coffee: Observable<Coffee[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.coffee = this.store.select(getCoffee);
    this.currPage = this.store.select(getCurrPage);
    this.coffee.subscribe(data => {
      this.pagination = Array(Math.ceil(data.length / this.pageSize)).fill(0).map((x, i) => i + 1);
    })
    this.store.dispatch(loadCoffee());
  }

  changePage(newPage) {
    this.store.dispatch(updateCurrPage({ currPage: newPage }));
  }

}
