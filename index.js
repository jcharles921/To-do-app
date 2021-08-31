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
    

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
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
//checked (doesn't work )
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
    document.body.classList.toggle('checked');
    console.log("nothing")
  }
}, false);
}

