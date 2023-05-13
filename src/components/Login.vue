<template lang="pug">
.container
	form(@submit.prevent="login")
		.form-group
			label(for="email") {{ t('email') }}
			input#email.form-control(v-model="email", type="email")
		.form-group
			label(for="password") {{ t('password') }}
			input#password.form-control(v-model="password", type="password")
		.form-group
			button.btn.btn-primary(type="submit") {{ t('login') }}
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useUserData } from '../composables/user-store';

const email = ref(null);
const password = ref(null);

const { t } = useI18n();
const router = useRouter();
const { userData } = useUserData();

const login = () => {
	localStorage.setItem('token', 'SpjcYz8xQyY7w9Jz-DRU');
	userData.value = {
		email,
		password,
		name: 'Proba Proba',
		age: 26
	};
	router.push({ name: 'dashboard' });
};
</script>
