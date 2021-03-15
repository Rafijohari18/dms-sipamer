<script>
import { HorizontalBar } from 'vue-chartjs'
export default {
    extends: HorizontalBar,
    props: ["datachart"],
    type: 'horizontalBar',
    data: () => ({
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }),
    mounted(){
        this.renderChart(this.datachart,this.options)
    }
}
</script>