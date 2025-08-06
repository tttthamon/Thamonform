const form = document.getElementById('healthForm');
const hasDiseaseCheckbox = document.getElementById('hasDisease');
const diseaseDetail = document.getElementById('diseaseDetail');
const modal = document.getElementById('resultModal');
const bmiResult = document.getElementById('bmiResult');

hasDiseaseCheckbox.addEventListener('change', () => {
  diseaseDetail.classList.toggle('hidden', !hasDiseaseCheckbox.checked);
});

function showError(id, condition) {
  const el = document.getElementById(id);
  el.classList.toggle('hidden', !condition);

  if (id === 'nameError') {
    const nameInput = document.getElementById('name');
    nameInput.classList.toggle('border-red-500', condition);
    nameInput.classList.toggle('border-blue-300', !condition);
  }
}

function calculateBMI(weight, height) {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

function interpretBMI(bmi) {
  if (bmi < 18.5) return 'น้ำหนักน้อยเกินไป (ผอม)';
  if (bmi < 23) return 'น้ำหนักปกติ';
  if (bmi < 25) return 'น้ำหนักเกิน';
  if (bmi < 30) return 'อ้วนระดับ 1';
  return 'อ้วนระดับ 2';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const gender = form.querySelector('input[name="gender"]:checked');
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const hasDisease = hasDiseaseCheckbox.checked;
  const diseaseText = diseaseDetail.value.trim();

  let valid = true;

  const namePattern = /^[ก-๙\s]+$/;
  showError('nameError', !namePattern.test(name));
  valid &= namePattern.test(name);
  if (!namePattern.test(name)) {
    document.getElementById('name').focus();
  }

  showError('ageError', !(age >= 15 && age <= 60));
  valid &= age >= 15 && age <= 60;

  showError('genderError', !gender);
  valid &= !!gender;

  showError('weightError', !(weight > 0));
  valid &= weight > 0;

  showError('heightError', !(height > 0));
  valid &= height > 0;

  showError('diseaseError', hasDisease && diseaseText === '');
  valid &= !(hasDisease && diseaseText === '');

  if (!valid) return;

  const bmi = calculateBMI(weight, height);
  const resultText = `ค่า BMI ของคุณคือ ${bmi.toFixed(2)} - ${interpretBMI(bmi)}`;
  bmiResult.textContent = resultText;
  modal.classList.remove('hidden');
});

function closeModal() {
  modal.classList.add('hidden');
}
 document.getElementById('pageSelector').addEventListener('change', function() {
      const selectedPage = this.value;
      if (selectedPage) {
        window.location.href = selectedPage;
      }
    });
