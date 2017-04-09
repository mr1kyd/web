function questionAJAX(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("div_quest").innerHTML +=
      this.responseText;
    }
  };
  xhttp.open("GET", "additionQuestions.html", true);
  xhttp.send();
}

function XMLAJAX(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "protectionSchems.xml", true);
  xhttp.send();
}

function myFunction(xml){
  var doc = "<h2>Схемы защиты</h2>";
  var par = document.getElementById("wraper");
  var but = document.getElementById("ajaxButton");
  par.removeChild(but);
  doc +="<ul>"
  var i;
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("ps")[0].getElementsByTagName("record");
  for (i = 0; i <x.length; i++) {
    doc += "<li>" + x[i].childNodes[0].nodeValue + "</li>";
  }
  document.getElementById("wraper").innerHTML += doc;
}

function cpuAjax(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("wraper").innerHTML +=
      this.responseText;
    }
  };
  xhttp.open("GET", "cpu.xml", true);
  xhttp.send();
}
