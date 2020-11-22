function suma(){
    const n1 = document.getElementById("num1").value;
    const n2 = document.getElementById("num2").value;
    if(n1==="" || n2===""){
         alert("Valores Vacios")
    }else if(isNaN(n1) || isNaN(n2)){
         alert("No son Numeros")
    }else{
         alert(parseInt(n1) + parseInt(n2));
    }
}
const btn = document.getElementById("btnSumar");
btn.addEventListener("click",suma); 
