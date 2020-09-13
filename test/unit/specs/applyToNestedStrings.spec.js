import applyToNestedStrings from '@/applyToNestedStrings'

test('Should exists', () => {
  expect(applyToNestedStrings).toBeTruthy()
})

test('Should set all strings to uppercase letters', () => {
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

test('Should keep numbers unchanged', () => {
  const callback = str => `Jane sais ${str}`

  expect(applyToNestedStrings(1, callback)).toEqual(1)
  expect(applyToNestedStrings({
    a: 1
  }, callback)).toEqual({
    a: 1
  })

  expect(applyToNestedStrings({
    a: {
      b: 2,
      c: {
        d: 4,
        e: [5, 6, 7],
      },
    },
  }, callback)).toEqual({
    a: {
      b: 2,
      c: {
        d: 4,
        e: [5, 6, 7],
      },
    },
  })
})

test('Should keep booleans unchanged', () => {
  const callback = str => `Jane sais ${str}`

  expect(applyToNestedStrings(1, callback)).toEqual(1)
  expect(applyToNestedStrings({
    a: false
  }, callback)).toEqual({
    a: false
  })

  expect(applyToNestedStrings({
    a: {
      b: true,
      c: {
        d: false,
        e: [true, true],
      },
    },
  }, callback)).toEqual({
    a: {
      b: true,
      c: {
        d: false,
        e: [true, true],
      },
    },
  })
})