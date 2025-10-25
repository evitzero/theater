// Скрипт для замены цветов текста
const replacements = [
  { from: 'text-[var(--olive)]"', to: 'text-gray-900"' },
  { from: 'text-[var(--olive)]/80', to: 'text-gray-700' },
  { from: 'text-[var(--olive)]/70', to: 'text-gray-600' },
  { from: 'text-[var(--olive)]/60', to: 'text-gray-500' },
  { from: 'text-[var(--olive)]/50', to: 'text-gray-400' }
];

console.log('Замены для текста:', replacements);