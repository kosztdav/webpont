import { ref } from 'vue';

const userData = ref(null);

export const useUserData = () => ({ userData });
