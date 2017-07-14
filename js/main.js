$(document).ready(function() {
  var color = "black";
  var dim = 500;
  function generatePad(size) {
    $("div.pad").empty();
    var cellDim = dim / size;
    for (var i = 0; i < size; i++) {
      $("div.pad").append("<div class='row' id='" + i +"'></div>");
      for (var j = 0; j < size; j++) {
        $("#" + i).append("<div class='cell'></div>");
      }
    }
    $(".row").css("height", cellDim + "px");
    $(".cell").css("height", (cellDim - 1) + "px");
    $(".cell").css("width", (cellDim - 1) + "px");
  }
  generatePad(16);
  $("#clear").click(function() {
    $(".cell").css("background-color", "white");
  });
  $("#colorPick").click(function() {
    color = prompt("Please type a color");
    $("#pen").css("background-color", color);
  });
  $("#size").click(function() {
    generatePad(prompt("grid size"));
  });
  $(document).on("mouseenter", ".cell", function() {
    $(this).css("background-color", color);
  });
});
