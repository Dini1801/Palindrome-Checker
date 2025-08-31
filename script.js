function checkPalindrome() {
  let text = document.getElementById("text-input").value;
  let result = document.getElementById("result");

  if (text === "") {
    result.innerHTML = "⚠️ Please enter some text!";
    result.style.color = "red";
    return;
  }


  let cleanText = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reversedText = cleanText.split("").reverse().join("");

  if (cleanText === reversedText) {
    result.innerHTML = `✅ Yes, "${text}" is a Palindrome!`;
    result.style.color = "green";
  } else {
    result.innerHTML = `❌ No, "${text}" is not a Palindrome.`;
    result.style.color = "red";
  }
}
