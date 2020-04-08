// JQuery for admin page goes here
$(document).ready(function () {
  $(document).on("submit", "#newEmployee", function (event) {
    event.preventDefault();
    let postData = {
      name: $("#exampleInputEmail1").val().trim(),
      email: $("#exampleInputPassword1").val().trim(),
      admin: $("#exampleFormControlSelect1").val(),
    };
    $.ajax({
      method: "POST",
      url: "/api/newUser",
      data: postData,
    }).then(function () {
      location.reload();
    });
  });

  $(document).on("submit", "#newQuestion", function (event) {
    event.preventDefault();
    let postData = {
      question: $("#formQuestion").val(),
      category: $("#formCategory").val(),
    };
    console.log(postData);
    $.ajax({
      method: "POST",
      url: "/api/newQuestion",
      data: postData,
    }).then(function (data) {
      console.log(data);
      location.reload();
    });
  });
});

// $("#newQuestion").submit(function (event) {
//   event.preventDefault();
//   $.ajax({
//     url: "/api/newQuestion",
//     type: "post",
//     data: {
//       question: $("#formQuestion").val(),
//       category: $("#formCategory").val(),
//     },
//   }).done(function (response) {
//     // clear form
//     $("#formQuestion").val("");
//     $("#formCategory").val("");
//     // attach to list
//     alert("submitted");
//   });
// });
