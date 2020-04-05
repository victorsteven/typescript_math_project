interface ShelfItem {
  title: string;
}

export default class Shelf<T extends ShelfItem> { //there are alot of shelfs in a library

  private _items: Array<T> = new Array<T>();

  add(item: T): void {
    this._items.push(item)
  }

  getFirst(): T {
    return this._items[0]
  }
 
  //i cannot use item.title. title is of type string, but we dont know what item type is.
  find(title: string): T {
    return this._items.filter(item => item.title === title)[0]
  }

  printTitles(): void {
    this._items.forEach(item => console.log(item.title))
  }
}