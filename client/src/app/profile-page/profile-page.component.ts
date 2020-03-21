import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Profile} from "../shared/interfaces";
import {ProfileService} from "../shared/services/profile.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-history-list',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements  OnInit,OnDestroy, AfterViewInit {

  //@Input() profiles: Profile[];
  @ViewChild('modal',{static: true}) modalRef: ElementRef;

  profiles$: Observable<Profile[]>;
  reloading = false;


  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.reloading = true;
    this.fetch();
  }

  private fetch(){

   this.profiles$ = this.profileService.fetch()
  }

  ngOnDestroy(): void {
    //this.modal.destroy();
  }

  ngAfterViewInit(): void {
   // this.modal = MaterialService.initModal(this.modalRef);
  }

  selectProfile(profile: Profile) {
    // this.selectedProfile = profile;
  }
}
