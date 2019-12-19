import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications: any[] = [];
  constructor() { }

  ngOnInit() {
    this.notifications = [1, 2, 3, 4, 5];
  }

}
