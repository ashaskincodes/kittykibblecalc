for(var i=0.5; i<=25; i+= 0.5){
    var select = document.getElementById("weight");
    var option = document.createElement("option");
	select.options.add(option);
	option.text = i;
	option.value = i;
}