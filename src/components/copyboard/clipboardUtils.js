export const copyToClipboard = (text) => {
  if (!navigator.clipboard) {
    // Clipboard API not available
    return fallbackCopyToClipboard(text);
  }
  return navigator.clipboard.writeText(text);
};

const fallbackCopyToClipboard = (text) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
};

export const formatListWithNumbers = (list) => {
  return list.map((item, index) => `${index + 1}. ${item}`).join('\n');
};
