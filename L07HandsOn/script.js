function regexChecker () {
    let firstname = document.getElementById("#firstName");
    let lastname = document.getElementById("#lastName");
    let firstNameRegex = /[A - Za - z];
    let lastNameRegex = /[A - Za - z];
    if (firstname.matches(firstNameRegex)) {
        alert('Yay! Your inputs were all correct!');
        console.log(true);
    }

    else (lastname.matches(lastNameRegex)) {
        alert('Oh no! Thats an Invalid format!');
        console.log(true);
    }


}