<template>
    <div class="login-container">
      <h2>تسجيل الدخول</h2>
      <form @submit.prevent="handleLogin">
        <label for="username">اسم المستخدم:</label>
        <input type="text" id="username" v-model="username" required />
  
        <label for="password">كلمة المرور:</label>
        <input type="password" id="password" v-model="password" required />
  
        <button type="submit">تسجيل الدخول</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        console.log('تسجيل الدخول مع:', this.username, this.password);
        alert(`تم تسجيل الدخول مع: ${this.username}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  