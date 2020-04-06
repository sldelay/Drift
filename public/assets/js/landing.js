// JQuery for home/landing page goes here

$(document).ready(function () {
  function arrayToObject(arr) {
    const Obj = {};
    arr.forEach((element) => {
      Obj[element.name] = element.value;
    });
    return Obj;
  }

  //EVENTS
  $("#newCompany").on("submit", function (event) {
    event.preventDefault();
    const formArray = $(event.currentTarget).serializeArray();
    const formData = arrayToObject(formArray);
    console.log(formData);
  });
});
