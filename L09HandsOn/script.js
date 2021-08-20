let newInfo = new XMLHttpRequest();
newInfo.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("name").innerHTML =
      myObj.name + " - " + myObj.birthday;
  }
};

newInfo.open("GET", "einstein.json", true);
newInfo.send();

function loadDoc() {
    newInfo.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myObj = JSON.parse(this.responseText);
            document.getElementById("bio").innerHTML = myObj.newbio;
        }
    };
    newInfo.open("GET", "einstein.json", true);
    newInfo.send();
}



