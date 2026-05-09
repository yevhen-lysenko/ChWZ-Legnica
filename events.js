// ═══════════════════════════════════════════════
// EVENTS.JS — Расписание собраний
// Меняй только здесь, страница обновится сама
// ═══════════════════════════════════════════════

const schedule = [
  {
    title: 'Nabożeństwo',
    daysOfWeek: [0], // 0 = niedziela
    startTime: '10:00',
    endTime: '12:00',
    backgroundColor: 'rgba(45, 90, 140, 0.85)',
    borderColor: 'rgba(45, 90, 140, 1)',
  },
  {
    title: 'Nabożeństwo wieczorne',
    daysOfWeek: [0],
    startTime: '18:00',
    endTime: '19:30',
    backgroundColor: 'rgba(90, 62, 45, 0.85)',
    borderColor: 'rgba(90, 62, 45, 1)',
  },
  {
    title: 'Studium Biblii',
    daysOfWeek: [3], // 3 = środa
    startTime: '18:30',
    endTime: '20:00',
    backgroundColor: 'rgba(80, 130, 80, 0.85)',
    borderColor: 'rgba(80, 130, 80, 1)',
  },
  {
    title: 'Modlitwa',
    daysOfWeek: [5], // 5 = piątek
    startTime: '18:00',
    endTime: '19:00',
    backgroundColor: 'rgba(140, 100, 45, 0.85)',
    borderColor: 'rgba(140, 100, 45, 1)',
  },
];