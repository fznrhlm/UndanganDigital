// Fungsi untuk buka halaman 2
function bukaUndangan() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
  }
  
  // Ambil nama tamu dari URL (?to=)
  const urlParams = new URLSearchParams(window.location.search);
  const namaTamu = urlParams.get("to") || "Tamu Undangan";
  document.getElementById("tamu").innerText = "Dear " + namaTamu;
  