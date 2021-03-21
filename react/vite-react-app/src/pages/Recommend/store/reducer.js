
let defaultState = {
    bannerList: []
}
// reduce
// 静态页面 
export default (state = defaultState, action) => {
    console.log('???...',action)
    switch(action.type) {
        case "CHANGE_BANNER":
            // return state.bannerList = action.data
            return {
                ...state,
                bannerList: action.data
            }
        default:
            return state
    }
}