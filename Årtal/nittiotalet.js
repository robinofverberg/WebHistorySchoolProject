function closePopUp(){
    const element = document.getElementById("bigPop-Up") 
    element.style.display = "none"
    console.log ("congrats, you have virus")
    setTimeout(() => element.style.display = "block", 20000)
    setTimeout(getLocalStream , 10000)


}
function getLocalStream() {
    navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
    }).catch( err => {
        console.log("u got an error:" + err)
    });
}

var elem = document.documentElement;

function goFullScreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  function goWindowedScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }

navigator.clipboard.writeText("Robban Owns You.")
function goHam(){
    const element = document.getElementById("cookieSettings") 
    setTimeout(goFullScreen, 1000)
    setTimeout(goWindowedScreen, 5000)

}