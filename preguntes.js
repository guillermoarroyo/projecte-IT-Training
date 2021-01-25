function paginaseguent(){
    switch(numPreg){
        case 0:
        obj = document.getElementById("pregunta-1");
        obj.classlist.remove("elementvisible");
        obj.classlist.add("elementocult");
    
        obj = document.getElementById("pregunta-2"); 
        obj.classlist.remove("elementocult");
        obj.classlist.add("elementvisible");
        case 1:
            alert("hola !");
    
    }
}