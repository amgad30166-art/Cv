// ===============================
// UTILITIES
// ===============================

function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function getValue(id) {
    return document.getElementById(id).value.trim();
}

function setText(id, value) {
    document.getElementById(id).innerText = value || "";
}

// ===============================
// SALARY RULES
// ===============================

function applySalaryRules(nationality, experience) {
    if (nationality === "Kenya") {
        return experience === "Fresh" ? 850 : 1000;
    }
    if (nationality === "Uganda") {
        return experience === "Fresh" ? 900 : 1000;
    }
    if (nationality === "Ethiopia") {
        return 1000;
    }
    return getValue("salary");
}

// ===============================
// BUILD WORKER OBJECT
// ===============================

function collectWorkerData() {

    const dob = getValue("dob");
    const age = dob ? calculateAge(dob) : "";

    if (age && (age < 21 || age > 40)) {
        alert("Age must be between 21 and 40");
        return null;
    }

    const nationality = getValue("nationality");
    const experience = getValue("experienceType");

    const worker = {
        office: getValue("officeName"),
        name: getValue("fullName"),
        gender: getValue("gender"),
        age: age,
        nationality: nationality,
        religion: getValue("religion"),
        marital: getValue("maritalStatus"),
        children: getValue("children"),
        profession: getValue("profession"),
        contract: getValue("contract"),
        mobile: getValue("mobileNumber"),
        salary: applySalaryRules(nationality, experience)
    };

    return worker;
}

// ===============================
// UPDATE PREVIEW
// ===============================

function updatePreview(worker) {

    setText("previewOffice", worker.office);
    setText("previewName", worker.name);

    setText("previewHero",
        `الجنسية: ${worker.nationality} | العمر: ${worker.age} | الديانة: ${worker.religion}`);

    setText("previewMarital",
        `الحالة الاجتماعية: ${worker.marital} | عدد الأطفال: ${worker.children}`);

    setText("previewProfession", `المهنة: ${worker.profession}`);
    setText("previewSalary", worker.salary);
    setText("previewContract", `مدة العقد: ${worker.contract}`);
    setText("previewMobile", `رقم الهاتف: ${worker.mobile}`);
}

// ===============================
// IMAGE HANDLING
// ===============================

function loadImage(inputId, previewId) {
    const file = document.getElementById(inputId).files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById(previewId).src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// ===============================
// MAIN ENTRY
// ===============================

function generateCV() {

    const worker = collectWorkerData();
    if (!worker) return;

    updatePreview(worker);

    loadImage("photo", "previewPhoto");
    loadImage("passportScan", "previewPassportScan");
}
