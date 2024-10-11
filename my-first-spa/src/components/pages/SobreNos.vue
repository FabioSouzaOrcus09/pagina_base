<template>
    <div>
      <p>Bem-vindo à nossa página! Nós somos uma equipe apaixonada por inovação e qualidade, dedicada a oferecer os melhores produtos e serviços aos nossos clientes. Com mais de uma década de experiência no mercado, acreditamos que cada detalhe faz a diferença. Nosso compromisso é com a sustentabilidade e a responsabilidade social, buscando sempre impactar positivamente a comunidade onde atuamos. Valorizamos a transparência e o relacionamento próximo, garantindo que você se sinta parte da nossa história. Nossa missão é superar suas expectativas, oferecendo soluções personalizadas que atendam às suas necessidades. Junte-se a nós nessa jornada e descubra o que podemos construir juntos!</p>
      <div class="team">
        <div v-for="member in teamMembers" :key="member.name" class="team-member">
          <img :src="member.image" alt="Imagem de {{ member.name }}" />
          <h3>{{ member.name }}</h3>
          <p>Idade: {{ member.age }}</p>
          <p>Frase preferida: "{{ member.favoriteQuote }}"</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SobreNos',
    data() {
      return {
        teamMembers: [
          {
            name: 'Fabio Andrade',
            age: 18,
            favoriteQuote: 'Quem pagou tá dormindo.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTww0HpznVjTs40G2z4SKD3pjY08Qv3q9YXDxql7B22qRqplhafOm4skb9XWi2zj2s1HKk&usqp=CAU'
          },
          {
            name: 'Thiago Felix',
            age: 20,
            favoriteQuote: 'Trabalhe enquanto eles dormem.',
            image: 'https://i.pinimg.com/originals/25/45/2c/25452c6e346661768db1cebfa2b05453.jpg'
          },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .team {
    display: flex;
    flex-wrap: wrap;
  }
  .team-member {
    margin: 10px;
    text-align: center;
  }
  .team-member img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  </style>
  