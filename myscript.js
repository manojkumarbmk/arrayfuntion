function len() {
    var str = document.getElementById("input").value;
    var result = document.getElementById("display");
    result.value = str.length
}
function replace() {
    var str = document.getElementById("input").value;
    var result = document.getElementById("display")
    var a = prompt("What you want to remove...")
    var b = prompt("What you want to Replace...")
    result.value = str.replace(a, b)
}