function modifyFlashPermissions() {
  chrome.contentSettings.plugins.getResourceIdentifiers(function (resourceIdentifiers) {
	chrome.contentSettings.plugins.set({
      primaryPattern: '<all_urls>',
      resourceIdentifier: {
        id: 'adobe-flash-player'
      },
      setting: "allow"
    });
  });
}

chrome.runtime.onInstalled.addListener(modifyFlashPermissions);