<template>
    <div class="container">
        <div class="min-vh-100 d-flex justify-content-center align-items-center">
            <div class="col-lg-4 col-md-7">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <img class="float-end" width="20" src="/img/stadium2.jpg" alt="Discover Nuxt"></img>
                    </div>
                    <div class="card-body">

                        <form @submit.prevent="login" id="myForm" class="row g-3">
                            <div class="col-12">
                                <div class="form-label">Email</div>
                                <input v-model="email" id="email" class="form-control" type="email">
                            </div>

                            <div class="col-12">
                                <div class="form-label">Password</div>
                                <input v-model="password" id="password" class="form-control " type="password">
                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn btn-primary w-100">
                                    SIGN IN
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center bg-transparent border-0">
                        <nuxt-link to="/">
                            Go to Home
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


const email = ref<string>('')
const password = ref<string>('')
const router = useRouter()


function login() {
    if (!email.value || !password.value) {
        alert('Please complete all fields')
        return;
    }

    router.push({ path: '/account/dashboard' })

}

</script>