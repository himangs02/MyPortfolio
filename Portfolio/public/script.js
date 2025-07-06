
  const progressBar = document.getElementById("progressBar");
  const Progress=document.getElementById("Progress");

  document.getElementById("JS").addEventListener("mouseenter", () => {
    progressBar.style.width = "86%";
    Progress.innerHTML=`<p>86%</p>`
  });

  document.getElementById("HTML").addEventListener("mouseenter", () => {
    progressBar.style.width = "95%";
    Progress.innerHTML=`<p>95%</p>`
  });

  document.getElementById("CSS").addEventListener("mouseenter", () => {
    progressBar.style.width = "85%";
    Progress.innerHTML=`<p>85%</p>`
  });

  document.getElementById("React").addEventListener("mouseenter", () => {
    progressBar.style.width = "70%";
    Progress.innerHTML=`<p>70%</p>`
  });

  document.getElementById("Python").addEventListener("mouseenter",()=>{
    progressBar.style.width="65%";
    Progress.innerHTML=`<p>65%</p>`

  })

  document.getElementById("Ex").addEventListener("mouseenter",()=>{
    progressBar.style.width="50%";
    Progress.innerHTML=`<p>50%</p>`
  })

  document.getElementById("Mongo").addEventListener("mouseenter",()=>{
    progressBar.style.width="40%";
    Progress.innerHTML=`<p>40%</p>`
  })

    document.getElementById("Canva").addEventListener("mouseenter",()=>{
    progressBar.style.width="80%";
    Progress.innerHTML=`<p>80%</p>`
  })
    document.getElementById("Photo").addEventListener("mouseenter",()=>{
    progressBar.style.width="80%";
    Progress.innerHTML=`<p>80%</p>`
  })
    document.getElementById("illus").addEventListener("mouseenter",()=>{
    progressBar.style.width="85%";
    Progress.innerHTML=`<p>85%</p>`
  })
    document.getElementById("HTML5").addEventListener("mouseenter",()=>{
    progressBar.style.width="80%";
    Progress.innerHTML=`<p>80%</p>`
  })
    document.getElementById("tailwind").addEventListener("mouseenter",()=>{
    progressBar.style.width="90%";
    Progress.innerHTML=`<p>90%</p>`
  })

  document.getElementById("cont").addEventListener("mouseleave", () => {
    progressBar.style.width = "0%";
    Progress.innerHTML="";
  });



  


  const form = document.getElementById('contactForm');

  form.addEventListener('submit', async (e)=> {
    e.preventDefault(); // Stop form from refreshing the page

    const formData = new FormData(form);
    const data = new URLSearchParams(formData);

    await fetch('/submit', {
      method: 'POST',
      body: data,
    });

    // Optional: Reset form or show a toast
    form.reset(); // Form stays on same page
  });






