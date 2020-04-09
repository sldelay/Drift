$(document).ready(function () {
  $(document).on("submit", "#newMessage", function (event) {
    event.preventDefault();
    let postData = {
      subject: $("#formSubject").val().trim(),
      category: $("#formCategory").val(),
      content: $("#formMessage").val().trim(),
      userId: $("#newMessage").attr("data-id"),
    };
    console.log(postData);
    $.ajax({
      method: "POST",
      url: "/api/newMessage",
      data: postData,
    }).then(function () {
      location.reload();
    });
  });

  $(document).on("submit", "#submitAnswer", function (event) {
    event.preventDefault();
    const formArray = $(event.currentTarget).serializeArray();
    let arrObj = {
      data: formArray,
    };
    $.ajax({
      method: "POST",
      url: "/api/answers",
      data: arrObj,
    }).then(function () {
      location.reload();
    });
  });
});
