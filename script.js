function add()
{
var a,b,c; //membuat variabel
a=Number(document.getElementById("sisi1").value); //input sisi1
b=Number(document.getElementById("sisi2").value); //input sisi2
c=Number(document.getElementById("sisi3").value); //input sisi3
document.getElementById("keliling").innerHTML = a+b+c ;
}

function multiplyBy() 
{
    num1 = document.getElementById("alas").value;//input alas
    num2 = document.getElementById("tinggi").value;//input tinggi
    document.getElementById("luas").innerHTML = ((num1 * num2)/2) ;
}
