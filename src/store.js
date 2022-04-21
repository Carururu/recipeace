import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userSignUpReducer } from './reducers/userReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userSignUp: userSignUpReducer,
})

const currentUserFromStorage = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : {}

const initialState = {
  userLogin: { currentUser: currentUserFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
