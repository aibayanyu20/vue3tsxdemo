import { defineComponent } from "vue"
import HelloWord from "./components/HelloWord";
import About from "./components/About";
export default defineComponent({
    setup(){
        return()=>{
            return(
                <div class={'test'}>
                    <HelloWord />
                    <About />
                </div>
            )
        }
    }
})
