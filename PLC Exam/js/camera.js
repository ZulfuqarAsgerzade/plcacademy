// Access camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        document.getElementById('snap').style.display = "block";

        var video = document.getElementById('video');
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        alert("Kameradan istifadəyə icazə verilməlidir! \n" + 
              "Səhifəni yenidən yükləyib qeydiyyatınızı tamamlayın!");
    });


// Taking and saving photos
document.getElementById("snap").addEventListener("click", function() {
    event.preventDefault();

    document.getElementById('video').style.display = "none";
    
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');

    // Get the image from the video stream and draw it to the canvas
    context.drawImage(video, 0, 0, 350, 200);

    // Convert the Canvas content to a data URL
    var dataUrl = canvas.toDataURL('image/png');

    // Put the captured photo into the img element
    document.getElementById('student_photo').src = dataUrl;

    document.getElementById('student_photo').style.cssText = "display: block; position: absolute;";

    document.getElementById("snap").style.display = "none";

    // Optionally, you can save this dataURL or send it to the server
});


document.getElementById("confirm").addEventListener("click", function(event) {
    event.preventDefault();

    let studentName = document.getElementById("student_name").value;
    let studentSurname = document.getElementById("student_surname").value;
    let studentEmail = document.getElementById("student_email").value;
    let studentPhotoSrc = document.getElementById("student_photo").src;

    let lettersPattern = /^[A-Za-zĞÜŞİÖÇğüşiöç]+$/;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (studentName.trim() != "" && 
        studentName.trim() != "" & 
        studentPhotoSrc.trim() != "") 
    {
        if (lettersPattern.test(studentName) && 
            lettersPattern.test(studentSurname) &&
            emailPattern.test(studentEmail)) 
        {
            document.getElementById("student_password").style.display = "flex";
            document.getElementsByClassName("registration_submitBtn")[0].style.display = "block";
    
            
            document.getElementsByClassName("camera_btns")[0].style.display = "none";
            document.getElementById("confirm").style.display = "none";
        }
        else 
        {
            alert("Daxil edilmiş informasiya(lar) doğru şəkildə deyil!");
        }
    }
    else 
    {
        alert("Tələb olunan informasiyalar təmin edilməlidir!");
    }

});