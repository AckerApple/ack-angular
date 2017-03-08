import 'reflect-metadata';
import { animateDefaults, animateConfig } from 'ng2-animate';
//animateDefaults.igniter = 'void';

export * from 'ng2-animate';

export function upgradeComponents(array, animations){
  for(let x=array.length-1; x >= 0; --x){
    upgradeComponent( array[x] )
  }
}

export function upgradeComponent(component, animations){
  animations = animations || ackAnimations
  const annots = Reflect.getMetadata("annotations", component)
  annots[0].animations = annots[0].animations || []
  annots[0].animations.push.apply(annots[0].animations, ackAnimations)
}

export const delayArray = [100,200,300,400,500,600,700,800,900,1000,1500,2000]
const absSwap = {
  easing:'linear', name:'absoluteSwap',
  whileStyle:{
    position: 'absolute', width:'100%', 'overflow':'hidden'
  }
}

/*export const easeArray = [
  {name:'Ease', value:'ease'},
  {name:'EaseIn', value:'ease-in'},
  {name:'EaseOut', value:'ease-out'},
  {name:'EaseInOut', value:'ease-in-out'}
]*/

export const ackAnimations = [animateConfig(absSwap)]

let absSwapClone = {}
for(let x=delayArray.length-1; x >= 0; --x){
  let n = delayArray[x]

  ackAnimations.push(
    animateConfig({duration:n, name:n.toString()})
  )

  absSwapClone = Object.assign({}, absSwap)
  absSwapClone.name = absSwapClone.name+n
  absSwapClone.duration = n
  ackAnimations.push(
    animateConfig( absSwapClone )
  )
/*
  for(let eIndex=easeArray.length-1; eIndex >= 0; --eIndex){
    let ease = easeArray[eIndex]

    ackAnimations.push(
      animateConfig({duration:n, name:n+ease.name, ease:ease.value})
    )

    absSwapClone = Object.assign({}, absSwap)
    absSwapClone.name = absSwapClone.name+n+ease.name
    absSwapClone.duration = n
    absSwapClone.ease = ease.value
    ackAnimations.push(
      animateConfig( absSwapClone )
    )
  }
*/
}
