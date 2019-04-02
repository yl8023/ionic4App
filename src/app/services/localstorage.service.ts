import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getLocal(text: string) {
    return JSON.parse(localStorage.getItem(text));
  }
  setLocal(text: string, val: any) {
    localStorage.setItem(text, JSON.stringify(val));
  }
  remove(text: string) {
    localStorage.removeItem(text);
  }
  removeAll() {
    localStorage.clear();
  }
}
