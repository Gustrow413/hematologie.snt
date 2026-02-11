let DATA;

fetch("data.json")
.then(r=>r.json())
.then(d=>{ DATA=d; });

function render(section,id){
 const table=document.getElementById(id);
 const arr=DATA[section];
 if(!arr || arr.length==0) return;

 table.innerHTML="";

 let headers=Object.keys(arr[0]);
 let tr=document.createElement("tr");

 headers.forEach(h=>{
   let th=document.createElement("th");
   th.textContent=h;
   tr.appendChild(th);
 });

 table.appendChild(tr);

 arr.forEach(row=>{
   let tr=document.createElement("tr");
   headers.forEach(h=>{
     let td=document.createElement("td");
     td.textContent=row[h];
     tr.appendChild(td);
   });
   table.appendChild(tr);
 });
}

function open(id){ document.getElementById(id).style.display="block"; }
function closeM(){ document.querySelectorAll(".modal").forEach(m=>m.style.display="none"); }

function addDon(){
 DATA.dons.push({
   Nom:donNom.value,
   Groupe:donGroup.value
 });
 render("dons","donsTable");
 closeM();
}

function addStock(){
 DATA.stocks.push({
   Groupe:stockG.value,
   Litres:stockL.value
 });
 render("stocks","stockTable");
 closeM();
}
