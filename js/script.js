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

function updatePreview() {

    const name = document.getElementById("fullName").value;
    const dob = document.getElementById("dob").value;
    const nationality = document.getElementById("nationality").value;
    const religion = document.getElementById("religion").value;
    const experience = document.getElementById("experienceType").value;
    const marital = document.getElementById("maritalStatus").value;
    const children = document.getElementById("children").value;
    const profession = document.getElementById("profession").value;
    const salary = document.getElementById("salary").value;
    const photo = document.getElementById("photo").files[0];

    let age = "";
    if (dob) {
        age = calculateAge(dob);

        if (age < 21 || age > 40) {
            alert("Age must be between 21 and 40");
            return;
        }
    }

    document.getElementById("previewName").innerText = name;
    document.getElementById("previewHero").innerText =
        nationality + " | " + age + " Years | " + religion + " | " + experience;

    document.getElementById("previewSalary").innerText = salary;
    document.getElementById("previewMarital").innerText =
        marital + " | " + children + " Children";

    document.getElementById("previewProfession").innerText = profession;

    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("previewPhoto").src = e.target.result;
        };
        reader.readAsDataURL(photo);
    }
}

document.getElementById("nationality").addEventListener("change", autoSalary);
document.getElementById("experienceType").addEventListener("change", autoSalary);
