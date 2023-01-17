import React from "react";
import "./card.css";

const Card = () => {
//   const input = document.querySelector("#phone");
//    const errorMsg = document.querySelector("#error-msg");
//   const validMsg = document.querySelector("#valid-msg");
// const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
// const iti = window.intlTelInput(input, {
//   utilsScript: "../../build/js/utils.js?1638200991544"
// });
// const reset = () => {
//   input.classList.remove("error");
//   errorMsg.innerHTML = "";
//   errorMsg.classList.add("hide");
//   validMsg.classList.add("hide");
// };

// input.addEventListener('blur', () => {
//   reset();
//   if (input.value.trim()) {
//     if (iti.isValidNumber()) {
//       validMsg.classList.remove("hide");
//     } else {
//       input.classList.add("error");
//       const errorCode = iti.getValidationError();
//       errorMsg.innerHTML = errorMap[errorCode];
//       errorMsg.classList.remove("hide");
//     }
//   }
// });

// input.addEventListener('change', reset);
// input.addEventListener('keyup', reset);
  return (
   <div className="Card">
    <div className="Card1">
        <h1 className="ca1">add card details</h1>
        <p className="ca2">Please make sure all of the info you enter are the same as your card registration info.</p>  
    </div>
    <div className="dropdown1">
  <button type="submit" className="dropbtn1">Dropdown</button>
  <div className="dropdown-content1">
    <a href="/">Link 1</a>
    <a href="/">Link 2</a>
    <a href="/">Link 3</a>
  </div>
</div>
{/* <input id="phone" type="tel"/>
<span id="valid-msg" className="hide">✓ Valid</span>
<span id="error-msg" className="hide"/> */}
   </div>
  );
};

export default Card;
