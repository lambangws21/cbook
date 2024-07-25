export const copyToClipboard = (text: string): void => {
  if (!navigator.clipboard) {
    fallbackCopyToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).catch(err => console.error('Clipboard API: Oops, unable to copy', err));
};

const fallbackCopyToClipboard = (text: string): void => {
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

export const formatListWithNumbers = (list: string[]): string => {
  return list.map((item, index) => `${index + 1}. ${item}`).join('\n');
};