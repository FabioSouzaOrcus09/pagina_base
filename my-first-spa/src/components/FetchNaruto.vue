<template>
    <div class="container">
        <div class="row">
            <!-- Loading de info -->
            <div v-if="load" class="col-12 text-center">
                <p>Carregando...</p>
            </div>
            <!-- Error se a api nn funfar -->
            <div v-else-if="error" class="col-12 text-center">
                <p>Ops, algum erro aconteceu</p>
            </div>
            <!--  list de characters -->
            <div v-else v-for="character in characters" :key="character.id" class="col-md-4">
                <div class="card mb-4">
                    <img :src="character.images[0]" class="card-img-top" alt="Imagem do personagem">
                    <div class="card-body">
                        <h5 class="card-title">{{ character.name }}</h5>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Jutsu
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li v-for="jutsu in jutsus" :key="jutsu.id">
                                    <a class="dropdown-item" href="#">{{ jutsu.name[0] }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            characters: [],
            jutsus: [],
            load: true,
            error: false,
        };
    },

    methods: {
        fetchNaruto() {
            fetch('https://dattebayo-api.onrender.com/characters')
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network error");
                    }
                    return response.json();
                })
                .then(data => {
                    this.characters = data.characters;
                    this.jutsus = data.jutsu;
                    this.load = false;
                })
                .catch(() => {
                    this.error = true;
                    this.load = false;
                });
        }
    },

    mounted() {
        this.fetchNaruto();
    }
}
</script>

<style>
</style>
