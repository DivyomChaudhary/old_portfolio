//contacts button
document.getElementById('contact-down').addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default button behavior
          window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth' // For smooth scrolling
          });
      });

    //visualize button
    const switchButton = document.getElementById('switch-button');
    const backButton = document.getElementById('back-button');
    const contentContainer = document.getElementById('content-container');
    const progressContainer = document.getElementById('progress-container');

    switchButton.addEventListener('click', () => {
        contentContainer.classList.add('hide');
        setTimeout(() => {
            contentContainer.classList.add('d-none');
            progressContainer.classList.add('show');
        }, 500);
    });

    backButton.addEventListener('click', () => {
        progressContainer.classList.remove('show');
        contentContainer.classList.remove('d-none');
        setTimeout(() => {
            contentContainer.classList.remove('hide');
        }, 500);
    });

//  Back to top animation smooth
const backToTopButton = document.querySelector('.back-to-top');

backToTopButton.addEventListener('click', function(event) {
  event.preventDefault(); 

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});


    // Emailjs configuration

    function sendMail(){
        
        let parms={
            name: document.getElementById("inputName").value,
            subject: document.getElementById("inputSubject").value,
            email: document.getElementById("inputEmail").value,
            message: document.getElementById("message").value,
        }

        document.getElementById("inputForm").reset();
        emailjs.send("service_7jwdjd4","template_a30hwmv",parms).then(alert("Success!"))

    }
