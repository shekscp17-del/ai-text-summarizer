function summarizeText() {
  const text = document.getElementById("inputText").value.trim();
  const summaryLength = parseInt(document.getElementById("summaryLength").value);
  const summaryOutput = document.getElementById("summaryOutput");
  const keyPointsOutput = document.getElementById("keyPointsOutput");

  if (!text) {
    summaryOutput.innerText = "Please paste some text first.";
    keyPointsOutput.innerText = "No key points available.";
    updateStats("", "");
    return;
  }

  const cleanedText = text.replace(/\s+/g, " ").trim();
  const words = cleanedText.split(" ");

  const summary = words.slice(0, summaryLength).join(" ") + (words.length > summaryLength ? "..." : "");
  summaryOutput.innerText = summary;

  const sentences = cleanedText.split(/[.!?]+/).map(s => s.trim()).filter(Boolean);
  const keyPoints = sentences.slice(0, 3);

  if (keyPoints.length > 0) {
    keyPointsOutput.innerText = keyPoints.map((point, index) => `• ${point}`).join("\n");
  } else {
    keyPointsOutput.innerText = "No key points available.";
  }

  updateStats(cleanedText, summary);
}

function updateStats(originalText, summaryText) {
  const inputCount = originalText ? originalText.split(/\s+/).filter(Boolean).length : 0;
  const summaryCount = summaryText ? summaryText.split(/\s+/).filter(Boolean).length : 0;

  document.getElementById("inputWords").innerText = `Input words: ${inputCount}`;
  document.getElementById("summaryWords").innerText = `Summary words: ${summaryCount}`;
}

function clearAll() {
  document.getElementById("inputText").value = "";
  document.getElementById("summaryOutput").innerText = "Your summary will appear here.";
  document.getElementById("keyPointsOutput").innerText = "Key points will appear here.";
  updateStats("", "");
}

function loadSample() {
  const sampleText = `Artificial intelligence is transforming education by helping students learn more efficiently and helping teachers manage information more effectively. AI tools can summarize long content, generate study materials, answer questions, and support personalized learning experiences. In modern classrooms, AI can save time, improve accessibility, and make information easier to understand. However, it must be used responsibly, with attention to accuracy, fairness, and transparency.`;

  document.getElementById("inputText").value = sampleText;
  summarizeText();
}

function copySummary() {
  const summary = document.getElementById("summaryOutput").innerText;
  const keyPoints = document.getElementById("keyPointsOutput").innerText;
  const combined = `Summary:\n${summary}\n\nKey Points:\n${keyPoints}`;

  navigator.clipboard.writeText(combined).then(() => {
    alert("Summary copied successfully.");
  });
}