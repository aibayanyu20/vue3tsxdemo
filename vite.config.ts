import { UserConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
export default ():UserConfig =>{
    return {
        plugins:[vue(),vueJsx()],
        css:{
            preprocessorOptions:{
                less:{
                    javascriptEnabled:true
                }
            }
        },
    }
}
