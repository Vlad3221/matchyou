import {Component, Vue} from "vue-facing-decorator";
import AboutTelephone from "@/components/AboutTelephone/index.vue";
import RequestACall from "@/components/RequestACall/index.vue";

@Component({
    name: 'FooterComponent',
    components: {
        AboutTelephone,
        RequestACall
    }
})

export default class FooterComponent extends Vue {}