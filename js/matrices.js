$(function(){
    //funcion para multiplicar matrices
    function multiplicarM(m, f, c){
        var t=0;
        var r=[[]];
        console.log("Matriz: ", m, f, c)
        for(let i=0; i<f[0]; i++){
            r[i]=[]
            for(let j=0; j<c[1]; j++){
                t=0;
                for(let k=0; k<f[1]; k++){
                    t += Number(m[0][i][k]) * Number(m[1][k][j]);
                }
                r[i][j] = t;
            }
        }
        var res = ""
        for(i=0; i<r.length; i++){
            res += '<div class="col s'+12+' center">'+'<div class="col s1">|</div>'
            for(j=0; j<r[i].length; j++){
                res += '<div class="col s2">'+r[i][j].toFixed(2)+'</div>';       
            }
            res += '<div class="col s1">|</div>'+"</div>"
        }
        console.log("Resultado ", r)
        return `<p>Matriz Resultado:</p> ${res}`
    }

    //separar texto y convertirlo a matriz
    $("#btn-calc").click(function(){
        $("#res").empty();
        var filas = [];
        var columnas = []
        var m = [];
        var nm = ["Primer", "Segunda"]
        m[0] = $("#m1").val().split("|");
        m[1] = $("#m2").val().split("|");
        for(let h=0; h<2; h++){
            for(let i=0; i< m[h].length; i++){
                if(!m[h][i] || m[h][i] == " "){
                    m[h].splice(i,1);
                    i--;
                }else{
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
                        $("#res").append("<p>En la "+nm[h]+" Matriz, la fila "+(i+1)+" no coincide en tamaño con su fila anterior.<br> (Todas las filas en la matriz deben tener el mismo numero de columnas.)</p><br>");
                        break;
                    }
                }

            }
            filas[h] = m[h].length
        }
        if(columnas[0] != filas[1]){
            $("#res").append("<p>El numero de columnas de la Primer Matriz no coincide con el numero de filas de la Segunda Matriz, no es posible realizar el calculo.</p><br>");
        }else{
            //Hacer la multiplicacion de matrices
            $("#res").html(multiplicarM(m, filas, columnas));
        } 
    })
})
