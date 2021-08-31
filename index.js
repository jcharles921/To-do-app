function darkmode(){
    document.body.classList.toggle('darkmode');
    
      var img = document.getElementById('image').src;
      if (img.indexOf('icon-moon.svg')!=-1) {
          document.getElementById('image').src  = './images/icon-sun.svg';
      }
       else {
         document.getElementById('image').src = './images/icon-moon.svg';
     }

  
    
}

    // most of the following code were obtained from w3school and many don't work at all;


var span = document.createElement("SPAN");

function add_list(){
  //adding new elements
    var add = document.createElement("li");
    var todo =document.getElementById('add-todo').value;
    var text = document.createTextNode(todo);
    add.appendChild(text);
    if (todo === '') {
        console.log("You must write something!");
        } else {
        document.getElementById("list").appendChild(add);
    }
    document.getElementById('add-todo').value="";
    

  
  // adding an icon to each element (doesn't work)
  var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createElement("img");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


}
// Click on a close button to hide the current list item(doesn't work)
var non = document.getElementsByClassName("close");
var i;

  close.onclick = function() {
    document.querySelector('span')="";
    console.log("nope");
    var div = this.parentElement;
    non.style.display = "none";
  }


