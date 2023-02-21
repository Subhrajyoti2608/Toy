AFRAME.registerComponent("marker-handler",{
init: async function(){
this.el.addEventListener("markerFound", ()=>{
console.log("marker is found!")
  this.handleMarkerFound()
})
  
this.el.addEventListener("markerLost", ()=>{
console.log("marker is lost!")
  this.handleMarkerLost()
})
},
  
handleMarkerFound: function(){
var buttonDiv = document.getElementById("button-div")

buttonDiv.style.display = "flex"
  
var ratingButton = document.getElementById("summary")

var orderButton = document.getElementById("order")

ratingButton.addEventListener("click", function(){
  swal({
  icon:"warning",
  title:"rate toy",
  text:"work in progress"
  })
})
  
  orderButton.addEventListener("click", function(){
  swal({
  icon:"warning",
  title:"Thanks for ordering!",
  text:"It will be delivered soon!"
  })
})
},
  
 handleMarkerLost: function(){
 var buttonDiv = document.getElementById("button-div")

 buttonDiv.style.display = "none";
 }
})
