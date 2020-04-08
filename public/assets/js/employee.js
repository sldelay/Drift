// JQuery for employee page goes here
//event listener on button .feedback w/ get request rout on 29 un user routes and evet listener on btn .questions makes get to 49 in user;
$(document).ready(function () {
  $(document).on("submit", "#newMessage", function (event) {
    event.preventDefault();
    let postData = {
      subject: $("#formSubject").val().trim(),
      category: $("#formCategory").val(),
      content: $("#formMessage").val().trim(),
      userId: $("#newMessage").attr("data-id"),
    };
    $.ajax({
      method: "POST",
      url: "/api/newMessage",
      data: postData,
    }).then(function () {
      location.reload();
    });
  });
});
