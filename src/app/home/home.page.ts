import { Component } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';
import { DinamarcaAPIService } from '../dinamarca-api.service';


import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner, private toast: Toast, private apiService: DinamarcaAPIService) {}

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


  goTo(destination: string) {
    this.apiService.goTo(destination);
  }


}
