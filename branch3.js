document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("testBtn");
  const result = document.getElementById("Result");

  button.addEventListener("click", function () {
    result.textContent = "Branch3 Page! 🎉";
    console.log("Branch3 JavaScript 정상 작동!");
  });

  console.log("Branch3 페이지 로드 완료!");
});
