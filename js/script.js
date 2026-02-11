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

const experienceMap = {
    Fresh: "بدون خبرة",
    EX: "خبرة سابقة"
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
// DYNAMIC GENDER LOGIC
// ===============================

function getReligionArabic(religion, gender) {
    if (religion === "Muslim") {
        return gender === "Male" ? "مسلم" : "مسلمة";
    }
    if (religion === "Christian") {
        return gender === "Male" ? "مسيحي" : "مسيحية";
    }
    return religion;
}

function getMaritalArabic(status, gender) {
    if (status === "Single") {
        return gender === "Male" ? "أعزب" : "عزباء";
    }
    if (status === "Married") {
        return "متزوج";
    }
    return status;
}

// ===============================
// MAIN FUNCTION
// ===============================
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
function createRow(label, value) {
    return `
        <div class="info-row">
            <span class="info-label">${label}</span>
            <span class="info-value">${value || "-"}</span>
        </div>
    `;
}

function updatePreview() {

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

    let age = "";
    if (dob) {
        age = calculateAge(dob);
        if (age < 21 || age > 40) {
            alert("العمر يجب أن يكون بين 21 و 40 سنة");
            return;
        }
    }

    document.getElementById("previewOffice").innerText = office;
    document.getElementById("previewName").innerText = capitalizeWords(name);

    document.getElementById("previewHero").innerHTML =
        "الجنسية: " + (nationalityMap[nationality] || nationality) +
        " | العمر: " + age +
        " | الديانة: " + getReligionArabic(religion, gender) +
        " | نوع الخبرة: " + (experienceMap[experience] || experience);

    document.getElementById("previewMarital").innerText =
        "الحالة الاجتماعية: " + getMaritalArabic(marital, gender) +
        " | عدد الأطفال: " + children;

    document.getElementById("previewProfession").innerText =
        "المهنة: " + profession;

    document.getElementById("previewSalary").innerText = salary;

    document.getElementById("previewContract").innerText =
        "مدة العقد: " + (contractMap[contract] || contract);

    document.getElementById("previewMobile").innerText =
        "رقم الهاتف: " + mobile;

    document.getElementById("previewPersonal").innerHTML =
    createRow("الجنس", (gender === "Male" ? "ذكر" : "أنثى")) +
    createRow("تاريخ الميلاد", dob) +
    createRow("مكان الإقامة", livingTown);


    document.getElementById("previewPassport").innerHTML =
        "رقم الجواز: " + passportNumber + "<br>" +
        "تاريخ الإصدار: " + issueDate + "<br>" +
        "تاريخ الانتهاء: " + expiryDate;

   document.getElementById("previewPhysical").innerHTML =
    "الطول: " + height + " سم<br>" +
    "الوزن: " + weight + " كجم<br>" +
    "لائقة طبياً: " + (medicalMap[medical] || medical);


    document.getElementById("previewEducation").innerHTML =
        "المستوى التعليمي: " + education + "<br>" +
        "اللغة الإنجليزية: " + (levelMap[englishLevel] || englishLevel) + "<br>" +
        "اللغة العربية: " + (levelMap[arabicLevel] || arabicLevel);

    document.getElementById("previewExperience").innerHTML =
        "الدولة: " + country + "<br>" +
        "المدة: " + period + "<br>" +
        "الوظيفة: " + position + "<br>" +
        "خبرات أخرى: " + otherExperience;

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

    const photo = document.getElementById("photo").files[0];
    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("previewPhoto").src = e.target.result;
        };
        reader.readAsDataURL(photo);
    }

    const passportScan = document.getElementById("passportScan").files[0];
    if (passportScan) {
        const reader2 = new FileReader();
        reader2.onload = function(e) {
            document.getElementById("previewPassportScan").src = e.target.result;
        };
        reader2.readAsDataURL(passportScan);
    }
}

document.getElementById("nationality").addEventListener("change", autoSalary);
document.getElementById("experienceType").addEventListener("change", autoSalary);
