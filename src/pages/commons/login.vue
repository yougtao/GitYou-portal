<template>
  <div>
    <div>
      <img src="" alt="">
    </div>
    <div class="content-main">
      <h2>Sign in to GitYou</h2>
      <div class="login-card">
        <form action="#">
          <label>Username or email address</label>
          <input type="text" v-model="user.username" placeholder=""/>
          <label>Password <a @click="resetPassword" href="javascript:void(0)">Forget password?</a></label>
          <input type="password" v-model="user.password"/>
          <button @click="login">Sign in</button>
        </form>
      </div>
      <div class="content-logup">
        <p>New to GitHub? <a href="javascript:void(0)">Create an account.</a></p>
      </div>
    
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      backPath: ''  // 记录上一个url
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm._data.backPath = from.path
    })
  },
  methods: {
    resetPassword() {
      console.log('密码重置')
    },
    login() {
      this.$http.post('/user/auth/login', this.user).then(({data}) => {
        this.$message.success({message: '登录成功了', duration: 1200})
        const user = data.data
        if (this.backPath === '' || this.backPath === '/')
          this.$router.push({
            name: 'user_home',
            params: {username: user.username}
          })
        else
          this.$router.push(this.backPath)
      }).catch(({data}) => {
        console.log(data)
        this.$message.error('登录失败')
      })
    }
  }
}
</script>

<style scoped>
a {
  text-decoration-line: none;
  font-size: 14px;
  color: #0366d6;
}

.content-main {
  margin: 0 auto;
  max-width: 300px;
}

.content-main h2 {
  font-size: 24px;
  font-weight: 500;
}

.login-card {
  border: 1px solid #d8dee2;
  border-radius: 5px;
  padding: 20px;
  text-align: left;
}

.login-card label {
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  color: #24292e;
}

.login-card a {
  float: right;
  font-size: 12px;
}

.login-card input {
  margin: 5px 0 15px 0;
  border: 1px solid #d8dee2;
  border-radius: 3px;
  padding: 6px 8px;
  display: block;
  background-color: #e8f0fe;
  width: 240px;
  line-height: 20px;
}

.login-card button {
  display: block;
  border-width: 0;
  border-radius: 3px;
  padding: 6px 12px;
  width: 100%;
  background-color: #28a745;
  background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
  color: #ffffff;
  line-height: 20px;
  font-weight: 600;
}

/* 下面的框*/
.content-logup {
  margin: 16px 0 10px;
  border: 1px solid #d8dee2;
  border-radius: 3px;
}

.content-logup {
  font-weight: 500;
}
</style>