const Fname = document.getElementById("fname");
// const Lname = document.getElementById("lname");
const email = document.getElementById("email");
const subject = document.getElementById("subject")
const phone = document.getElementById("phone");
// const subject = document.getElementById("subject"); // commented out in HTML
const mess = document.getElementById("textarea");
// const service = document.getElementById("service"); // not in this form


function sendEmail() {
    if (!Fname.value || !email.value || !phone.value || !mess.value) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: `Try to fill out the empty box in the form`,
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        const bodyMessage = `
            Full Name: ${Fname.value}
            Email: ${email.value}
            Phone Number: ${phone.value}
            Subjet:${subject.value}
            Message: ${mess.value}
        `;

        const param = {
            to_name: "GHH Customer Support Team",
            from_name: "GHH Customer Service Team",
            message: bodyMessage
        };

        const service_Id = "service_slien8b";
        const template_Id = "template_ntpi8mx";

        emailjs.send(service_Id, template_Id, param)
            .then((res) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `We will reach out to contact you`,
                    showConfirmButton: false,
                    timer: 1500
                });

                document.getElementById("contactForm").reset();
            })
            .catch((err) => console.log(err));
    }
}


