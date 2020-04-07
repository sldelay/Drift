// JQuery for home/landing page goes here

$(document).ready(function () {
  // function arrayToObject(arr) {
  //   const Obj = {};
  //   arr.forEach((element) => {
  //     Obj[element.name] = element.value;
  //   });
  //   return Obj;
  // }

  //EVENTS
  $("#newCompany").on("submit", function (event) {
    event.preventDefault();

    let companyData = {
      name: $("#companyNameform").val().trim(),
      ownerName: $("#ownerNameform").val().trim(),
      email: $("#ownerEmailform").val().trim(),
    };

    console.log(companyData);

    // $.ajax({
    //   method: "POST",
    //   url: "/api/newCompany",
    //   data: companyData,
    // }).then(function () {
    //   window.location.href = "/login";
    // });

    // const formArray = $(event.currentTarget).serializeArray();
    // const formData = arrayToObject(formArray);
    // console.log(formData);
    // let owner = formData.ownerName;
    // console.log("The owner variable is = " + owner);
    // let company = formData.companyName;
    // console.log("The company variable is = " + company);
    // let email = formData.ownerEmail;
    // console.log("The owner email variable is = " + email);
  });
});
