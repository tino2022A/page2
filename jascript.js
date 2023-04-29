const videoPlayer = document.getElementById("video-player");
const playPauseButton = document.getElementById("play-pause-button");
const progressBarFill = document.getElementById("progress-bar-fill");

let isPlaying = false;

function togglePlayPause() {
  if (isPlaying) {
    videoPlayer.pause();
    playPauseButton.textContent = "Play";
  } else {
    videoPlayer.play();
    playPauseButton.textContent = "Pause";
  }
  isPlaying = !isPlaying;
}

function updateProgressBar() {
  const progress = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  progressBarFill.style.width = `${progress}%`;
}

playPauseButton.addEventListener("click", togglePlayPause);
videoPlayer.addEventListener("timeupdate", updateProgressBar);
videoPlayer.addEventListener("ended", () => {
  playPauseButton.textContent = "Play";
  isPlaying = false;
});
