//class a class decorator
// export function sealed(target: Function): void {
//   console.log('sealing the constructor')
//   Object.seal(target) //seal the constructor that was passed in
//   Object.seal(target.prototype) //as well as the prototype
// }

export function sealed(name: string) {
  return function(target: Function): void {
    console.log(`sealing the constructor: ${name}`)
    Object.seal(target) //seal the constructor that was passed in
    Object.seal(target.prototype) //as well as the prototype
  }
}