//import localForage from "localforage/dist/localforage.js"
import * as localForage from "localforage"
import { Injectable } from '@angular/core';

/** Offline storage provided by localforage */
@Injectable() export class AckOffline{
  public prefix:string="offline"

  set(name, data) {
    return localForage.setItem(this.prefix+'-'+name, data)
  }

  get(name) {
    return localForage.getItem(this.prefix+'-'+name)
  }

  remove(name){
    return localForage.removeItem(this.prefix+'-'+name)
  }

  /** aka of remove */
  clear(name){return this.remove(name)}

  clearAll() {
    return this.promiseNameArray().then((keys) => keys.forEach(name=>this.remove(name)))
  }

  /** returns string array of all key names used for browser storage */
  promiseNameArray(){
    let keys = []
    return localForage.iterate((_, k) => {
      if (k.startsWith(this.prefix)) {
        keys.push( k.substring(this.prefix.length+1, k.length) )
      }
    })
    .then(()=>keys)
  }
}