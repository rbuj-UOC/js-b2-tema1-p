export default function basicEncrypt(text, separator) {
  const charList = text.split('');
  const codeList = charList.map((char) => char.charCodeAt(0));
  separator = separator || ' ';
  return codeList.join(separator);
}
