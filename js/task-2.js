function formatMessage(message, maxLength) {
  const lengthMessage = message.length;
  const normalizeMessage = message.slice(0, maxLength);
  const messageDot = normalizeMessage + '...';
  if (lengthMessage <= maxLength) {
    return message;
  } else if (lengthMessage > maxLength) {
    return messageDot;
  }
}
console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"
