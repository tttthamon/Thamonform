document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const modal = document.getElementById("successModal");
  const successMessage = document.getElementById("successMessage");
  const closeModal = document.getElementById("closeModal");
  const errorDiv = document.getElementById("errormessage");

  const ticketType = document.getElementById("ticketType");
  const ticketCount = document.getElementById("ticketCount");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    errorDiv.textContent = "";

    const name = document.getElementById("name").value.trim();
    const tel = document.getElementById("tel").value.trim();
    const type = ticketType.value;
    const count = parseInt(ticketCount.value);

    if (!/^\S+(?:\s+\S+)+$/.test(name)) {
      errorDiv.textContent = "กรุณากรอกชื่อ-นามสกุลอย่างน้อย 2 คำ";
      return;
    }

    if (!/^0\d{9}$/.test(tel)) {
      errorDiv.textContent = "กรุณากรอกเบอร์โทรศัพท์ 10 หลักที่ขึ้นต้นด้วย 0";
      return;
    }

    if (isNaN(count) || count < 1 || count > 5) {
      errorDiv.textContent = "จำนวนตั๋วต้องอยู่ระหว่าง 1 ถึง 5";
      return;
    }

    if ((type === "vip" || type === "premium") && count > 2) {
      errorDiv.textContent = "ประเภทตั๋ว VIP หรือ Premium จำกัดไม่เกิน 2 ใบ";
      return;
    }

    // Passed validation
    successMessage.innerHTML = `จองตั๋วสำเร็จ จำนวน: <strong>${count}</strong> ประเภท: <strong>${type.toUpperCase()}</strong>`;
    modal.style.display = "flex";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    form.reset();
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  document.getElementById("pageSelector").addEventListener("change", function () {
    if (this.value) window.location.href = this.value;
  });
});
