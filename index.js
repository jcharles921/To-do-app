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

    var span = document.createElement("SPAN");
    span.className = "close";

    add.appendChild(text);

    //append the span to the li
    add.appendChild(span);
    if (todo === '') {
        console.log("You must write something!");
        } else {
        document.getElementById("list").appendChild(add);
    }
    document.getElementById('add-todo').value="";
    

}

// Click on a close button to hide the current list item(doesn't work)
/*
var non = document.getElementsByClassName("close");
var k;
for (k=0 ;k< non.length,k++){
  non[k] .onclick = function() {
    
    console.log("nope");
    var con = this.parentElement;
    con.style.display = "none";
  }
}
*/
 


