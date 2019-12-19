import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { NavController } from '@ionic/angular';
import { DinamarcaAPIService } from '../dinamarca-api.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private qrScanner: QRScanner, private toast: Toast, private apiService: DinamarcaAPIService) { }

  clickButton() {
    this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted




          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  goTo(destination: string) {
    this.apiService.goTo(destination);
  }



}
