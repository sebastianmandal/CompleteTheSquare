/*jshint esversion: 6 */

/// = OUT TAKES
// = COMMENT

function factor() {

  /// var a = parseFloat(document.getElementById("fa").value);
  var a = parseFloat(document.getElementById("fb").value);
  var b = a / 2;
  var c = parseFloat(document.getElementById("fc").value);

  var answer1 = findxpos(b, c);
  var answer1 = document.getElementById("fanswer1").innerHTML = ("x = " + answer1);

  var answer2 = findxneg(b, c);
  var answer2 = document.getElementById("fanswer2").innerHTML = ("x = " + answer2);
}

function findxpos(b, c) {
  var c1 = c + (b * b);
  var c2 = Math.sqrt(c1);
  var c3 = -b + c2;
  return c3;
}

function findxneg(b, c) {
  var c1 = c + (b * b);
  var c2 = Math.sqrt(c1);
  var c3 = -b - c2;
  return c3;
}