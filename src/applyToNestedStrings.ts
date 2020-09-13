// Helpers
const isObject = (value: any): boolean => value && typeof value === 'object' && value.constructor === Object
const isArray = (value: any): boolean => value && typeof value === 'object' && value.constructor === Array

function recursion<T> (item: any, applier: (str: string) => string): T {
  if (typeof item === 'string') {
    item = applier(item)
  } else if (isObject(item)) {
    Object.entries(item)
      .forEach(([key, value]) => {
        item[key] = recursion(value, applier)
      })
  } else if (isArray(item)) {
    item.forEach((value: any, index: number) => {
      item[index] = recursion(value, applier)
    })
  }

  return item
}

export default function applyToNestedString<T> (item: T, applier: (str: string) => string): T {
  return recursion<T>(item, applier)
}
