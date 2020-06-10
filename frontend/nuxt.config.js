
require("dotenv").config()

export default {
	mode: 'universal',
	loading: '~/components/Loading.vue',
	head: {
		titleTemplate: '%s - Mevn',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		]
	},
	css: [
		'@/assets/scss/main.scss'
	],
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/dotenv',
		'@nuxtjs/fontawesome',
		'bootstrap-vue/nuxt'
	],
	bootstrapVue: {
		bootstrapVue: {
			componentPlugins: [
				'LayoutPlugin',
				'FormPlugin',
				'FormCheckboxPlugin',
				'FormInputPlugin',
				'FormRadioPlugin',
				'ToastPlugin',
				'ModalPlugin'
			],
			directivePlugins: ['VBPopoverPlugin', 'VBTooltipPlugin', 'VBScrollspyPlugin']
		},
		bootstrapCSS: false,
		bootstrapVueCSS: false
	},
	axios: {
		baseURL: process.env.baseURL,
		retry: { retries: 3 }
	},
	fontawesome: {
		component: "fa",
		icons: {
			solid: true,
			brands: true
		}
	}
}
