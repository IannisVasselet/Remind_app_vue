<template>
    <div class="home">
        <h1>Bienvenue sur RA, la Remind App de vos rêves</h1>
        <p>
            Cette application vous permet de réviser des thèmes regroupés par catégorie à l'aide de la méthode de répétition espacée.
        </p>
        <div class="home-cta">
            <router-link to="/categories" class="home-cta-link">Découvrir les catégories</router-link>
            <router-link to="/themes" class="home-cta-link">Explorer les thèmes</router-link>
            <router-link to="/revision" class="home-cta-link">Commencer la révision</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<style scoped>
.home {
    text-align: center;
    padding: 2rem;
}

.home h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.home-cta {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.home-cta-link {
    background-color: #00009f;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    margin: 0.5rem;
    text-decoration: none;
    transition: background-color 0.3s;
}

.home-cta-link:hover {
    background-color: #1919cb;
}
</style>
