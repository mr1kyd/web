var root;

window.onload = function(){
  root = document.getElementById('div_quest');
}

function mysubmit(){
  var expxp = new RegExp(/^[ ]+/g);
  var textar = document.getElementById('text');
  if(textar.value.trim() == ""){
    alert("Невозможно отправить пустое сообщение");
  }
  else{
    var mess = textar.value.trim();
    var div = document.createElement('div');
    div.className = 'userQuest';
    div.innerHTML += mess + '<hr/>';
    var email = document.getElementById('email').value;
    var innerDiv = document.createElement('div');
    innerDiv.className = 'rightAlign';
    if(email != ''){
      innerDiv.innerHTML += email;
    }
    else {
      innerDiv.innerHTML += "Email не был указан";
    }
    div.appendChild(innerDiv);
    root.appendChild(div);
  }
  document.getElementById('email').value = "";
  document.getElementById('text').value = "";
}

function countLines(strtocount, cols) {
	var hard_lines = 1;
	var last = 0;
	while ( true ) {
		last = strtocount.indexOf("\n", last+1);
		hard_lines ++;
		/* if ( hard_lines == 35) break; */
		if ( last == -1 ) break;
		}
	var soft_lines = Math.ceil(strtocount.length / (cols-1));
	var hard = eval("hard_lines " + unescape("%3e") + "soft_lines;");
	if ( hard ) soft_lines = hard_lines;
	return soft_lines;
}

function ResizeTextArea(the_form,min_rows) {
	the_form.rows = Math.max(min_rows,countLines(the_form.value,the_form.cols));
}
