// DATA TRANSLATION MAPS
const maps = {
    nationality: { "Kenya": "كينيا", "Uganda": "أوغندا", "Ethiopia": "إثيوبيا", "Philippines": "الفلبين", "India": "الهند", "Bangladesh": "بنجلاديش", "Sri Lanka": "سيريلانكا" },
    religion: { "Muslim": "مسلم", "Christian": "مسيحي", "Non-Muslim": "غير مسلم" },
    marital: { "Single": "عزباء", "Married": "متزوجة", "Divorced": "مطلقة" },
    profession: { "Housemaid": "عاملة منزلية", "Cook": "طباخة", "Nanny": "مربية أطفال", "Driver": "سائق خاص" },
    contract: { "2 Years": "سنتان", "1 Year": "سنة واحدة" },
    level: { "Poor": "ضعيف", "Fair": "مقبول", "Good": "جيد", "Excellent": "ممتاز", "Little": "قليل", "Primary": "ابتدائي", "Secondary": "متوسط", "High School": "ثانوي", "College": "جامعي" },
    skills: { cleaning: "التنظيف", washing: "الغسيل", ironing: "الكوي", cooking: "الطبخ", arabicCooking: "الطبخ العربي", babysitting: "رعاية الرضع", disabledCare: "رعاية كبار السن" }
};

function getValue(id) { const el = document.getElementById(id); return el ? el.value : ""; }
function setText(id, text) { const el = document.getElementById(id); if (el) el.innerText = text; }

function calculateAge(dob) {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function autoSalary() {
    const nat = getValue("nationality");
    const exp = getValue("experienceType");
    const salaryField = document.getElementById("salary");
    let amount = "";
    if (nat === "Kenya") amount = exp === "Fresh" ? 850 : 900;
    else if (nat === "Uganda") amount = exp === "Fresh" ? 900 : 1000;
    else if (nat === "Ethiopia") amount = 1000;
    
    if (amount !== "") salaryField.value = amount;
}

function updatePreview() {
    // Basic Fields
    setText("previewOffice", getValue("officeName"));
    setText("previewName", getValue("fullName").toUpperCase());
    setText("previewTown", getValue("livingTown"));
    setText("previewMobile", getValue("mobileNumber"));
    setText("previewChildren", getValue("children"));
    setText("previewHeight", getValue("height") + " cm");
    setText("previewWeight", getValue("weight") + " kg");
    setText("previewSalary", getValue("salary") + " ريال");
    setText("previewPassportNum", getValue("passportNumber"));
    setText("previewIssue", getValue("issueDate"));
    setText("previewExpiry", getValue("expiryDate"));
    setText("previewCountry", getValue("country"));
    setText("previewPeriod", getValue("period"));
    setText("previewPosition", getValue("position"));

    // Translated Fields
    setText("previewNationality", maps.nationality[getValue("nationality")] || getValue("nationality"));
    setText("previewReligion", maps.religion[getValue("religion")] || getValue("religion"));
    setText("previewMarital", maps.marital[getValue("maritalStatus")] || getValue("maritalStatus"));
    setText("previewProfession", maps.profession[getValue("profession")] || getValue("profession"));
    setText("previewContract", maps.contract[getValue("contract")] || getValue("contract"));
    setText("previewEducation", maps.level[getValue("education")] || getValue("education"));
    setText("previewEnglish", maps.level[getValue("englishLevel")] || getValue("englishLevel"));
    setText("previewArabic", maps.level[getValue("arabicLevel")] || getValue("arabicLevel"));

    // Age
    setText("previewDob", getValue("dob"));
    setText("previewAge", calculateAge(getValue("dob")));

    // Skills Grid
    const skillsContainer = document.getElementById("previewSkillsGrid");
    skillsContainer.innerHTML = ""; 
    ["cleaning", "washing", "ironing", "cooking", "arabicCooking", "babysitting", "disabledCare"].forEach(skillID => {
        const levelVal = getValue(skillID);
        const div = document.createElement("div");
        div.className = "skill-tag";
        div.innerHTML = `${maps.skills[skillID]} <br> <span>${maps.level[levelVal] || levelVal}</span>`;
        skillsContainer.appendChild(div);
    });

    // Photos
    const photoInput = document.getElementById("photo");
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) { document.getElementById("previewPhoto").src = e.target.result; };
        reader.readAsDataURL(photoInput.files[0]);
    }
    const passportInput = document.getElementById("passportScan");
    if (passportInput.files && passportInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) { document.getElementById("previewPassportScan").src = e.target.result; };
        reader.readAsDataURL(passportInput.files[0]);
    }
}

document.getElementById("nationality").addEventListener("change", autoSalary);
document.getElementById("experienceType").addEventListener("change", autoSalary);
