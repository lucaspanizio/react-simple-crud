export default class Client {
  #id: string | null
  #name: string
  #age: number

  constructor(name: string = '', age: number = 0, id: string | null){
    this.#name = name
    this.#age = age
    this.#id = id
  }

  static default(){
    return new Client('',0,null)
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get age() {
    return this.#age
  }
}