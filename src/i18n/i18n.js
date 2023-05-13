import { createI18n } from 'vue-i18n';

const i18n = createI18n({
	legacy: false,
	locale: 'en',
	fallbackLocale: 'en',
	messages: {
		en: {
			name: 'Name',
			email: 'Email',
			password: 'Password',
			login: 'Login',
			logout: 'Logout',
			age: 'Age'
		},
		hu: {
			name: 'Név',
			email: 'E-mail',
			password: 'Jelszó',
			login: 'Bejelentkezés',
			logout: 'Kijelentkezés',
			age: 'Életkor'
		}
	}
});

export default i18n;
