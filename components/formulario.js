import tabla from "./tabla.js"
export default{
    name: document.querySelector("#myFormulario"),
    data: [],
    listDataAll(){
        this.name.addEventListener("submit", (e)=>{
            this.data.push(Object.fromEntries(new FormData(e.target)));
            this.name.reset() 
            e.preventDefault();
            tabla.Solucion()
            this.data = []
        })
    },

}