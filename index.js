document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const tel = document.getElementById('tel').value.trim();
  const ticketType = document.getElementById('ticketType').value;
  const ticketCount = parseInt(document.getElementById('ticketCount').value);

  const errormessage = document.getElementById('errormessage');
  errormessage.textContent = '';

 
  if (name.split(' ').length < 2) {
    errormessage.textContent = 'กรุณากรอกชื่อ-นามสกุลให้ครบ (อย่างน้อย 2 คำ)';
    return;
  }

  
  const telRegex = /^0\d{9}$/;
  if (!telRegex.test(tel)) {
    errormessage.textContent = 'กรุณากรอกเบอร์โทรศัพท์ 10 หลักขึ้นต้นด้วย 0';
    return;
  }

  
  if (isNaN(ticketCount) || ticketCount < 1 || ticketCount > 5) {
    errormessage.textContent = 'จำนวนตั๋วต้องระหว่าง 1 ถึง 5';
    return;
  }

  
  if ((ticketType === 'vip' || ticketType === 'premium') && ticketCount > 2) {
    errormessage.textContent = 'ประเภท VIP หรือ Premium จำกัดไม่เกิน 2 ใบ';
    return;
  }

  
  document.getElementById('successModal').style.display = 'flex';
});


document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('successModal').style.display = 'none';
});

 document.getElementById('pageSelector').addEventListener('change', function() {
      const selectedPage = this.value;
      if (selectedPage) {
        window.location.href = selectedPage;
      }
    });