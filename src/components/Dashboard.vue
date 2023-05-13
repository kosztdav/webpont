<template lang="pug">
.dashboard
	table.table
		thead
			tr
				th(scope="col") {{ t('name') }}
				th(scope="col") {{ t('email') }}
				th(scope="col") {{ t('age') }}
				th(scope="col") {{ t('password') }}
		tbody
			td {{ userData.name }}
			td {{ userData.email }}
			td {{ userData.age }}
			td {{ userData.password }}
	button.btn.btn-dark.btn-sm(@click="logout") {{ t('logout') }}
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useUserData } from '../composables/user-store';

const { t } = useI18n();
const router = useRouter();
const { userData } = useUserData();

const logout = () => {
	localStorage.removeItem('token');
	router.push({ name: 'login' });
};
</script>
