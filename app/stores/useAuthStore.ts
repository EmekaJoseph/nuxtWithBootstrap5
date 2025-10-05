import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", () => {

    const profileName = ref('Joseph')

    return {
        profileName
    }
})