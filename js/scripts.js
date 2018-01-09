$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul#user").append("<li>Bark!</li>");
    $("ul#webpage").append("<li>Meow!</li>");
  });

  $("button#meow").click(function() {
    $("ul#user").append("<li>Meow!</li>");
    $("ul#webpage").append("<li>Bark!</li>");
  });

  $("button#surprise").click(function() {
    $("ul#user").append("<li>squawk</li>");
    $("ul#webpage").append("<li>MooooOOOOOOOOO!</li>");
  });
});
