import xButton from './button.vue'

export default {
    title: 'Button',
    component: { xButton }
}

argTypes: {
    text: {
        control: { type: "text" }
    }
}

const templates = (args) => ({
    components: {xButton},
    data(): {
        return {args}
    },
    templates: `
        <xButton v-bind="args"></xButton>
    `
})

export const Default = template.bind(thisArg);

Default.args = {
    text: "Follow me"
}