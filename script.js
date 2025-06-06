const openModalBtn = document.getElementById("openModalBtn");
const myModal = document.getElementById("myModal");
const closeButton = document.querySelector(".close-button");

// モーダルを開く
openModalBtn.addEventListener("click", () => {
  myModal.classList.add("show");
});

// モーダルを閉じる (×ボタン)
closeButton.addEventListener("click", () => {
  myModal.classList.remove("show");
});

// モーダルの外側（背景）をクリックして閉じる
myModal.addEventListener("click", (event) => {
  // クリックされた要素がモーダル自体（modal-contentではない部分）であれば閉じる
  if (event.target === myModal) {
    myModal.classList.remove("show");
  }
});

// Escapeキーで閉じる (オプション)
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && myModal.classList.contains("show")) {
    myModal.classList.remove("show");
  }
});
