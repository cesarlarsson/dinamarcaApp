import { Component } from '@angular/core';
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,private toast: Toast) {}

  clickButton(){

    this.barcodeScanner.scan().then(barcodeData => {
      // success. barcodeData is the data returned by scanner
      this.toast.show(`Success`, '1000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    }).catch(err => {
      // error
      this.toast.show(`Fail`, '1000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
    // Optionally request the permission early
  }
}
