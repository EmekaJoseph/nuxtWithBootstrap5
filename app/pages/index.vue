<template>
    <div class="min-vh-100 main-bg">
        <div class="container ">
            <div class="min-vh-100 d-flex justify-content-center align-items-center">
                <!-- <img width="20" src="~/assets/images/stadium.jpg" alt="Discover Nuxt"> -->
                <nuxt-link class="btn btn-danger" to="/account/login">
                    LOGIN
                </nuxt-link>

            </div>
        </div>
    </div>
</template>

<style scoped>
.main-bg {
    background: url('~/assets/images/stadium.jpg') center/cover no-repeat;
    position: relative;
}


.main-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.578);
    /* Black with 50% opacity */
    backdrop-filter: blur(1px);
    /* Blur effect */
    z-index: 1;
}

.main-bg>* {
    position: relative;
    z-index: 2;
}
</style>