import {Component, Prop, Vue} from "vue-facing-decorator";

@Component({
    name: 'RequestACall'
})

export default class RequestACall extends Vue {
    @Prop({required: true})
    text!: string

    @Prop({required: false, default: 'default'})
    styl?: string
}