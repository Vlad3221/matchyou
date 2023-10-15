import {Component, Prop, Vue} from "vue-facing-decorator";

@Component({
    name: 'Card'
})

export default class Card extends Vue {
    @Prop()
    card_image!: string

    @Prop()
    card_title!: string

    @Prop()
    card_context!: string

    @Prop()
    card_title_bot?: string

    @Prop()
    card_context_bot?: string

    @Prop()
    card_price!: string

    @Prop({
        default: '/',
        required: false
    })
    card_link?: string
}