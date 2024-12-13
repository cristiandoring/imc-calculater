function calculate(){
    let weight = document.getElementById('iweight').value;
    let height = document.getElementById('iheight').value;

    let result

    if(weight === "" || height === ""){
        response.innerHTML = `Write a weight and a height correct!`
        response.style.color = "red";
    }
    else if(weight < 0 || height < 0){
        response.innerHTML = `Write a weight and a height correct!`
        response.style.color = "red";
    }
    else{
        result = weight / ((height/100)**2)
        response.innerHTML = `The IMC is ${result.toFixed(2)}!` 
    }
}