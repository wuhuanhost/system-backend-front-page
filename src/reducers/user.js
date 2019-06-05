const user = (state = { isLogin: false }, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_LOGGED_USER":
            return {
                ...state,
                isLogin: action.user.isLogin
            };
        default:
            return state;
    }
};
export default user;
