 📁 File Functionality – Browser Sentinel Extension
 1. `manifest.json` – Extension Configuration
**Purpose:**  
This file defines the metadata, permissions, and structure of your Firefox extension. It tells the browser what your extension does and which files to load.

Key Functions:
- Declares the extension name, version, and description.
- Requests permissions to access browser tabs, web requests, notifications, and storage.
- Specifies the background script (`background.js`) that runs continuously.
- Links the popup interface (`popup.html`) to the browser toolbar icon.
 2. `popup.html` – User Interface
**Purpose:**  
This is the visual interface users see when they click your extension icon. It allows them to toggle privacy settings.
Key Functions:
- Displays checkboxes for three privacy controls:
  - Disable WebRTC
  - Block Fingerprinting
  - Enforce HTTPS
- Loads `popup.js` to handle user interactions.
- Uses basic HTML and inline CSS for layout and styling.
 3. `popup.js` – Toggle Logic

**Purpose:**  
This script manages the behavior of the checkboxes in your popup interface. It saves and retrieves user preferences.

**Key Functions:**
- On page load, it checks browser storage for saved settings and updates the checkbox states.
- When a user changes a checkbox, it saves the new value to `chrome.storage.local`.
- These saved settings can later be used by other parts of the extension (e.g., `background.js`) to enforce privacy rules.


 
