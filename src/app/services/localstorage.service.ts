import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getLocal(text) {
    return JSON.parse(localStorage.getItem(text));
  }
  setLocal(text, val) {
    localStorage.setItem(text, JSON.stringify(val));
  }
}
