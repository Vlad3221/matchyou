import {Component, Vue} from "vue-facing-decorator";
import AboutTelephone from "@/components/AboutTelephone/index.vue";
import RequestACall from "@/components/RequestACall/index.vue";

@Component({
    name: 'HeaderComponent',
    components: {
        AboutTelephone,
        RequestACall
    }
})

export default class HeaderComponent extends Vue{}