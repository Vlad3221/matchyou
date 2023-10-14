import {Component, Vue} from "vue-facing-decorator";
import HeaderComponent from '@/components/Header/index.vue';

@Component({
    name: 'app',
    components: {
        HeaderComponent
    }
})

export default class app extends Vue{}