import {createStore} from 'redux'
import {BookdataReducer} from './../reducers/DashBoardReducers'
// store file

const store = createStore(BookdataReducer)

export default store