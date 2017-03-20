export const pipes = {
  yesno:function yesno(input:any){
    if(input==null)return input
    return input ? 'yes' : 'no';
  },

  yesNo:function yesNo(input:any){
    if(input==null)return input
    return input ? 'Yes' : 'No';
  },

  numbers:function numbers(input:any){
    return input ? String(input).replace(/[^0-9]/g,'') : input
  },

  capitalizeWords:function capitalizeWords(input:any){
    var reg = /[^\W_]+[^\s-]* */g
    return (!!input) ? input.replace(reg, function(txt:any){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) : ''
  },

  /** each sentence word is capitalized */
  capitalize:function capitalize(input:any){
    input = pipes.capitalizeOne(input)
    var reg = /[.?!][\s\r\t]+\w/g
    return (!!input) ? input.replace(reg, pipes.capitalizeAfterSentence) : ''
  },

  capitalizeAfterSentence:function capitalizeAfterSentence(input:any){
    var reg = /[\s\r\t]\w/g
    return (!!input) ? input.replace(reg, function(txt:any){return txt.charAt(0) + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase()}) : ''
  },

  capitalizeOne:function capitalizeOne(input:any) {
    var reg = /[^\W_]+[^\s-]*/
    return (!!input) ? input.replace(reg, function(txt:any){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) : ''
  }
}
