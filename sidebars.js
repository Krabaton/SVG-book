module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro', // string - document id
    },
    {
      type: 'category',
      label: 'Простые фигуры',
      items: ['insert', 'base', 'chain'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Схема документа SVG',
      items: ['organization'],
      collapsed: true,
    },
  ],
}
