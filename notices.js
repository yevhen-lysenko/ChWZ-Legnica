// ═══════════════════════════════════════════════
// NOTICES.JS — Tymczasowe ogłoszenia
// active: true = pokazuj, false = ukryj
// date: 'YYYY-MM-DD' = pokaż tylko w ten dzień
//       null = pokaż zawsze (dopóki active: true)
// ═══════════════════════════════════════════════
 
const notices = [
  {
    active: true,
    date: null, // null = zawsze aktywne
    type: 'warning', // 'warning' | 'info' | 'success'
    message: 'Dziś nie będzie wieczornego nabożeństwa o 18:00 — zamiast niego odbędzie się zebranie członkowskie o 19:00.',
  },
  // Przykład ogłoszenia na konkretny dzień:
  // {
  //   active: true,
  //   date: '2026-06-15',
  //   type: 'info',
  //   message: 'Nabożeństwo w niedzielę 15 czerwca odbędzie się o godzinie 11:00.',
  // },
];
 