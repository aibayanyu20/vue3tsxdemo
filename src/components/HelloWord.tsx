import {defineComponent} from "vue";
import { createUseStyles } from "vue-jss"
const useStyles = createUseStyles({
    info:{
        width:'100px',
        height:'100px',
        background:'#999'
    }
})
export default defineComponent({
    setup(){
        const classes = useStyles()
        return () =>{
            return(
                <div>
                    <span class={classes.value.info}>测试</span>
                </div>
            )
        }
    }
})
