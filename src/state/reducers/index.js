import { combineReducers } from "redux";
import accountReducer from "./AccountReducer";
import notificationReducer from "./NotificationReducer";


const rootReducer = combineReducers({
    account: accountReducer,
    notifications: notificationReducer
})

export default rootReducer;