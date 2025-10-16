document.addEventListener('DOMContentLoaded', () => {
  const settings = ['webrtc', 'fingerprint', 'https'];

  settings.forEach(setting => {
    const checkbox = document.getElementById(setting);
    chrome.storage.local.get(setting, data => {
      checkbox.checked = data[setting] || false;
    });

    checkbox.addEventListener('change', () => {
      chrome.storage.local.set({ [setting]: checkbox.checked });
    });
  });
});
