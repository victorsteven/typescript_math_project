//class a class decorator
// export function sealed(target: Function): void {
//   console.log('sealing the constructor')
//   Object.seal(target) //seal the constructor that was passed in
//   Object.seal(target.prototype) //as well as the prototype
// }
 
//The class constructor is automatically passed to this decorator and its type is function
export function sealed(name: string) {
  return function(target: Function): void {
    console.log(`sealing the constructor: ${name}`)
    Object.seal(target) //seal the constructor that was passed in
    Object.seal(target.prototype) //as well as the prototype
  }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
  let newContructor: Function = function() {
    console.log(`Creating new instance.`)
    console.log(target)
  }
  newContructor.prototype =  Object.create(target.prototype)

  newContructor.prototype.constructor = target

  return <TFunction>newContructor
} 

//using factory
export function writable(isWritable: boolean) {
  return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`Setting ${propertyKey}`);
    descriptor.writable = isWritable 
  }
}
