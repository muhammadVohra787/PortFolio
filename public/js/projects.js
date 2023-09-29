/* projects.js, Muhammad vohra, 301257640, 2023/09/29 */

var videos = document.getElementsByClassName('vid');
var thumb1=document.getElementById('thumb1');
var div1 = document.getElementById('right1');
var thumb2=document.getElementById('thumb2');
var div2 = document.getElementById('right2');
var thumb3=document.getElementById('thumb3');
var div3 = document.getElementById('right3');

div1.addEventListener("mouseover", function () {
videos[0].play();
thumb1.style.display="none";
document.getElementById('videoOne').style.display="inline-block";

});

div1.addEventListener("mouseout", function () {
videos[0].pause();
thumb1.style.display="inline-block";
document.getElementById('videoOne').style.display="none";
});

div2.addEventListener("mouseover", function () {
videos[1].play();
thumb2.style.display="none";
document.getElementById('videoTwo').style.display="inline-block";
});

div2.addEventListener("mouseout", function () {
videos[1].pause();
thumb2.style.display="inline-block";
document.getElementById('videoTwo').style.display="none";
});

div3.addEventListener("mouseover", function () {
videos[2].play();
thumb3.style.display="none";
document.getElementById('videoThree').style.display="inline-block";
});

div3.addEventListener("mouseout", function () {
videos[2].pause();
thumb3.style.display="inline-block";
document.getElementById('videoThree').style.display="none";
});