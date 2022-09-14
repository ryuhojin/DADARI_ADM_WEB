import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useAppState = defineStore('app', () => {
    const title = ref('');
    const getTitle = computed(() => title.value);
    const setTitle = (text: string) => title.value = text;
    return { title, getTitle, setTitle }
});

export default useAppState;