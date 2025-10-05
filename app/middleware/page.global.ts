export default defineNuxtRouteMiddleware((to, from) => {

    const store = useAuthStore()
    //####  Runs on every route
    // return abortNavigation('Page is blocked')
    // return navigateTo('/')


    // console.log('Global middleware:', to.path, from.path)

})