$(document).ready(function () {
  $(document).on("submit", "#newEmployee", function (event) {
    event.preventDefault();

    if (!$("#exampleInputEmail1").val() || !$("#exampleInputPassword1").val()) {
      alert("Looks like your forgot to input something!");
      return;
    }

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

    if (!$("#formQuestion").val()) {
      alert("Looks like your forgot to input something!");
      return;
    }

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

  $(document).on("click", ".archive", function () {
    console.log($(this).attr("data-id"));
    let id = $(this).attr("data-id");

    let archive = {
      archived: true,
    };

    $.ajax({
      method: "PUT",
      url: `/api/archivePost/${id}`,
      data: archive,
    }).then(function () {
      location.reload();
    });
  });

  $(document).on("click", ".questActive", function () {
    console.log($(this).attr("data-id"));
    let id = $(this).attr("data-id");

    let active = {
      isActive: false,
    };

    $.ajax({
      method: "PUT",
      url: `/api/inactiveQuestion/${id}`,
      data: active,
    }).then(function () {
      location.reload();
    });
  });
});
