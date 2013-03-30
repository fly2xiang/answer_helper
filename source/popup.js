function auto_check(){
	chrome.tabs.executeScript(null,{file:"in.js"});
}

document.getElementById('auto_check').onclick = function (){auto_check()};

