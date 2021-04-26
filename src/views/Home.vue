<template>
  <div class="home">
    <div class="card centered">
      <div class="centered helper" v-if="regged == 0">
        <div class="header">Sign In or Sign Up</div>
        <div class="col mt-small">
          <input type="text" id="email" name="email" v-model="email" placeholder="email" class="field" />
          <input type="password" id="#password" name="password" v-model="password" placeholder="Password" class="mt-small field" />
          <button type="button" id="registerer" class="mt-small btn" v-on:click="register()">Register</button>
          <button type="button" id="loginer" class="mt-small btn" v-on:click="login()">Login</button>
        </div>
      </div>

      <div class="centered" v-if="regged == 1">
        <span class="header">You have been registered</span>
      </div>
      <div class="centered" v-if="regged == 2">
        <span class="header">You have been logged in</span>
      </div>
    </div>
    
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { auth } from '@/firebase'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      regged: 0,
      options: [],
      answ: '',
      userAnsw: '',
      text: '',
      email: '',
      final: '',
      password: '',
      quizName: '',
      finalResult: '',
      quizQuestions: {},
      quizlist: []
    };
  },
  methods: {
    async register() {
      auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        console.log(user);
        console.log(auth.currentUser.uid);
        this.regged = 1;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    },
    async login() {
      console.log(auth.currentUser.uid);
      auth.signInWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        console.log(user);
        console.log(auth.currentUser.uid);
        this.regged = 2;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    },
  }
}
</script>
