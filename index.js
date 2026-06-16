const envelope = document.getElementById("envelope");
let isOpen = false;

function toggleEnvelope() {
  isOpen = !isOpen;
  envelope.classList.toggle("open", isOpen);
}

envelope.addEventListener("click", toggleEnvelope);

envelope.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleEnvelope();
  }
});
