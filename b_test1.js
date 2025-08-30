document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("testBtn");
  const result = document.getElementById("Result");

  button.addEventListener("click", function () {
    result.textContent = "Branch Test! 🎉";
    console.log("B_test1 JavaScript 정상 작동!");
  });

  console.log("b_test1 페이지 로드 완료!");
});
