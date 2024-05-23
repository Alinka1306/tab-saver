let myTabs = [];

const inputEl = document.getElementById("input-el");

const saveInputBtn = document.getElementById("input-btn");
const saveTabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabsFromLocalStorage = JSON.parse(localStorage.getItem("myTabs"));

if(tabsFromLocalStorage) {
    myTabs = tabsFromLocalStorage;
    render(myTabs);
}

saveInputBtn.addEventListener("click", function(){
    myTabs.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myTabs", JSON.stringify(myTabs));
    render(myTabs);
});

saveTabBtn.addEventListener("click", function(){
    // https://stackoverflow.com/questions/6132018/how-can-i-get-the-current-tab-url-for-chrome-extension
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myTabs.push(tabs[0].url);
        localStorage.setItem("myTabs", JSON.stringify(myTabs));
        render(myTabs);
    });
});

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myTabs = [];
    render(myTabs);
});

function render(tabs) {
    let listItems = "";
    for(let i = 0; i < tabs.length; i++) {
        listItems += `<li><a href='${tabs[i]}' target='_blank'>${tabs[i]}</a></li>`;
    }
    ulEl.innerHTML = listItems;
}
