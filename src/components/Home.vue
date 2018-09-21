<template>
  <div id="home">
    <h1>{{ msg }}</h1>
    <button @click="getEmail()">get email</button>
    <h2>Email:{{ email }}</h2>
  </div>
</template>

<script>
  import auth from '../auth/auth'
    export default {
      name: "Home",
      data() {
          return{
            msg:'欢迎你登陆成功',
            email:''
          }
      },
      beforeCreate(){
        if (!auth.authenticated){
          this.$router.push('Login')
        }
      },
      methods:{
          getEmail(){
            this.$http.get('http://localhost:8080/user/getEmail',{
              Headers:auth.getAuthHeader()
            }).then(function (re) {
              this.email = re.bodyText
            },function () {
              console.log("get email error");
            })
          }
      }
    }
</script>

<style>
  h1,h2{
    font-weight: normal;
  }



</style>
