function sendIdea() {
  const idea = document.getElementById("idea").value.trim();

  if (!idea) {
    document.getElementById("output").innerText = "Please enter an idea.";
    return;
  }

  fetch("https://logiwise.app.n8n.cloud/webhook/generate-website", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ idea: idea })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    document.getElementById("output").innerText = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    document.getElementById("output").innerText = "Error: " + error.message;
    console.error("Error:", error);
  });
}
