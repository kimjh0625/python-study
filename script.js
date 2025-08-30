document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("testBtn");
  const result = document.getElementById("Result");

  button.addEventListener("click", function () {
    result.textContent = "Master Branch Page! 🎉";
    console.log("Master Branch JavaScript 정상 작동!");
  });

  console.log("페이지 로드 완료!");
});
