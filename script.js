let myButton = document.getElementById("mybutton");

myButton.addEventListener("click", function () {
    document.body.scrollTop += 10000; // For Chrome, Safari and Opera
    document.documentElement.scrollTop += 500; // For IE and Firefox
});