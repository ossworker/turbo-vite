import {defineStore} from 'pinia'

// type TCode = 'mr' | 'mrs' | 'mx'

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '张三',
        age: 21,
    }),
    getters: {
        getName(): string {
            return `${this.name}`
        },
    },
    actions: {
        setName(name: string) {
            this.name = name;
        }
    }
})