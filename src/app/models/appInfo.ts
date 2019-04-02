export class ApInfo{
    static localInfo = {
        userInfo:'user_info'
    }
    static url = {
        login: '/api/auth', //登录 post
        getUserInfo: '/api/info' //获取用户信息 get ?api_token
    }
}