<template lang="pug">
nav.navbar.navbar-expand-lg.navbar-light.bg-light
	.container
		.navbar-brand Webpont
		.language-selector
			select.form-select(v-model="locale")
				option(value="en") EN
				option(value="hu") HU
			// logout majd ide
			button.btn.btn-dark.btn-sm(v-if="false", @click="logout") {{ t('logout') }}
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t, locale } = useI18n();
const router = useRouter();

const logout = () => {
	localStorage.removeItem('token');
	router.push({ name: 'login' });
};
</script>

<style>
.navbar {
	margin-bottom: 40px;
}
.btn {
	margin-left: 10px;
}
</style>
