// Form submission handlers for animation examples

export function submitForm1() {
    const btn = document.getElementById('btn1');
    const loading = document.getElementById('loading1');
    const success = document.getElementById('success1');

    btn.disabled = true;
    loading.classList.remove('hidden');

    setTimeout(() => {
        loading.classList.add('hidden');
        success.classList.remove('hidden');
        setTimeout(() => {
            success.classList.add('hidden');
            btn.disabled = false;
        }, 4000);
    }, 2000);
}

export function submitForm2() {
    const btn = document.getElementById('btn2');
    const btnText = document.getElementById('btnText2');
    const btnSpinner = document.getElementById('btnSpinner2');
    const success = document.getElementById('success2');

    btn.disabled = true;
    btnText.textContent = 'Submitting';
    btnSpinner.classList.remove('hidden');

    setTimeout(() => {
        btnText.textContent = 'Submit Form';
        btnSpinner.classList.add('hidden');
        success.classList.remove('hidden');
        btn.disabled = false;
        setTimeout(() => success.classList.add('hidden'), 4000);
    }, 2000);
}

export function submitForm3() {
    const btn = document.getElementById('btn3');
    const loading = document.getElementById('loading3');
    const success = document.getElementById('success3');

    btn.disabled = true;
    loading.classList.remove('hidden');

    setTimeout(() => {
        loading.classList.add('hidden');
        success.classList.remove('hidden');
        setTimeout(() => {
            success.classList.add('hidden');
            btn.disabled = false;
        }, 4000);
    }, 2000);
}

export function submitForm4() {
    const btn = document.getElementById('btn4');
    const loading = document.getElementById('loading4');
    const success = document.getElementById('success4');

    btn.disabled = true;
    loading.classList.remove('hidden');

    setTimeout(() => {
        loading.classList.add('hidden');
        success.classList.remove('hidden');
        setTimeout(() => {
            success.classList.add('hidden');
            btn.disabled = false;
        }, 4000);
    }, 2000);
}

export function submitForm5() {
    const overlay = document.getElementById('overlay5');
    const loading = document.getElementById('loading5');
    const success = document.getElementById('success5');

    overlay.classList.remove('hidden');
    loading.classList.remove('hidden');
    success.classList.add('hidden');

    setTimeout(() => {
        loading.classList.add('hidden');
        success.classList.remove('hidden');
    }, 2000);
}

export function closeOverlay() {
    document.getElementById('overlay5').classList.add('hidden');
}
