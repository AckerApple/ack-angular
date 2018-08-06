import { Injectable } from '@angular/core';

@Injectable() export class ErrorLog{
  public log = []
  public maxLog = 30

  monitorWindow(win?){
    win = win || window
    const callback = (evt)=>this.add(evt,false)
    win.addEventListener('error', callback);
  }

  reject(err){
    const e = this.add(err)
    return Promise.reject(e)
  }

  rejector(){
    return err => this.reject(err)
  }

  add(e, toConsole?){
    const ob = this.paramAudit(e,toConsole)
    this.log.unshift( ob );
    if(this.maxLog){
      while(this.log.length>this.maxLog){
        this.log.pop()//remove last
      }
    }
    return logObToErrorObject(ob)
  }

  /*logObToErrorObject(ob){
    return logObToErrorObject(ob)
  }*/

  //api error to js Error object
  paramAudit(e, toConsole?){
    if(e.constructor==String){
      e = new Error(e)
    }

    if(toConsole==null || toConsole)console.error(e)

    const err = this.objectifyError(e);
    err['datetime'] = err['datetime']||getDateTimeString()

    if(!e.message && e.status==-1){
      e.message = "Cannot connect to server"
      e.details = e.details || "Connection to internet maybe down. Also possible CORS needs be to enabled at remote server."
    }

    return err
  }

  /** Convert Error object to a regular object */
  objectifyError(err){
    const keys = Object.getOwnPropertyNames(err)
    keys.push.apply(keys, Object.keys(err))
    
    const recErr:{data?:any} = {}//new Error(err.message || err.name || err.type || 'Unexpected Error Occured')
    keys.forEach(v=>recErr[v]=err[v])
    
    const knownKeys = ["stack","message","name","arguments","type"]
    knownKeys.forEach(key=>{
      if(typeof err[key]!='undefined'){
        recErr[key] = err[key]
      }
    })

    const body = err.body || err._body

    //auto attempt to parse body
    if(body && !err.data && err.headers){
      const contentType = err.headers.get('content-type')
      if(contentType && contentType.toLowerCase()=='application/json'){
        try{
            recErr.data = JSON.parse(body)
        }catch(e){}
      }
    }

    return recErr
  }

  /** same as reject but uses native throw instead of native Promise.reject */
  rethrow(err){
    const e = this.add(err)
    throw e
  }
}

function getErrorMessage(err){
  return err.message || err.statusText || err.name || 'Unexpected Error Occured'
}

function getResponseMessage(res){
  if(res.data && res.data.error && res.data.error.message){
    return res.data.error.message
  }
    return getErrorMessage(res)
}

function logObToErrorObject(log){
  const e = new Error( getResponseMessage(log) )
  Object.keys(log).forEach( v=>e[v]=log[v] )
  return e
}

function getDateTimeString(){
  return (function(d){return (('0'+(d.getMonth()+1)).slice(-2)+'/'+('0'+d.getDate()).slice(-2)+'/'+d.getFullYear())})(new Date())+' '+(function(d){var h=d.getHours(),t='AM',m=d.getMinutes();var mn = m<10?'0'+m:m;h = h>=12?(t='PM',h-12||12):h==0?12:h;return ('0'+h).slice(-2)+':'+('0'+mn).slice(-2)+' '+t})(new Date())
}