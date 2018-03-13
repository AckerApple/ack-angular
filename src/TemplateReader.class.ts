import {
  TemplateRef, ElementRef, ContentChildren
} from '@angular/core'

export interface types{
  [index:string]:string
}

export interface templates{
  [index:string]:TemplateRef<any>
}

export interface options{
  types?:types
  lastTemplateName?:string
}

export class TemplateReader{
  types:types = {}
  templates:templates = {}
  lastTemplateName:string

  constructor(options?:options){
    Object.assign(this,options)
  }

  readTemplates( templateRefs:TemplateRef<any>[] ){
    for(let x=templateRefs['_results'].length-1; x >= 0; --x){
      let row = templateRefs['_results'][x]
      this.applyReferences(row._def.references, row)
    }

    if( this.lastTemplateName && (!this.templates[this.lastTemplateName] || !templateRefs.length) ){
      this.afterReadTemplates( templateRefs )
    }
  }

  //look to apply last template as a specified templates[name]
  afterReadTemplates( templateRefs:TemplateRef<any>[] ){
    const index = templateRefs['_results'].length-1
    const lastTemplate = templateRefs['_results'][ index ]

    if( !lastTemplate || !this.lastTemplateName )return;
    
    const matched = this.applyReferences(lastTemplate._def.references, lastTemplate)
    if( !matched ){
      this.templates[this.lastTemplateName] = lastTemplate
    }
  }

  applyReferences(refs:any, row:TemplateRef<any>):boolean{
    for(let x in refs){
      if( this.types[x] ){
        this.templates[ this.types[x] ] = row
        return true
      }
    }

    return false
  }
}