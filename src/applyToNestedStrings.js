// Helpers
const isObject = value => value && typeof value === 'object' && value.constructor === Object
const isArray = value => value && typeof value === 'object' && value.constructor === Array

const applyToNestedString = (item, applier) => {
  if (typeof item === 'string') {
    item = applier(item)
  } else if (isObject(item)) {
    Object.entries(item)
      .forEach(([key, value]) => {
        item[key] = applyToNestedString(value, applier)
      })
  } else if (isArray(item)) {
    item.forEach((value, index) => {
      item[index] = applyToNestedString(value, applier)
    })
  }

  return item
}

export default applyToNestedString
