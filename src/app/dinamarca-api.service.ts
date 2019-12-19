import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DinamarcaAPIService {

  constructor(private nav: NavController) { }

  /**
   * Navigates pages
   * @param destination
   */
  goTo(destination: string) {
    this.nav.navigateForward(`${destination}`);
  }

}
