const container = document.querySelector(".entryLog");
const header = document.getElementById("header");
const formContainer = document.getElementById("form--container");
const buttonContainer = document.getElementById("button--container");

/* radio button filtering */
const radioContainer = document.getElementById("radio--container");
const fantastic = document.getElementById("fantastic");
const good = document.getElementById("good");
const neutral = document.getElementById("neutral");
const poor = document.getElementById("poor");
const murphy_monday = document.getElementById("murphy-monday");
const radioButtonCollection = document.getElementsByName("mood");
let radioButtonClicked;

/* form validation */
// regex allows validation for listed profanity present
const regex_explicit = new RegExp(/[^!@#$%^&*]*(damn|shit|ass)[^!@#$%^&*]*/i);
//profanity blocker variables are initially false (no text is in the input fields)
let profanityBlocker1 = false;
let profanityBlocker2 = false;

/* dynamic form creation */
let formButton;
let conceptLabel;
let entryLabel;
let dateInput;
let conceptInput;
let entryInput;
let moodInput;