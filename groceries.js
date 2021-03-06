window.onload = loadCookieList;


//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var myList = [];

function addItem(){
  var input = document.getElementById("newItem").value;
/*  var list = document.getElementById("listDisplay");
  var item = document.createElement("li");
  var itemName = document.createTextNode(input);
  var btnClose = document.createElement("button");
  var iconClose = document.createElement("span");

  if (myList.indexOf(input) == -1 && input.length != 0){
    myList.push(input);
    console.log(myList);

    btnClose.classList.add("btn");
    btnClose.classList.add("btn-danger");
    btnClose.classList.add("btn-xs");

    iconClose.classList.add("glyphicon");
    iconClose.classList.add("glyphicon-remove");

    btnClose.addEventListener("click", removeParentListItem);
    btnClose.appendChild(iconClose);
    
    item.appendChild(itemName);
    item.appendChild(btnClose);
    
    list.appendChild(item);
    document.getElementById("newItem").value = "";
  }
*/
  displayItem(input);
}

function removeParentListItem(){
  var mom = this.parentNode;
  var grandma = mom.parentNode;

  var itemRemove = mom.firstChild;
  console.log(itemRemove);
  var itemIndex = myList.indexOf(itemRemove.textContent);
  myList.splice(itemIndex, 1);
  console.log(myList);
  grandma.removeChild(mom);
}

function saveList(){
  var addToCookie = myList.toString();
  setCookie("groceries", addToCookie, 2);
}

function clearList(){
  document.getElementById("listDisplay").innerHTML = "";
  var size = myList.length;
  for (var i = 0; i < size; i++){
    myList.pop();
  }
}

function displayItem(userInput){
  var list = document.getElementById("listDisplay");
  var item = document.createElement("li");
  var itemName = document.createTextNode(userInput);
  var btnClose = document.createElement("button");
  var iconClose = document.createElement("span");

  if (myList.indexOf(userInput) == -1 && userInput.length != 0){
    myList.push(userInput);
    console.log(myList);

    btnClose.classList.add("btn");
    btnClose.classList.add("btn-danger");
    btnClose.classList.add("btn-xs");

    iconClose.classList.add("glyphicon");
    iconClose.classList.add("glyphicon-remove");

    btnClose.addEventListener("click", removeParentListItem);
    btnClose.appendChild(iconClose);
    
    item.appendChild(itemName);
    item.appendChild(btnClose);
    
    list.appendChild(item);
    document.getElementById("newItem").value = "";
  }
}

function loadCookieList(){
  var groceries = getCookie("groceries");
  console.log(groceries);
  var arrayCookie = groceries.split(",");
  for (var i = 0; i < arrayCookie.length; i++){
    displayItem(arrayCookie[i]); 
  }
}
