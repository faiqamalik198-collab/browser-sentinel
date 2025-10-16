chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = details.url;

    // Detect suspicious redirects
    if (url.includes("redirect") || url.includes("track") || url.includes("ads")) {
      console.warn("Suspicious redirect detected:", url);
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "Browser Sentinel Alert",
        message: "Suspicious redirect detected:\n" + url
      });
    }

    // Detect script injections (basic pattern)
    if (url.includes("<script>") || url.includes("eval(")) {
      console.warn("Possible script injection:", url);
    }

    // You can log this to local storage or send to Python later
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
