chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'download') {
    const blob = new Blob([message.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Use the Chrome downloads API to save the file
    chrome.downloads.download({
      url: url,
      filename: 'extracted_text.txt', // Filename for the text file
      conflictAction: 'overwrite'
    }, () => {
      console.log('Text file saved from background script');
    });
  }
});
