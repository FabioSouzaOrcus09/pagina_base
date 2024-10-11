<template>
    <div class="contato">
      <h2>Contato</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="assunto">Assunto:</label>
          <select v-model="assunto" required>
            <option value="" disabled>Select um assunto</option>
            <option value="duvida">Dúvida</option>
            <option value="sugestao">Sugestão</option>
            <option value="reclamacao">Reclamação</option>
          </select>
        </div>
        <div class="form-group">
          <label for="mensagem">Mensagem:</label>
          <textarea v-model="mensagem" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContatoPage',
    data() {
      return {
        email: '',
        assunto: '',
        mensagem: ''
      };
    },
    methods: {
      submitForm() {
        alert('Formulário enviado!');
        this.email = '';
        this.assunto = '';
        this.mensagem = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .contato {
    max-width: 600px;
    margin: 0 auto;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input, select, textarea {
    width: 100%;
    padding: 8px;
  }
  button {
    margin-top: 10px;
    padding: 10px 15px;
  }
  </style>
  