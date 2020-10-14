import { ImmortalStorage, LocalStorageStore, IndexedDbStore } from 'immortal-db'

const stores = [IndexedDbStore, LocalStorageStore]
const db = new ImmortalStorage(stores)

export const localStorageService = {
  // single ops
  set: (key: string, value: string) => db.set(key, value),
  get: (key: string, fallback: string = '') => db.get(key, fallback),
  remove: (key: string) => db.remove(key),
  // multi ops
  setMany: (keyValues: { key: string; value: string }[]) =>
    Promise.all(keyValues.map(item => db.set(item.key, item.value))),
  getMany: (keys: string[]) => Promise.all(keys.map(item => db.get(item))),
  removeMany: (keys: string[]) => Promise.all(keys.map(item => db.remove(item)))
}
