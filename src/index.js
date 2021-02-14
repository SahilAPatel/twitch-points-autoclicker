var element = document.createElement("script");
element.src = chrome.runtime.getURL("dist/src/auto-clicker.js");
document.body.appendChild(element);
