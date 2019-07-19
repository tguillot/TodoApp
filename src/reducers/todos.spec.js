import todos from './todos'

/*checks reducers behaviourse for each one */

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        text: 'Run the tests',
        id: 0
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        urgent: false,
        deleted: false,
        id: 0
      }
    ])

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          urgent: false,
          deleted: false,
          id: 0
        }
      ], {
        type: 'ADD_TODO',
        text: 'Use Redux',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        urgent: false,
        deleted: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        urgent: false,
        deleted: false,
        id: 1
      }
    ])

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          urgent: false,
          deleted: false,
          id: 0
        }, {
          text: 'Use Redux',
          completed: false,
          urgent: false,
          deleted: false,
          id: 1
        }
      ], {
        type: 'ADD_TODO',
        text: 'Fix the tests',
        id: 2
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        urgent: false,
        deleted: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        urgent: false,
        deleted: false,
        id: 1
      }, {
        text: 'Fix the tests',
        completed: false,
        urgent: false,
        deleted: false,
        id: 2
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          urgent: false,
          deleted: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          urgent: false,
          deleted: false,
          id: 0
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        urgent: false,
        deleted: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        urgent: false,
        deleted: false,
        id: 0
      }
    ])
  })

  it('should handle MAKE_URGENT', () => {
    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          urgent: false,
          deleted: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          urgent: false,
          deleted: false,
          id: 0
        }
      ], {
        type: 'MAKE_URGENT',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        urgent: true,
        deleted: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        urgent: false,
        deleted: false,
        id: 0
      }
    ])
  })

  it('should handle DELETE_TODO', () => {
    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          urgent: false,
          deleted: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          urgent: false,
          deleted: false,
          id: 0
        }
      ], {
        type: 'DELETE_TODO',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        urgent: false,
        deleted: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        urgent: false,
        deleted: false,
        id: 0
      }
    ])
  })
})
