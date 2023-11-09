import type {Meta,StoryObj} from '@storybook/vue3'
import {action} from '@storybook/addon-actions'
import IconCamera from '../icon/Camera.vue'
import Button from './Button.Vue'
import { ButtonIconSizes, ButtonTypes} from './Button.model'

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Button',
    tags: ['autodocs'],
    args: {
        type: 'primary',
        text: 'test',
        icon: false,
        iconSize: ButtonIconSizes.Normal,
        disabled: false,
        loading: false,
    },
    argTypes: {
        type: {
            options: [ButtonTypes.Primary,ButtonTypes.Secondary,ButtonTypes.Tertiary,ButtonTypes.Quaternary],
            control: { type: 'select' },
        },
        iconSize: {
            options: [ButtonIconSizes.Normal, ButtonIconSizes.Small],
            control: { type: 'select' },
        },
    },
    render: (args: any) => ({
        components: { Button, IconCamera },
        setup() {
            const click = action('click')
            return { args, click }
        },
        template: '<Button v-bind="args" @click="click"><template v-if="args.icon" #icon><IconCamera /></template>{{ args.text }}</Button>',
    })
}

export default meta

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        type: ButtonTypes.Primary,
        prefix: 'Primary',
    }
}

export const Secondary: Story = {
    args: {
        type: ButtonTypes.Secondary,
        prefix: 'Secondary',
    }
}

export const Tertiary: Story = {
    args: {
        type: ButtonTypes.Tertiary,
        prefix: 'Tertiary',
    }
}

export const Quaternary: Story = {
    args: {
        type: ButtonTypes.Quaternary,
        prefix: 'Quaternary',
    }
}