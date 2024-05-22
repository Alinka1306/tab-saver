let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");

const saveInputBtn = document.getElementById("input-btn");
const saveTabBtn = document.getElementById("input-tab-btn");
const ulEl = document.getElementById("ul-el");

saveInputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
});
// saveTabBtn.addEventListener("click", function(){
//     myLeads.push(saveTabBtn);
//     console.log(myLeads);
// });

for(let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}