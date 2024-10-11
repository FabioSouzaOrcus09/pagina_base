<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="senha">Senha:</label>
          <input type="password" v-model="senha" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage', 
    data() {
      return {
        email: '',
        senha: ''
      };
    },
    methods: {
      login() {
        alert('Login realizado!');
        this.email = '';
        this.senha = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
  }
  button {
    margin-top: 10px;
    padding: 10px 15px;
  }
  </style>
  