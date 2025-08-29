document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("testBtn");
  const result = document.getElementById("result");

  button.addEventListener("click", function () {
    result.textContent = "개발환경 설정 완료! 🎉";
    console.log("JavaScript 정상 작동!");
  });

  console.log("페이지 로드 완료!");
});
