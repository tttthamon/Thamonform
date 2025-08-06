

document.addEventListener('DOMContentLoaded', () => {
    
    const transferForm = document.getElementById('transferForm');

    
    if (transferForm) {
       
        transferForm.addEventListener('submit', (event) => {
            
            event.preventDefault();

            
            const formData = new FormData(transferForm);
            
          
            const data = {};

            
            formData.forEach((value, key) => {
              
                if (value instanceof File) {
                    
                    data[key] = {
                        name: value.name,
                        size: value.size,
                        type: value.type
                    };
                } else {
                    
                    data[key] = value;
                }
            });

           
            if (!validateForm(data)) {
                
                alert('กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้องตามรูปแบบที่กำหนด'); 
                return; 
            }

           
            console.log("ข้อมูลที่ส่งจากฟอร์ม:"); 
            console.log(data);

           

           
            alert('คำร้องถูกส่งสำเร็จแล้ว! (ข้อมูลถูกแสดงใน Console)'); 
            transferForm.reset(); 
        });
    } else {
        
        console.error("Error: ไม่พบฟอร์มที่มี ID 'transferForm' ในเอกสาร HTML");
    }

   
    function validateForm(data) {
        
        if (!data.fullname || data.fullname.trim() === '') {
            console.log('Validation Error: ชื่อ-นามสกุล ห้ามว่าง'); 
            return false;
        }
        if (!data.studentId || data.studentId.trim() === '') {
            console.log('Validation Error: รหัสนักศึกษา ห้ามว่าง'); 
        }
        if (!data.oldFaculty || data.oldFaculty.trim() === '') {
            console.log('Validation Error: คณะเดิม ห้ามว่าง'); 
            return false;
        }
        if (!data.oldMajor || data.oldMajor.trim() === '') {
            console.log('Validation Error: สาขาวิชาเดิม ห้ามว่าง'); 
            return false;
        }
        if (!data.year || data.year.trim() === '') {
            console.log('Validation Error: ชั้นปี ห้ามว่าง'); 
            return false;
        }
        if (!data.phone || data.phone.trim() === '') {
            console.log('Validation Error: เบอร์โทร ห้ามว่าง'); 
            return false;
        }
        if (!data.email || data.email.trim() === '') {
            console.log('Validation Error: อีเมล ห้ามว่าง'); 
            return false;
        }
        
        if (!data.semesterType || data.semesterType.trim() === '') {
            console.log('Validation Error: ประเภทภาคเรียน ห้ามว่าง'); 
            return false;
        }
        if (!data.newFaculty || data.newFaculty.trim() === '') {
            console.log('Validation Error: คณะปลายทาง ห้ามว่าง'); 
            return false;
        }
        if (!data.newMajor || data.newMajor.trim() === '') {
            console.log('Validation Error: สาขาปลายทาง ห้ามว่าง'); 
            return false;
        }
        if (!data.reason || data.reason.trim() === '') {
            console.log('Validation Error: เหตุผลการโอนย้าย ห้ามว่าง'); 
            return false;
        }

        
        const studentIdPattern = /^\d{10}$/;
        if (!studentIdPattern.test(data.studentId)) {
            console.log('Validation Error: รหัสนักศึกษา ต้องเป็นตัวเลข 10 หลัก'); 
        }

       
        const phonePattern = /^0\d{9}$/;
        if (!phonePattern.test(data.phone)) {
            console.log('Validation Error: เบอร์โทรศัพท์ไม่ถูกต้อง (ต้องขึ้นต้นด้วย 0 และมี 10 หลัก)'); 
            return false;
        }

        
        if (data.reason.length < 10) {
            console.log('Validation Error: เหตุผลการโอนย้ายต้องมีอย่างน้อย 10 ตัวอักษร');
            return false;
        }

      
        if (!data.transcript || data.transcript.size === 0) {
            console.log('Validation Error: กรุณาแนบไฟล์ Transcript'); 
            return false;
        }
        if (!data.petition || data.petition.size === 0) {
            console.log('Validation Error: กรุณาแนบเอกสารคำร้อง'); 
            return false;
        }

        
        return true;
    }
});