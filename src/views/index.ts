import {Component, Vue} from "vue-facing-decorator";
import Card from "@/components/Card/index.vue";
import NavigationsBlockButtonBordered from "@/components/NavigationsBlockButtonBordered/index.vue";

@Component({
    name: 'Home',
    components: {
        Card,
        NavigationsBlockButtonBordered
    }
})

export default class Home extends Vue {}