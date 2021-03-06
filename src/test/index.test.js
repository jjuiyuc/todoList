import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from '../actions'
import * as types from '../actions/actionType'

import reducer from '../reducers'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('addTodo', () => {
  // 每一次測試後清除 fetchMock 的紀錄
  afterEach(() => {
    fetchMock.restore()
  })

  //測試新增
  // test('test actions addTodo', () => {
  //   const newTodoItem = []
  //   const expectAction = {
  //     type: types.ADD_TODO,
  //     payload: newTodoItem,
  //   }
  //   expect(actions.addTodo(newTodoItem)).toEqual(expectAction)
  // })
  test('test actions addTodo', () => {
    const newToDo = []
    const expectAction = {
      type: types.ADD_TODO,
      payload: newToDo,
    }
    expect(actions.addTodo(newToDo)).toEqual(expectAction)
  })
  // test('test actions addTodo', () => {
  //   const test = 'newTodoItem'
  //   const expectAction = {
  //     type: types.ADD_TODO,
  //     payload: test,
  //   }
  //   expect(actions.addTodo(test)).toEqual(expectAction)
  // })

  // test('test actions addTodo', (newTodoItem) => {
  //   const expectAction = {
  //     type: types.ADD_TODO,
  //     payload: newTodoItem,
  //   }
  //   expect(actions.addTodo(newTodoItem)).toEqual(expectAction)
  // })

  // test('get count dispatch of action', () => {
  //   // fetchMock 與 fetchCount() 內的請求網址相同
  //   fetchMock.getOnce('http://example.com/count', {
  //     body: { count: 3 },
  //   })

  //   // 創建 store
  //   const store = mockStore({ count: 0 })

  //   // 使用 store 用 fetchCount() 觸發 dispatch
  //   return store.dispatch(actions.fetchCount()).then(() => {
  //     // 這裡可以看到 dispatch 觸發了哪些事件
  //     console.log(store.getActions())
  //   })
  // })

  // //////reducer jest

  // test('test reducer', () => {
  //   // 確認初始資料
  //   const initialData = { count: 0, request: false }
  //   expect(reducer(undefined, {})).toEqual(initialData)

  //   // 傳入初始值及 addCounter ：
  //   // 確認回傳的 object count 是否正確 + 1
  //   expect(reducer(initialData, actions.addCounter())).toEqual({
  //     count: 1,
  //     request: false,
  //   })

  //   // 傳入初始值及 fetchCountRequest ：
  //   // 確認回傳的內容 request 是否變成 true
  //   expect(reducer(initialData, actions.fetchCountRequest())).toEqual({
  //     count: 0,
  //     request: true,
  //   })

  //   // 傳入初始值及 fetchCountSuccess ：
  //   // 確認回傳的內容 count 是否如 response 的 count 相同
  //   expect(
  //     reducer(initialData, actions.fetchCountSuccess({ count: 2 }))
  //   ).toEqual({
  //     count: 2,
  //     request: false,
  //   })
  // })
})
