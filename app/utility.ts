  function getInputValue(elementID: string): string {
    //asserting that document.getElementById(elementID) is of type HTMLInputElement
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
  
    return inputElement.value
  }

  function logger(message: string): void {
    console.log(message)
  }

  export { getInputValue as getValue, logger }