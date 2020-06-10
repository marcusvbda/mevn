<template>
    <b-container>
        <b-row>
            <b-col cols="6">
                <logo />
            </b-col>
            <b-col cols="6">
                <nuxt-link to="/about" class="button--green">About</nuxt-link>
            </b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col cols="12">
                <b-button
                    variant="success"
                    @click="confirm"
                    v-b-popover.hover.top="'I am popover directive content!'"
                >
                    <fa icon="envelope" class="mr-2" />Click
                    <b-spinner type="grow" small class="ml-2" />
                </b-button>
            </b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col cols="12">
                <b-overlay :show="show">
                    <b-card title="Card">
                        <b-button
                            :disabled="show"
                            variant="primary"
                            @click="show = true"
                        >Show overlay</b-button>
                    </b-card>
                </b-overlay>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    components: {
        'logo': require('~/components/Logo.vue').default
    },
    head() {
        return {
            title: 'Home page',
            meta: [
                { hid: 'description', name: 'description', content: 'Home page description' }
            ]
        }
    },
    methods: {
        confirm() {
            this.$bvModal.msgBoxConfirm('Data was submitted successfully', {
                title: 'Please Confirm',
                size: 'sm',
                buttonSize: 'sm',
                okVariant: 'danger',
                okTitle: 'YES',
                cancelTitle: 'NO',
                footerClass: 'p-2',
                hideHeaderClose: false,
                centered: true
            }).then(value => {
                if (value) {
                    this.$bvToast.toast('Toast body content', {
                        title: `Toast asdas `,
                        variant: 'success',
                        solid: true
                    })
                }
            })
        }
    }
}
</script>