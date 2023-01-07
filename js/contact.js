function sendMail() {
    var params = {
      first_name: document.getElementById("first_Name").value,
      last_name: document.getElementById("last_Name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone_number").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_6ty95kk";
    const templateID = "template_76w01ug";
    
    // const serviceID = "service_glpuran";
    // const templateID = "template_pmzn3l9";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("first_Name").value = "";
          document.getElementById("last_Name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone_number").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }