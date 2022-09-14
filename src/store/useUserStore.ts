import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useUserStore = defineStore('user', () => {
    const user = ref(null);
    const isLoggedIn = computed(() => !!user.value)
    const getUser = computed(() => user.value);
    const setUser = (data: any) => user.value = data;
    return { user, isLoggedIn, getUser, setUser }
});

export default useUserStore;