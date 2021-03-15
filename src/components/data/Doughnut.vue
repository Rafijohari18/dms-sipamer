<script>
import { Doughnut } from 'vue-chartjs'
export default {
    extends: Doughnut,
    props: ["datachart","options"],
    
    mounted(){
        this.renderChart(this.datachart, {
            borderWidth: "10px",
            hoverBackgroundColor: "red",
            hoverBorderWidth: "10px"
        });
    }
}
</script>