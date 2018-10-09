import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdGenerator {
  constructor() {
  }

  private _id: number = new Date().getTime();

  next(): string {
    ++this._id;
    return `APP_${this._id.toString(16)}`;
  }
}
