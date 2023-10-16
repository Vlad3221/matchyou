import {Component, Vue} from "vue-facing-decorator";
import HeaderComponent from '@/components/Header/index.vue';
import FooterComponent from '@/components/Footer/index.vue';

@Component({
    name: 'app',
    components: {
        HeaderComponent,
        FooterComponent
    }
})

export default class app extends Vue{}