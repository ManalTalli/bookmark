const inputs = document.querySelectorAll(".form-control");
const bookMarkForm = document.querySelector(".bookMarkForm");
const sitesData = document.querySelector(".sitesData");
let sites = JSON.parse(localStorage.getItem("sites"));
const deleteAllBtn = document.querySelector(".deleteAll");

const validateSiteName = () => {
    const regex = /^[A-Z][a-zA-Z]{2,6}$/;
    if (!regex.test(inputs[0].value)) {
        inputs[0].classList.add('is-invalid');
        inputs[0].classList.remove('is-valid');
        document.querySelector(".nameError").textContent = "invalid site name";
        return false;
    }
    else {
        inputs[0].classList.add('is-valid');
        inputs[0].classList.remove('is-invalid');
        document.querySelector(".nameError").textContent = "";
        return true;
    }
}
inputs[0].addEventListener("input",validateSiteName);

const validateSiteURL = () => {
    const regex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    if (!regex.test(inputs[1].value)) {
        inputs[1].classList.add('is-invalid');
        inputs[1].classList.remove('is-valid');
        document.querySelector(".urlError").textContent = "invalid URL";
        return false;
    }
    else {
        inputs[1].classList.add('is-valid');
        inputs[1].classList.remove('is-invalid');
        document.querySelector(".urlError").textContent = "";
        return true;
    }
}
inputs[1].addEventListener("input",validateSiteURL);

const validateEmail= () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(inputs[2].value)) {
        inputs[2].classList.add('is-invalid');
        inputs[2].classList.remove('is-valid');
        document.querySelector(".nameError").textContent = "invalid email";
        return false;
    }
    else {
        inputs[2].classList.add('is-valid');
        inputs[2].classList.remove('is-invalid');
        document.querySelector(".emailError").textContent = "";
        return true;
    }
}
inputs[2].addEventListener("input",validateEmail);

const validatepassword = () => {
    const regex = /^.{8,}$/;
    if (!regex.test(inputs[3].value)) {
        inputs[3].classList.add('is-invalid');
        inputs[3].classList.remove('is-valid');
        document.querySelector(".passError").textContent = "invalid password";
        return false;
    }
    else {
        inputs[3].classList.add('is-valid');
        inputs[3].classList.remove('is-invalid');
        document.querySelector(".nameError").textContent = "";
        return true;
    }
}
inputs[3].addEventListener("input",validatepassword);


bookMarkForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    validateSiteName();
    validateSiteURL();
    validateEmail();
    validatepassword();
      
    const site = {
        name: inputs[0].value,
        url: inputs[1].value,
        email: inputs[2].value,
        password: inputs[3].value,
    }
    console.log(site);
    sites.push(site);
    localStorage.setItem("sites", JSON.stringify(sites));
});

const displaySites = () => {
    console.log(sites);
    const result = sites.map((site) =>
        `<tr>
            <td>${site.name}</td>
            <td>${site.url}</td>
            <td>${site.email}</td>
            <td>${site.password}</td>
        </tr>`
    );
    console.log(result);
    document.querySelector(".sitesData").innerHTML = result;
}

displaySites();



deleteAllBtn.addEventListener("click", () => {
    localStorage.removeItem(sites);
    sites = [];
    displaySites();
}
);