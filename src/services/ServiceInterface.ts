
export interface IService<T> {

  all(query?: any): any

  one(query?: any): any

  update(o: T, q?: any): any

  create(o: T): any
}
