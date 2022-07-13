//we get all the colors
const colors = document.querySelectorAll('#container div');
//we get the area where the colors are displayed
const container = document.querySelector('#screen');
//we prevent the default behavior
container.addEventListener("dragover",(e)=>{
    e.preventDefault();
});
//we add the event drop
container.addEventListener("drop",changeColor);
//we add the event the event dragstart to all colors whit this loop
colors.forEach(element => {
    element.addEventListener("dragstart",(e)=>{
        //we ship item color
        e.dataTransfer.setData("color",window.getComputedStyle(e.target).getPropertyValue("background-color"));
    });
});
//this function allows us change screen color
function changeColor(e){
    //we receive the color
    let n = e.dataTransfer.getData("color");
    //we change the color
    container.style.backgroundColor = n;
}