import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

import * as constants from '@app/app.constants';

@Injectable()
export class ToastProvider {
  private hideDelay = constants.TOAST_HIDE_DELAY;
  private position = constants.TOAST_POSITION;

  private TypeEnum = {
    ERROR: 0,
    SUCCESS: 1,
    WARN: 2,
    LOG: 3,
    DEBUG: 4
  }

  private TypeName = [
    'error',
    'success',
    'warn',
    'log',
    'debug'
  ]

  constructor(private toastCtrl: ToastController) { }

  error(message: string, hideDelay?: number, position?: string): void {
    this.show(message, this.TypeEnum.ERROR, hideDelay, position);
  }

  success(message: string, hideDelay?: number, position?: string): void {
    this.show(message, this.TypeEnum.SUCCESS, hideDelay, position);
  }

  warn(message: string, hideDelay?: number, position?: string): void {
    this.show(message, this.TypeEnum.WARN, hideDelay, position);
  }

  log(message: string, hideDelay?: number, position?: string): void {
    this.show(message, this.TypeEnum.LOG, hideDelay, position);
  }

  debug(message: string, hideDelay?: number, position?: string): void {
    this.show(message, this.TypeEnum.DEBUG, hideDelay, position);
  }

  show(message: string, type?: number, hideDelay?: number, position?: string) {
    let cssClass = 'toast-service';
    if (this.TypeName[type]) {
      cssClass += ' toast-' + this.TypeName[type]
    }
    let toast = this.toastCtrl.create({
      message: message,
      duration: hideDelay || this.hideDelay,
      position: position || this.position,
      cssClass: cssClass
    });

    toast.present();
  }
}
