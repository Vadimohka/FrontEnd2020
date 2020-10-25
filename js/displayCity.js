function displayCity(city){
    let displayed = false;
    if(displayed){
        displayed=false;
    }
    else{
        displayed=true;
        if(city==="BrestCity"){
            document.getElementById('Brest').style.display = "block";
            document.getElementById('Vitebsk').style.display = "none";
            document.getElementById('Mogilev').style.display = "none";
            document.getElementById('Minsk').style.display = "none";
            document.getElementById('Grodno').style.display = "none";
            document.getElementById('Gomel').style.display = "none";
            document.getElementById('Minskaya').style.display = "none";
        }
        else if(city==="VitebskCity"){
            document.getElementById('Brest').style.display = "none";
            document.getElementById('Vitebsk').style.display = "block";
            document.getElementById('Mogilev').style.display = "none";
            document.getElementById('Minsk').style.display = "none";
            document.getElementById('Grodno').style.display = "none";
            document.getElementById('Gomel').style.display = "none";
            document.getElementById('Minskaya').style.display = "none";
        }
        else if(city==="MogilevCity"){
            document.getElementById('Brest').style.display = "none";
            document.getElementById('Vitebsk').style.display = "none";
            document.getElementById('Mogilev').style.display = "block";
            document.getElementById('Minsk').style.display = "none";
            document.getElementById('Grodno').style.display = "none";
            document.getElementById('Gomel').style.display = "none";
            document.getElementById('Minskaya').style.display = "none";
        }
        else if(city==="MinskCity"){
            document.getElementById('Brest').style.display = "none";
            document.getElementById('Vitebsk').style.display = "none";
            document.getElementById('Mogilev').style.display = "none";
            document.getElementById('Minsk').style.display = "block";
            document.getElementById('Grodno').style.display = "none";
            document.getElementById('Gomel').style.display = "none";
            document.getElementById('Minskaya').style.display = "none";
        }
        else if(city==="GrodnoCity"){
            document.getElementById('Brest').style.display = "none";
            document.getElementById('Vitebsk').style.display = "none";
            document.getElementById('Mogilev').style.display = "none";
            document.getElementById('Minsk').style.display = "none";
            document.getElementById('Grodno').style.display = "block";
            document.getElementById('Gomel').style.display = "none";
            document.getElementById('Minskaya').style.display = "none";
        }
        else if(city==="GomelCity"){
            document.getElementById('Brest').style.display = "none";
            document.getElementById('Vitebsk').style.display = "none";
            document.getElementById('Mogilev').style.display = "none";
            document.getElementById('Minsk').style.display = "none";
            document.getElementById('Grodno').style.display = "none";
            document.getElementById('Gomel').style.display = "block";
            document.getElementById('Minskaya').style.display = "none";
        }
        else if(city==="MinskayaObl"){
            document.getElementById('Brest').style.display = "none";
            document.getElementById('Vitebsk').style.display = "none";
            document.getElementById('Mogilev').style.display = "none";
            document.getElementById('Minsk').style.display = "none";
            document.getElementById('Grodno').style.display = "none";
            document.getElementById('Gomel').style.display = "none";
            document.getElementById('Minskaya').style.display = "block";
        }
    }
}