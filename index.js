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
function closeElements() {
  // Get all elements with the class "close"
  var closeElements = document.getElementsByClassName("close");

  // Loop through all the close elements
  for (var i = 0; i < closeElements.length; i++) {
    // Add a click event listener to the element
    closeElements[i].addEventListener("click", function() {
      // Set the display style of the element to "none"
      this.style.display = "none";
    });
  }
}
closeElements();
//this is all the failed things before using chatgp
  // var non= document.getElementsByClassName("close");
  // var k;
  // for (k=0 ;k< non.length;k++){
  //   document.getElementsByClassName("close")[k].addEventListener('click',()=>{
  //     console.log("nope");
  //     document.getElementsByClassName("close")[k].style.display = "none";
  //   })  
  //   }

// Click on a close button to hide the current list item(doesn't work)
// function call(){
//   var non= document.getElementsByClassName("close")
// var k;
// for (k=0 ;k< non.length;k++){
//   non[k].addEventListener('click',()=>{
//     console.log("nope");
//     non.style.display = "none";
//   }) 
    //try2
// var non= document.querySelectorAll(".close");
// var k;
// non.forEach(close=>{
// close.addEventListener('click',function handleClick(event){
  
//   close.setAttribute("style", 'display:none;')
//   console.log("close")
// })
 

// })


 


