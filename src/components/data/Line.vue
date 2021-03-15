<script>
import { Line } from 'vue-chartjs'
export default {
    extends: Line,
    props: ["datachart"],
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