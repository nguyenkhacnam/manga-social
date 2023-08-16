import axios from "axios";
const baseRoute = "home";
const backendAxios = axios.create({
  baseURL: "http://14.225.7.221:7979",
});

const prodApis={
    index:()=>{
        return backendAxios.get()
    },
    // show:(id)=>{
    //     return backendAxios.get(baseRoute +"/"+id)
    // }
}
export default prodApis
