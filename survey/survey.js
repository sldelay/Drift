Survey.StylesManager.applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-blue";

let json = {
  questions: [
    {
      type: "matrix",
      name: "Quality",
      title:
        "Please indicate if you agree or disagree with the following statements",
      columns: [
        {
          value: 1,
          text: "Strongly Disagree",
        },
        {
          value: 2,
          text: "Disagree",
        },
        {
          value: 3,
          text: "Neutral",
        },
        {
          value: 4,
          text: "Agree",
        },
        {
          value: 5,
          text: "Strongly Agree",
        },
      ],
      rows: [
        { value: "job", text: "I enjoy coming to work every day" },
        {
          value: "caring",
          text: "I believe management cares about me",
        },
        {
          value: "value",
          text: "Management values my opinion",
        },
        {
          value: "I feel included",
          text: "I feel like a valuable part of the team",
        },
        {
          value: "opportunities",
          text: "There is room for me to advance here",
        },
      ],
    },
  ],
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function (result) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(result.data, null, 3);
});

$("#surveyElement").Survey({ model: survey });
