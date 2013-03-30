function auto_answer(){
	var ANS = 'ABC';
	var answers = {
		sj1 : "CBBACCBBBCABCABBCABCACCCACBAABCACBBACABBAABCBCBABCAACACCABACBAABABAACABCCAACCBBCBBACCCACABACCBCABAAC",
		sj2 : "BACBCACCACBAABBBABCAAACABBCACABACBBABBCBCBAACBCABBBCCBABBCCABAACCBCAAAAACCABBCBACBBABBCABCACABAACBBB"};
	var answer;
	switch(window.location.href){
		case 'http://www.12371.cn/special/zsjs/sj1/index.shtml':
			answer = answers.sj1;
			break;
		case 'http://www.12371.cn/special/zsjs/sj2/index.shtml':
			answer = answers.sj2;
			break;
		default:
			alert('这个页面貌似不是答题页面吧？');
			return;
			break;
	}
	if(answer.length != 100){
		alert("数据出错！");
		return;
	}
	var inputs = document.querySelectorAll('input[type="radio"]');
	for(var i=0; i<inputs.length; i+=3){
		inputs[i+ANS.indexOf(answer[i/3])].checked = 'checked';
	};
	alert('答题完成！^_^');
}

auto_answer();

