// ===============================
// AGE CALCULATION
// ===============================

function calculateAge(dob) {
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
    }
}

// ===============================
// TRANSLATION DICTIONARIES
// ===============================

const nationalityMap = {
    "Kenya": "كينيا",
    "Uganda": "أوغندا",
    "Ethiopia": "إثيوبيا",
    "Philippines": "الفلبين",
    "India": "الهند",
    "Bangladesh": "بنجلاديش"
};

const religionMap = {
    "Muslim": "مسلمة",
    "Christian": "مسيحية"
};

const experienceMap = {
    "Fresh": "بدون خبرة",
    "EX": "خبرة سابقة"
};

const maritalMap = {
    "Single": "أعزب",
    "Married": "متزوج"
};

const contractMap = {
    "2 Years": "سنتان",
    "1 Year": "سنة واحدة"
};

const medicalMap = {
    "Yes": "نعم",
    "No": "لا"
};

const levelMap = {
    "Poor": "ضعيف",
    "Fair": "مقبول",
    "Good": "جيد",
    "Excellent": "ممتاز",
    "Fluent": "ممتاز",
    "Very Good": "جيد جداً"
};

// ===============================
// MAIN UPDATE FUNCTION
// ===============================

function updatePreview() {

    // Basic Info
    const office = document.getElementById("officeName").value;
    const name = document.getElementById("fullName").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const livingTown = document.getElementById("livingTown").value;
    const nationality = document.getElementById("nationality").value;
    const religion = document.getElementById("religion").value;
    const experience = document.getElementById("experienceType").value;
    const marital = document.getElementById("maritalStatus").value;
    const children = document.getElementById("children").value;
    const profession = document.getElementById("profession").value;
    const contract = document.getElementById("contract").value;
    const mobile = document.getElementById("mobileNumber").value;
    const salary = document.getElementById("salary").value;

    // Passport
    const passportNumber = document.getElementById("passportNumber").value;
    const issueDate = document.getElementById("issueDate").value;
    const expiryDate = document.getElementById("expiryDate").value;

    // Education
    const education = document.getElementById("education").value;
    const englishLevel = document.getElementById("englishLevel").value;
    const arabicLevel = document.getElementById("arabicLevel").value;

    // Experience
    const country = document.getElementById("country").value;
    const period = document.getElementById("period").value;
    const position = document.getEle
