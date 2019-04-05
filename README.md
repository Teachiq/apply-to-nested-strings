# Apply to nested strings
Apply a string modifier to all strings within an object or array.

## Installation
```npm install apply-to-nested-strings```

## Usage
```js
import applyToNestedStrings from 'apply-to-nested-strings'

let data = {
  name: 'Jane Doe',
  children: [
    name: 'Baby Doe',
    parents: {
      father: 'John Doe',
      mother: 'Jane Doe'
    }
  ]
}

data = applyToNestedStrings(data, (str) => {
  return str.toUpperCase()
})

/*
data = {
  name: 'JANE DOE',
  children: [{
    name: 'BABY DOE',
    parents: {
      father: 'JOHN DOE',
      mother: 'JANE DOE'
    }
  }]
}
*/
```