//function open_calendar_add() {
//    window.open("calendar_add.html", "_self");
//}

function openSumStep(num) {
    switch (num) {
    case 1:
        window.location = 'summary_step1.html';
        break;
    case 2:
        window.location = 'summary_step2.html';
        break;
    case 3:
        window.location = 'summary_step3.html';
        break;
    case 4:
        window.location = 'summary_step4.html';
        break;
    }
}

function openPatientStep(num) {
    switch (num) {
    case 1:
        window.location = 'patient_step1.html';
        break;
    case 2:
        window.location = 'patient_step2.html';
        break;
    case 3:
        window.location = 'patient_step3.html';
        break;
    case 4:
        window.location = 'patient_step4.html';
        break;
    }
}

function openPatient(num) {
    switch (num) {
    case 1:
        window.location = 'patient_view.html';
        break;
    case 2:
        window.location = 'patient_print.html';
        break;
    case 3:
        window.location = 'patient_edit.html';
        break;
    }
}