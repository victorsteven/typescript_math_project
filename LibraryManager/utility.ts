export function Purge<T>(inventory: Array<T>): Array<T> {

  //remove the last 2 items from the array
  return inventory.splice(2, inventory.length)

}