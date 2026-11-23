
document.addEventListener("DOMContentLoaded", () => {
  const vipPopup = document.getElementById("vipPopup");
  const closeVipPopup = document.getElementById("closeVipPopup");

  // VIP 팝업 열기
  function openVipPopup() {
    if (!vipPopup) return;

    vipPopup.classList.add("active");
    vipPopup.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    closeVipPopup?.focus();
  }

  // VIP 팝업 닫기
  function closePopup() {
    if (!vipPopup) return;

    vipPopup.classList.remove("active");
    vipPopup.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // 라이브 사진 클릭
  document.querySelectorAll(".live-photo").forEach((photo) => {
    photo.addEventListener("click", openVipPopup);
  });

  // 팝업 닫기 버튼
  closeVipPopup?.addEventListener("click", closePopup);

  // 팝업 바깥 클릭
  vipPopup?.addEventListener("click", (event) => {
    if (event.target === vipPopup) {
      closePopup();
    }
  });

  // ESC 키
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && vipPopup?.classList.contains("active")) {
      closePopup();
    }
  });

  // 혜택 더보기 / 접기
  const benefitMore = document.getElementById("benefitMore");
  const benefitExtra = document.getElementById("benefitExtra");

  if (benefitMore && benefitExtra) {
    benefitMore.addEventListener("click", () => {
      const isOpen = benefitExtra.classList.toggle("open");
      benefitMore.textContent = isOpen ? "접기 −" : "더보기 +";
    });
  }

  // 카카오톡 채널 링크 통일
  const kakaoChannelUrl = "https://pf.kakao.com/_ZjdWX";

  document.querySelectorAll('a[href*="pf.kakao.com"]').forEach((link) => {
    link.href = kakaoChannelUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});
