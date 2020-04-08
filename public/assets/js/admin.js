// JQuery for admin page goes here
$(document).on("submit", ".newEmployee", function (event) {
  event.preventDefault();
  let postData = {
    name: $("#exampleInputEmail1").val().trim(),
    email: $("#exampleInputPassword1").val().trim(),
    owner: false,
    admin: $("#exampleFormControlSelect1").val().trim(),
  };
  $.ajax({
    method: "POST",
    url: "/api/newUser",
    data: postData,
  }).then(function () {
    window.location.href = "/admin";
  });
});

$(document).on("submit", ".newQuestion", function (event) {
  event.preventDefault();
  let postData = {
    question: $("formQuestion").val().trim(),
  };
  $.ajax({
    method: "POST",
    url: "/api/newQuestion",
    data: postData,
  }).then(function () {
    window.location.href = "/admin";
  });
});
