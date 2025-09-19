
import { createApp, } from 'vue'
import './style.css'

const Test1 = {
    template: `<p>{{ param1 }}</p>`,
    data() {
        return {
            param1: 'param1'
        }
    },
    methods: {
        method1() {
            console.log('this is method1')
        }
    }

}
const vm = createApp(Test1);

const app = vm.mount('#app')
console.log(app)
