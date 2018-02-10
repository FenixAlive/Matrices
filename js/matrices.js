$(function(){
    $("#btn-calc").click(function(){
        var filas = [];
        var columnas = []
        var m = [];
        m[0] = $("#m1").val().split("|");
        m[1] = $("#m2").val().split("|");
        for(let h=0; h<2; h++){
            for(let i=0; i< m[h].length; i++){
            m[h][i] = m[h][i].split(" ");
                for(let j=0; j<m[h][i].length; j++){
                    if(m[h][i][j] == ""){
                        m[h][i].splice(j, 1);
                        j--;
                    }else{
                        m[h][i][j] = Number(m[h][i][j])
                    }
                }
                if(!columnas[h])
                    columnas[h] = m[h][i].length;
                else if(columnas[h] != m[h][i].length){
                    console.log("Error en la fila "+i+" matriz "+h);
                }
            }
            filas[h] = m[h].length
        }
        
        console.log("m1 ", m[0]);
        console.log("m2 ", m[1]);
        console.log(filas, columnas)
    })
})
