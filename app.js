const myApp = {
    data() {
        return {
            juegos: []
        }
    },
     mounted() {
        try{
            this.traerJuegos().then(res => {
                for (let i = 0; i < res.data.results.length; i++) {
                    this.juegos.push(res.data.results[i]);
                  }
            })
            console.log(this.juegos)
        }catch(error){
            console.log("Error fatal ", error)
        }
             
            
    },
    methods: {

        async traerJuegos() {
            try {
                return await axios("https://api.rawg.io/api/games?key=aa2e1c5b1fdf46ada9240e4ab295ee9a")
            } catch (error) {
                console.log("Error fatal ", error)
                return undefined
            }
        }
    }
}

Vue.createApp(myApp).mount("#myApp")
