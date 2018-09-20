import { Component, HostListener, OnInit } from '@angular/core';
import { UserModule } from '../../models/User';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: string = null;

  constructor(
  ) { }

  ngOnInit() {
    UserModule.User.getLocal();
    this.user = UserModule.User.getUser();
  }

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
    UserModule.User.saveLocal();
  }

}
