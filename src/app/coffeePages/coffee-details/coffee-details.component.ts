import { Component, OnInit } from '@angular/core';
import { Coffee } from '../../models/coffee.model';

import { getCoffeeById } from './../state/coffee.selector';
import { Store } from '@ngrx/store';
import { AppState } from './../../store/app.state';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss']
})
export class CoffeeDetailsComponent implements OnInit {

  coffeeItem: Observable<Coffee | null | undefined>;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {

    this.coffeeItem = this.store.select(getCoffeeById);
    this.coffeeItem.subscribe(_ => {
      if (!_) {
        this.router.navigateByUrl('coffee')

      }
    }).unsubscribe()
  }

}
