var body = document.getElementsByTagName("body")[0];
var count = document.getElementById("J_maglev").getElementsByTagName("span")[0].innerHTML.replace(/[()]/g,"");
var href = document.getElementsByClassName("crumb")[0].getElementsByTagName("a")[0].href;
var shopId = /shop\/(\d+)/.exec(href)[1] || 0;

body.innerHTML = "";
body.style.width = "650px";
body.style.textAlign = "center";
body.style.margin = "0 auto";

var xhr = new XMLHttpRequest();
xhr.open("GET", "/ajax/json/shoppic/find?type=all&typeId=0&shopId="+shopId+"&full=0&href=1&firstPos=0&count="+count, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    var result = JSON.parse(xhr.responseText).msg.img;
    var length = result.length;
    var html = [];
    var href;
    for(var i = 0; i< length;i++){
    	html.push('<img src="'+result[i].thumb.replace("120o90","700x700")+'" style="width:700px;height:700px;padding:5px;border:2px solid #D8D8D8" margin:3px;/>')
    }
    body.innerHTML = html.join("");
  }
}
xhr.send();