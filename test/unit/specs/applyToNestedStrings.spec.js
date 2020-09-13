import applyToNestedStrings from '@/applyToNestedStrings'

test('Module exists', () => {
  expect(applyToNestedStrings).toBeTruthy()
})

test('Module plays pong', () => {
  const data = {
    name: 'Jane Doe',
    children: [{
      name: 'Baby Doe',
      parents: {
        father: 'John Doe',
        mother: 'Jane Doe'
      }
    }]
  }
  const callback = str => str.toUpperCase()

  expect(applyToNestedStrings(data, callback)).toEqual({
    name: 'JANE DOE',
    children: [{
      name: 'BABY DOE',
      parents: {
        father: 'JOHN DOE',
        mother: 'JANE DOE'
      }
    }]
  })
})
