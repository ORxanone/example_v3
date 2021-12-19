// function controlPanel() {

//     var myId = document.getElementById("demo")

//     var w = document.getElementById("w").value
//     var h = document.getElementById("h").value
//     var bg = document.getElementById("bg").value
//     var bradius = document.getElementById("br").value

//     myDiv.style.width = w
//     myDiv.style.height = h
//     myDiv.style.background = bg
//     myDiv.style.borderRadius = bradius




// }


function change() {

    var myId = document.getElementById("Demo");

    var w = document.getElementById("w").value;
    var h = document.getElementById("h").value;
    var bg = document.getElementById("bg").value;
    var bradius = document.getElementById("br").value;
    var rpx = document.getElementById("px").value
    var mr = document.getElementById("mr").value



    myId.style.width = w
    myId.style.height = h
    myId.style.background = bg
    myId.style.borderRadius = bradius
    myId.style.margin = mr

}