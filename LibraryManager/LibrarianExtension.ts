import { UniversityLib } from './classes'

declare module './classes' {
  interface UniversityLib {
    phone: string
    hostSeminar(topic: string): void
  }
}


UniversityLib.prototype.hostSeminar = function(topic) {
  console.log('Hosting a seminar on ' + topic)
}