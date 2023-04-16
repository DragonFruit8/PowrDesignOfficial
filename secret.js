var resumeButton = document.getElementById('resumeButton');
// const filename = "./docs/JTB Resume.pdf";

  // When the user scrolls down 20px from the top of the document, show the button
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

    
resumeButton.addEventListener('click', function checkAuth(){
     var emp = prompt("Enter your password!")
     if(emp ==  `only1knows2@`){
      onStartedDownload();
      
    } else{
      alert("Wrong!");
    }
  });

 function checkAuth(onStartedDownload) {
  
  function onStartedDownload() {
    console.log(`Started downloading: ${id}`);
  }
  
  function onFailed(error) {
    console.log(`Download failed: ${error}`);
  }
  
  let downloadUrl = "./docs/JTB Resume.pdf";
  
  let downloading = downloadUrl.downloads.download({
    url : downloadUrl,
    filename : './docs/JTB Resume.pdf',
    conflictAction : 'uniquify'
  });
  
  downloading.then(onStartedDownload, onFailed);}