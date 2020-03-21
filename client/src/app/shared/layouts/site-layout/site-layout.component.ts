import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements AfterViewInit {

  @ViewChild('floating', {static: true} ) floatingRef: ElementRef;

  links= [
    {url: '/profile', name: 'Обзор'}
  ];

  constructor(private auth: AuthService, private router: Router) {
  }

  ngAfterViewInit(): void {

  }

  logout(event: Event){
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/login']);
  };
}
