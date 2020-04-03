class Utility {
  static getInputValue(elementID: string): string {
    //asserting that document.getElementById(elementID) is of type HTMLInputElement
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
  
    return inputElement.value
  }
}