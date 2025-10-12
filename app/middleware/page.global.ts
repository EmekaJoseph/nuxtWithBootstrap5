export default defineNuxtRouteMiddleware((to, from) => {


    console.log(to);

    if (to.matched.length === 0) {
        throw createError({
            statusCode: 404,
            statusMessage: `Page ${to.path} not found`
        })
    }





    const store = useAuthStore()
    //####  Runs on every route
    // return abortNavigation('Page is blocked')
    // return navigateTo('/')


    // console.log('Global middleware:', to.path, from.path)

})