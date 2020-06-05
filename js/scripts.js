
// this is code to receive user info from select boxes:
const beverage = $("#beverage").val();

// this is code to receive user info from radio buttons:
const flavor = $("input:radio[name=flavor]:checked").val();

// this is code to receive user info from a calendar:
const dob = $("#born").val();

// this is code to receive user info from a color wheel:
const favoriteColor = $("#color").val();

// this is code receive and display user info from text fields:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});

// this is code from our dating game:
$(document).ready(function() {
  $("#profile").submit(function(event) {
    const gender = $("#gender").val();
    const attribute = $("#attribute").val();



    if (gender === 'male' && attribute === 'athletic') {
      let choice = "Arnold Schwartzenegger";
      $(".choice").text(choice);
    } else if (gender === 'male' && attribute === 'caring') {
      let choice = "Brad Pitt";
      $(".choice").text(choice);
    } else if (gender === 'male' && attribute === 'rich') {
      let choice = "Bill Gates";
      $(".choice").text(choice);
    } else if (gender === 'female' && attribute === 'intelligent') {
      let choice = "Madeleine Albright";
      $(".choice").text(choice);
    }

    $("#date").text();
    event.preventDefault();

  });
});

