const distance=document.querySelector("#tripDistance");
const fuelEfficiency=document.querySelector("#fuelEfficiency");
 const fuelCost=document.querySelector("#fuelCost");
const btnEl=document.querySelector("button");
btnEl.addEventListener('click',()=>{
    const result=(distance.value/fuelEfficiency.value)*fuelCost.value;
    alert(result);
})