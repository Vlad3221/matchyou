import {Component, Prop, Vue} from "vue-facing-decorator";

@Component({
    name: 'NavigationsBlockButtonBordered'
})

export default class NavigationsBlockButtonBordered extends Vue {
    @Prop()
    text!: string
}