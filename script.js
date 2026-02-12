// ===============================
// AGE CALCULATION
// ===============================

function calculateAge(dob) {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// ===============================
// AUTO SALARY RULES
// ===============================

function autoSalary() {
    const nationality = document.getElementById("nationality").value;
    const experience = document.getElementById("experienceType").value;
    const salaryField = document.getElementById("salary");

    if (!nationality) {
        salaryField.readOnly = false;
        salaryField.value = "";
        return;
    }

    if (nationality === "Kenya") {
        salaryField.value = experience === "Fresh" ? 850 : 1000;
        salaryField.readOnly = true;
    }
    else if (nationality === "Uganda") {
        salaryField.value = experience === "Fresh" ? 900 : 1000;
        salaryField.readOnly = true;
    }
    else if (nationality === "Ethiopia") {
        salaryField.value = 1000;
        salaryField.readOnly = true;
    }
    else {
        salaryField.readOnly = false;
        if (!salaryField.value) {
            salaryField.value = 1000;
        }
    }
}

// ===============================
// TRANSLATION MAPS
// ===============================

const nationalityMap = {
    Kenya: "كينيا",
    Uganda: "أوغندا",
    Ethiopia: "إثيوبيا",
    Philippines: "الفلبين",
    India: "الهند",
    Bangladesh: "بنجلاديش"
};

const religionMap = {
    Muslim: "مسلمة",
    Christian: "مسيحية"
};

const genderMap = {
    Female: "أنثى",
    Male: "ذكر"
};

const experienceMap = {
    Fresh: "بدون خبرة",
    EX: "خبرة سابقة"
};

const maritalMap = {
    Single: "أعزب",
    Married: "متزوج"
};

const contractMap = {
    "2 Years": "سنتان",
    "1 Year": "سنة واحدة"
};

const medicalMap = {
    Yes: "نعم",
    No: "لا"
};

const levelMap = {
    Poor: "ضعيف",
    Fair: "مقبول",
    Good: "جيد",
    Excellent: "ممتاز",
    Fluent: "ممتاز"
};

// ===============================
// VALIDATION FUNCTIONS
// ===============================

function validateAge(dob) {
    if (!dob) return { valid: true, message: "" };
    
    const age = calculateAge(dob);
    if (age < 21 || age > 40) {
        return {
            valid: false,
            message: "⚠️ العمر يجب أن يكون بين 21 و 40 سنة\nAge must be between 21 and 40 years"
        };
    }
    return { valid: true, message: "" };
}

function validateRequiredFields() {
    const required = [
        { id: "fullName", label: "Full Name / الاسم الكامل" },
        { id: "nationality", label: "Nationality / الجنسية" },
        { id: "profession", label: "Profession / المهنة" }
    ];

    for (let field of required) {
        const value = document.getElementById(field.id).value;
        if (!value || value.trim() === "") {
            alert(`⚠️ Please fill in: ${field.label}`);
            document.getElementById(field.id).focus();
            return false;
        }
    }
    return true;
}

// ===============================
// MAIN FUNCTION
// ===============================

function updatePreview() {

    // Validate required fields
    if (!validateRequiredFields()) {
        return;
    }

    // Get all form values
    const office = document.getElementById("officeName").value || "المكتب الرئيسي";
    const name = document.getElementById("fullName").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const livingTown = document.getElementById("livingTown").value;
    const nationality = document.getElementById("nationality").value;
    const religion = document.getElementById("religion").value;
    const experience = document.getElementById("experienceType").value;
    const marital = document.getElementById("maritalStatus").value;
    const children = document.getElementById("children").value || "0";
    const profession = document.getElementById("profession").value;
    const contract = document.getElementById("contract").value;
    const mobile = document.getElementById("mobileNumber").value;
    const salary = document.getElementById("salary").value;

    const passportNumber = document.getElementById("passportNumber").value;
    const issueDate = document.getElementById("issueDate").value;
    const expiryDate = document.getElementById("expiryDate").value;

    const education = document.getElementById("education").value;
    const englishLevel = document.getElementById("englishLevel").value;
    const arabicLevel = document.getElementById("arabicLevel").value;

    const country = document.getElementById("country").value;
    const period = document.getElementById("period").value;
    const position = document.getElementById("position").value;
    const otherExperience = document.getElementById("otherExperience").value;

    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const medical = document.getElementById("medical").value;

    const cleaning = document.getElementById("cleaning").value;
    const cooking = document.getElementById("cooking").value;
    const arabicCooking = document.getElementById("arabicCooking").value;
    const washing = document.getElementById("washing").value;
    const ironing = document.getElementById("ironing").value;
    const babysitting = document.getElementById("babysitting").value;
    const childrenCare = document.getElementById("childrenCare").value;
    const tutoring = document.getElementById("tutoring").value;
    const disabledCare = document.getElementById("disabledCare").value;

    // Validate age
    const ageValidation = validateAge(dob);
    if (!ageValidation.valid) {
        alert(ageValidation.message);
        return;
    }

    let age = "";
    if (dob) {
        age = calculateAge(dob);
    }

    // Update preview
    document.getElementById("previewOffice").innerText = office;
    document.getElementById("previewOffice2").innerText = office;
    document.getElementById("previewName").innerText = name;

    document.getElementById("previewHero").innerHTML =
        "الجنسية: " + (nationalityMap[nationality] || nationality) +
        " | العمر: " + (age || "-") + " سنة" +
        " | الديانة: " + (religionMap[religion] || religion) +
        " | نوع الخبرة: " + (experienceMap[experience] || experience);

    document.getElementById("previewMarital").innerHTML =
        "الحالة الاجتماعية: " + (maritalMap[marital] || marital) +
        " | عدد الأطفال: " + children;

    document.getElementById("previewProfession").innerHTML =
        "المهنة: " + profession;

    document.getElementById("previewSalary").innerText = salary || "-";

    document.getElementById("previewContract").innerHTML =
        "مدة العقد: " + (contractMap[contract] || contract);

    document.getElementById("previewMobile").innerHTML =
        "رقم الهاتف: " + (mobile || "-");

    document.getElementById("previewPersonal").innerHTML =
        "الجنس: " + (genderMap[gender] || gender) + "<br>" +
        "تاريخ الميلاد: " + (dob || "-") + "<br>" +
        "مكان الإقامة: " + (livingTown || "-");

    document.getElementById("previewPassport").innerHTML =
        "رقم الجواز: " + (passportNumber || "-") + "<br>" +
        "تاريخ الإصدار: " + (issueDate || "-") + "<br>" +
        "تاريخ الانتهاء: " + (expiryDate || "-");

    document.getElementById("previewPhysical").innerHTML =
        "الطول: " + (height || "-") + " سم" +
        " | الوزن: " + (weight || "-") + " كجم" +
        " | لائقة طبياً: " + (medicalMap[medical] || medical);

    document.getElementById("previewEducation").innerHTML =
        "المستوى التعليمي: " + (education || "-") + "<br>" +
        "اللغة الإنجليزية: " + (levelMap[englishLevel] || englishLevel) + "<br>" +
        "اللغة العربية: " + (levelMap[arabicLevel] || arabicLevel);

    document.getElementById("previewExperience").innerHTML =
        "الدولة: " + (country || "-") + "<br>" +
        "المدة: " + (period || "-") + "<br>" +
        "الوظيفة: " + (position || "-") + "<br>" +
        "خبرات أخرى: " + (otherExperience || "-");

    document.getElementById("previewSkills").innerHTML =
        "التنظيف: " + (levelMap[cleaning] || cleaning) + "<br>" +
        "الطبخ: " + (levelMap[cooking] || cooking) + "<br>" +
        "الطبخ العربي: " + (levelMap[arabicCooking] || arabicCooking) + "<br>" +
        "الغسيل: " + (levelMap[washing] || washing) + "<br>" +
        "الكوي: " + (levelMap[ironing] || ironing) + "<br>" +
        "رعاية الرضع: " + (levelMap[babysitting] || babysitting) + "<br>" +
        "رعاية الأطفال: " + (levelMap[childrenCare] || childrenCare) + "<br>" +
        "تعليم الأطفال: " + (levelMap[tutoring] || tutoring) + "<br>" +
        "رعاية كبار السن: " + (levelMap[disabledCare] || disabledCare);

    // Handle photo upload
    const photo = document.getElementById("photo").files[0];
    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("previewPhoto").src = e.target.result;
        };
        reader.readAsDataURL(photo);
    }

    // Handle passport scan upload
    const passportScan = document.getElementById("passportScan").files[0];
    if (passportScan) {
        const reader2 = new FileReader();
        reader2.onload = function(e) {
            document.getElementById("previewPassportScan").src = e.target.result;
        };
        reader2.readAsDataURL(passportScan);
    }

    // Scroll to preview
    document.getElementById("preview").scrollIntoView({ behavior: 'smooth' });

    // Show success message
    showNotification("✅ تم تحديث المعاينة بنجاح / Preview updated successfully!");
}

// ===============================
// RESET FORM
// ===============================

function resetForm() {
    if (confirm("هل أنت متأكد من إعادة تعيين النموذج؟\nAre you sure you want to reset the form?")) {
        document.querySelectorAll('input[type="text"], input[type="date"], input[type="number"], textarea').forEach(input => {
            input.value = '';
        });
        document.querySelectorAll('select').forEach(select => {
            select.selectedIndex = 0;
        });
        document.getElementById("children").value = "0";
        document.getElementById("previewPhoto").src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23f0f0f0' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='20'%3ENo Photo%3C/text%3E%3C/svg%3E";
        document.getElementById("previewPassportScan").src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23f0f0f0' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='20'%3ENo Passport Scan%3C/text%3E%3C/svg%3E";
        showNotification("✅ تم إعادة تعيين النموذج / Form reset successfully!");
    }
}

// ===============================
// NOTIFICATION SYSTEM
// ===============================

function showNotification(message) {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===============================
// EVENT LISTENERS
// ===============================

document.getElementById("nationality").addEventListener("change", autoSalary);
document.getElementById("experienceType").addEventListener("change", autoSalary);

// Auto-update preview on certain field changes (optional)
document.getElementById("dob").addEventListener("change", function() {
    const validation = validateAge(this.value);
    if (!validation.valid) {
        alert(validation.message);
        this.value = "";
    }
});

// Initialize salary on page load
window.addEventListener('DOMContentLoaded', function() {
    autoSalary();
});
