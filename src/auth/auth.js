/**完成token的存取**/
const SERVER_URL = 'http://localhost:8080/'
const LOGIN_URL = SERVER_URL + 'login2'

export default {
  data:{
    authenticated:false
  },
  login(context,info){
    context.$http.post(LOGIN_URL,info).then(function (data) {
      console.log(data.bodyText)
      localStorage.setItem('token',data.bodyText);
      this.authenticated = true
      //跳转到home页面
      this.$router.push('Home')
    },function (error) {
      console.log(error+','+error.body.message)
    })
  },
  getAuthHeader(){
    return{
      'Authorization':'Bearer '+localStorage.getItem('token')
    }
  },
  checkAuth(){
    var token = localStorage.getItem('token')
    if (token){
      this.authenticated = true
    } else{
      this.authenticated = false
    }
  }
}
