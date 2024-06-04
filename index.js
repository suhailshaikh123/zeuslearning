const button = document.getElementById("button");
const fname = document.getElementById("fname");
const fcomment = document.getElementById("fcomment");

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hello!");

  const name_value = fname.value;
  const comment_value = fcomment.value;

  console.log(name_value);
  console.log(comment_value);
  validate(name_value, comment_value);
});
function validate(name_value, comment_value) {
  if (name_value.length == 0) {
    alert("All fields are compulsory");
    fname.focus();
  } else if (comment_value.length == 0) {
    alert("All fields are compulsory");
    fcomment.focus();
  } else if (
    document.getElementById("fmale").checked == false &&
    document.getElementById("ffemale").checked == false
  ) {
    alert("All fields are compulsory");
    document.getElementsByName("gender")[0].focus();
  } else {
    alert("Thanks for filling the form");
  }
}
