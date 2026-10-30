//your JS code here. If required.
let btn=document.getElementById("sum_btn")
btn.addEventListener("click",calculateSum)

function calculateSum()
{
	let num1=document.getElementById("n1").value
	let num2= document.getElementById("n2").value
	let sum=document.getElementById("sum")
	sum.innerText=Number(num1)+Number(num2)
}