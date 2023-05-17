function FillData() {
let requestURL =
"https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";

request.send();

request.onload = function () {
var currencyRate_json = request.response;
ShowCurrencyRate(currencyRate_json);

};


function ShowCurrencyRate(jsonObj) {

let section = document.querySelector("section");

let table = document.createElement ("table");
table.classList.add("table”, "table-bordered");
                    
let thead = document.createElement("thead");
thead.classList.add("thead-dark");

                    
let tr = document.createElement("tr");
tr.classList.add("text-center");

let t = document.createElement("th");
t.textContent = "Currency";

t.scope = "col";

tr.appendChild(t);
  
t = document.createElement("th");
t.textContent = "Buy";

t.scope = "col";
tr.appendChild(t);

t = document.createElement ("th");
t.textContent = "Sale";

t.scope = "col";
tr.appendChild(t);

thead.appendChild(tr);

table.appendChild(thead);



for (var i = 0; i < jsonobj.length; i++) {

tr = document.createElement("tr");
tr.classList.add("table-secondary”, "text-center");

t = document.createElement("th");
t.textContent = jsonobj[i].ccy + "-" + jsonObj[i].base_ccy;
t.scope = "row";

tr.appendChild(t);

t = document.createElement ("td");
t.textContent = jsonobj[i].buy;
tr.appendChild(t);

t = document.createElement ("td");
t.textContent = jsonobj[i].sale;
tr.appendChild(t);
table.appendChild(tr);
}
section.appendChild(table);
}

}
