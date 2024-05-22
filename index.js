let myTabs = [];

const inputEl = document.getElementById("input-el");

const saveInputBtn = document.getElementById("input-btn");
const saveTabBtn = document.getElementById("input-tab-btn");
const ulEl = document.getElementById("ul-el");

localStorage.clear();
let tabsFromLocalStorage = JSON.parse(localStorage.getItem("myTabs"));
console.log(tabsFromLocalStorage);

saveInputBtn.addEventListener("click", function(){
    myTabs.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myTabs", JSON.stringify(myTabs));
    renderTabs();
    console.log(localStorage.getItem("myTabs"));
});
// saveTabBtn.addEventListener("click", function(){
//     myTabs.push(saveTabBtn);
//     console.log(myTabs);
// });

function renderTabs() {
    let listItems = "";
    for(let i = 0; i < myTabs.length; i++) {
        listItems += `<li><a href='${myTabs[i]}' target='_blank'>${myTabs[i]}</a></li>`;
    }
    ulEl.innerHTML = listItems;
}
