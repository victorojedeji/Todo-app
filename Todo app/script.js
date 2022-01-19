let addItemButton = document.getElementById("add-item-button");
let itemWrapper = document.querySelector("items-wrapper");
RefreshItemFunction();
addItemButton.onclick = function () {
	console.log("i have been clicked");
	addItem();
}
function addItem(){
	console.log("i am adding item");
	var newContent = document.createElement("div");
	itemWrapper.appendChild(newContent);
	newContent.outerHTML = 
	`<div class="item">
            <textarea class="item-text" type="text" placeholder="write new item"></textarea>
            <img src="icon/close2-2.svg" class="remove-item-button">
     </div>
	`;
	RefreshItemFunction();
}




function RefreshItemFunction(){
	document.querySelectorAll(".remove-item-button").forEach(function(elem){
		elem.onclick = function () {
			itemWrapper.removeChild(elem.parentNode);
		}
	})
}
