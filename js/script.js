const sections = document.querySelectorAll('.form-section');

sections.forEach(section => {
    const form = section.querySelector('.form-control.form-default');
    const label = section.querySelector('.form-label');
    console.log(section)
    if (form) {
        form.addEventListener('focusout', (e) => {
            if (form.value.length > 0) {
                console.log(form.value.length)
                form.classList = "form-control form-default form-default-active";
                label.classList = "form-label label-active";
            } else {
                form.classList = "form-control form-default";
                label.classList = "form-label";
            }
        })
    }
});

