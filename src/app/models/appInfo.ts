export class ApInfo{
    static localInfo = {
        userInfo: '__user_info',
        lottoers: '__lottoers',
        images: '__images',
    }
    static url = {
        login: '/api/auth', // 登录 post
        getUserInfo: '/api/info', // 获取用户信息 get ?api_token
        banner: '/api/getBanner',  // 获取图片信息 get ?api_token
        lotteries: '/api/lotteries', //获取所有彩种 get ?api_token
    }
}