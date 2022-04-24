import { Coffee } from './../models/coffee.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  constructor(private http: HttpClient) { }

  getCoffeeList(): Observable<Coffee[]> {
    return this.http
      .get<Coffee[]>(`https://random-data-api.com/api/coffee/random_coffee?size=50`)
      .pipe(
        map((data) => {
          // const coffee: Coffee[] = [];
          // for (let key in data) {
          //   coffee.push({ ...data[key], id: key });
          // }
          // return coffee;
          return data;
        })
      );
  }
}
