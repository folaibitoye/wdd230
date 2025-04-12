document.addEventListener("DOMContentLoaded", function() {
    const modDate = new Date(document.lastModified);
    document.getElementById("mod-date").textContent = modDate.toLocaleDateString();
  
    // Set the current timestamp when the form page is loaded
    document.getElementById("timestamp").value = new Date().toISOString();
  });