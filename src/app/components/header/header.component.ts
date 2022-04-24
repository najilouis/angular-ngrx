import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  coffeeId: any = null;

  constructor(private cdr: ChangeDetectorRef, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.coffeeId = null;
        if (e.urlAfterRedirects.indexOf('/coffee/details/') > -1) {

          let r = this.activatedRoute;
          while (r.firstChild) {
            r = r.firstChild;
          }
          r.params.subscribe(params => {
            if (params['id']) {
              this.coffeeId = params['id'];
            }
          });
        }
        this.cdr.detectChanges()
      }
    });
  }
}
