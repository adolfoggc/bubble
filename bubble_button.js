
function check_bubble(obj){
 $(obj).toggleClass("big_bubble");
 $(obj).toggleClass("small_bubble");

}

function getParent(obj){
	switch ($(obj).attr("id")) {
		case "b2":
			return "#b1";
		break;
		case "b3":
			return "#b1";
		break;
		case "b4":
			return "#b2";
		break;
		case "b5":
			return "#b2";
		break;
		case "b6":
			return "#b3";
		break;
		default:
			return [];
	}
}

function getChildren(obj){
	var arr;
	switch ($(obj).attr("id")) {
		case "b1":
			arr = ["#b2", "#b3"];
		break;
		case "b2":		
			arr =  ["#b4", "#b5"];
		break;
		case "b3":
			arr = ["#b6"];
			break;
		default:
			arr = [];
		
	}
	//console.log(arr.length); 
	return arr;
}

function small_pop(obj){

	$(obj).toggleClass("pop");
	$(obj).toggleClass("small_bubble");
}

function small_big(obj){
	//parents
	var parent = getParent($(obj));
	console.log(parent); 
	if (parent != null){
		small_pop($(parent));
		if ($(parent).attr("class") === "pop"){
				$(parent).attr("onclick", "");
				console.log("parent die!");
			} else { //not popped
				$(parent).attr("onclick", "small_big(this);");
				console.log("parent liiive!");
			}
	}
	var relatives = getChildren($(parent));
	var size = relatives.length;
	var i = 0;
	this_one = $(obj).attr("id");
	while (i < size){
		if (relatives[i] === "#"+this_one) {
			$(relatives[i]).toggleClass("small_bubble");
			$(relatives[i]).toggleClass("big_bubble");	
		} else {
			$(relatives[i]).toggleClass("pop");
			$(relatives[i]).toggleClass("big_bubble");
			if ($(relatives[i]).attr("class") === "pop"){
				$(relatives[i]).attr("onclick", "");
				console.log("bros die!");
			} else { //not popped
				$(relatives[i]).attr("onclick", "small_big(this);");
				console.log("bros liiive!");
			}	
		}	
		i+=1;
	}


	//$(obj).toggleClass("small_bubble");
	//$(obj).toggleClass("big_bubble");
	

	var children = getChildren($(obj));
	size = children.length;
	i = 0;
	//this_one = $(obj).attr("id");
	if ( jQuery.isEmptyObject(children) == false ){
		while (i < size){
				$(children[i]).toggleClass("pop");
				$(children[i]).toggleClass("big_bubble");
				if ($(children[i]).attr("class") === "pop"){
					$(children[i]).attr("onclick", "");
					console.log("child die!");
				} else { //not popped
					$(children[i]).attr("onclick", "small_big(this);");
					console.log("child liiive!");
				}	
			i+=1;
		}
	}
}

function big_pop(obj){
	$(obj).toggleClass("big_bubble");
	$(obj).toggleClass("pop");
}