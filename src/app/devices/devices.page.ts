import { Component, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { Toast } from '@ionic-native/toast/ngx';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {

  devices: any[] = [];
  constructor(private ble: BLE, private toast: Toast) { }

  ngOnInit() {
    this.devices = [1, 2, 3, 4, 5]
  }

  /**
   * Loads Devices
   */
  getDevices() {

    this.devices = [1, 2, 3, 4, 5]
    // this.ble.scan([], 5).subscribe(response => {
    //   this.onDeviceFounded(response)
    // });

  }

  /**
   * Device founded
   */
  onDeviceFounded(response: any) {
    console.log(response)
  }

}
