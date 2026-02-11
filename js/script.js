// ===============================
// 1. DATA TRANSLATION MAPS
// ===============================
const maps = {
    nationality: {
        "Kenya": "كينيا",
        "Uganda": "أوغندا",
        "Ethiopia": "إثيوبيا",
        "Philippines": "الفلبين",
        "India": "الهند",
        "Bangladesh": "بنجلاديش",
        "Sri Lanka": "سيريلانكا"
    },
    religion: {
        "Muslim": "مسلم",
        "Christian": "مسيحي",
        "Non-Muslim": "غير مسلم"
    },
    marital: {
        "Single": "عزباء",
        "Married": "متزوجة",
        "Divorced": "مطلقة"
    },
    gender: {
        "Female": "أنثى",
        "Male": "ذكر"
    },
    profession: {
        "Housemaid": "عاملة منزلية",
        "Cook": "طباخة",
        "Nanny": "مربية أطفال",
        "Driver": "سائق خاص"
    },
    experience: {
        "Fresh": "جديدة",
        "EX": "خبرة سابقة"
    },
    contract: {
        "2 Years": "سنتان",
        "1 Year": "سنة واحدة"
    },
    level: {
        "Poor": "ضعيف",
        "Fair": "مقبول",
        "Good": "جيد",
        "Excellent": "ممتاز",
        "Little": "قليل",
        "Primary": "ابتدائي",
        "Secondary": "متوسط",
        "High School": "ثانوي",
        "College": "جامعي"
    },
    skills: {
        cleaning: "التنظيف",
        washing: "الغسيل",
        ironing: "الكوي",
        cooking: "الطبخ",
        arabicCooking: "الطبخ العربي",
        babysitting: "رعاية الرضع",
        disabledCare: "رعاية كبار السن"
    }
};

// ===============================
// 2. HELPER FUNCTIONS
// ===============================

function getValue(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
}

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

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
// 3. AUTO SALARY LOGIC
// ===============================
function autoSalary() {
    const nationality = getValue("nationality");
    const experience = getValue("experienceType");
    const salaryField = document.getElementById("salary");

    let amount = "";

    if (nationality === "Kenya") {
        amount = experience === "Fresh" ? 850 : 900;
    } else if (nationality === "Uganda") {
        amount = experience === "Fresh" ? 900 : 1000;
    } else if (nationality === "Ethiopia") {
        amount = 1000;
    } else if (nationality === "Bangladesh") {
        amount = 1000; // Example
    }

    if (amount !== "") {
        salaryField.value = amount;
    }
}

// ===============================
// 4. MAIN PREVIEW UPDATE
// ===============================
function updatePreview() {
    
    // 1. Basic Text Fields
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

    // 2. Mapped Fields (English -> Arabic)
    const nat = getValue("nationality");
    setText("previewNationality", maps.nationality[nat] || nat);

    const rel = getValue("religion");
    setText("previewReligion", maps.religion[rel] || rel);

    const mar = getValue("maritalStatus");
    setText("previewMarital", maps.marital[mar] || mar);

    const prof = getValue("profession");
    setText("previewProfession", maps.profession[prof] || prof);

    const cont = getValue("contract");
    setText("previewContract", maps.contract[cont] || cont);

    // 3. Education & Levels
    const edu = getValue("education");
    setText("previewEducation", maps.level[edu] || edu);

    const eng = getValue("englishLevel");
    setText("previewEnglish", maps.level[eng] || eng);

    const ara = getValue("arabicLevel");
    setText("previewArabic", maps.level[ara] || ara);

    // 4. Age Calculation
    const dob = getValue("dob");
    const age = calculateAge(dob);
    setText("previewDob", dob);
    setText("previewAge", age);
    
    if (age && (age < 21 || age > 50)) {
        alert("Warning: Age is " + age + ". Usually should be between 21-45.");
    }

    // 5. Skills Grid Generation
    const skillsContainer = document.getElementById("previewSkillsGrid");
    skillsContainer.innerHTML = ""; // Clear existing

    // List of skill IDs
    const skillList = ["cleaning", "washing", "ironing", "cooking", "arabicCooking", "babysitting", "disabledCare"];
    
    skillList.forEach(skillID => {
        const levelVal = getValue(skillID);
        const arabicLabel = maps.skills[skillID];
        const arabicLevel = maps.level[levelVal] || levelVal;

        // Create HTML for skill
        const div = document.createElement("div");
        div.className = "skill-tag";
        div.innerHTML = `${arabicLabel} <br> <span>${arabicLevel}</span>`;
        skillsContainer.appendChild(div);
    });

    // 6. Image Handling (Photo)
    const photoInput = document.getElementById("photo");
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("previewPhoto").src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    }

    // 7. Image Handling (Passport Scan)
    const passportInput = document.getElementById("passportScan");
    if (passportInput.files && passportInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("previewPassportScan").src = e.target.result;
        };
        reader.readAsDataURL(passportInput.files[0]);
    }
}

// Event Listeners for Salary Auto-fill
document.getElementById("nationality").addEventListener("change", autoSalary);
document.getElementById("experienceType").addEventListener("change", autoSalary);
