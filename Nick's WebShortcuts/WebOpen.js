// Add an event listener to each button
document.getElementById("button1").addEventListener("click", function () {
  openWebsite('https://www.roblox.com');
});

document.getElementById("button2").addEventListener("click", function () {
  openWebsite('https://www.github.com');
});

document.getElementById("button3").addEventListener("click", function () {
  openWebsite('https://blox-fruits.fandom.com/wiki/Blox_Fruits_%22Stock%22');
});

document.getElementById("button4").addEventListener("click", function () {
  openWebsite('https://chat.openai.com');
});

document.getElementById("button5").addEventListener("click", function () {
  openWebsite('https://www.jdoodle.com/execute-lua-online');
});

function openWebsite(url) {
  chrome.tabs.create({ url: url });
}
