$(document).ready(function () {
  $("#newCompany").on("submit", function (event) {
    event.preventDefault();

    let companyData = {
      name: $("#companyNameform").val().trim(),
      ownerName: $("#ownerNameform").val().trim(),
      email: $("#ownerEmailform").val().trim(),
    };

    console.log(companyData);

    $.ajax({
      method: "POST",
      url: "/api/newCompany",
      data: companyData,
    }).then(function () {
      window.location.href = "/login";
    });
  });
});
