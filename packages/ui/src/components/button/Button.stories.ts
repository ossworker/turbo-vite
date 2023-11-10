import type {Meta,StoryObj} from '@storybook/vue3'
import {action} from '@storybook/addon-actions'
import MyButton from './Button.Vue'
import {ButtonSizes} from './Button.model'

const meta: Meta<typeof MyButton> = {
    component: MyButton,
    title: 'Button',
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {
            control: 'color',
        },
        onClick:{},
        size: {
            options: [ButtonSizes.Small,ButtonSizes.Medium,ButtonSizes.Large],
            control: { type: 'select' },
        },
    }
}

export default meta

type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Button',
    },
};


export const Large: Story = {
    args: {
        size: 'large',
        label: 'Button',
    }
}

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
    }
}