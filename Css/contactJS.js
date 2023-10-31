const inputs = document.getElementsByClassName('contact-input');
      const btn = document.getElementById('sendbtn');
      let hasError = false;

      btn.addEventListener('click', () => {
        for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value == ''){
          hasError = true;
        }else{
          hasError = false;
        }
      }

      if(hasError){
        alert('Please fill in all the form inputs');
      }else {
        alert('Thanks!. Your message was submitted successfully!');
      }
      })