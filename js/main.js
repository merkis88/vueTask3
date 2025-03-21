const app = new Vue ({
    el: '#app',
    data: {
        columns: [
            { title: 'Запланированные задачи', cards: [] },
            { title: 'Задачи в работе', cards: [] },
            { title: 'Тестирование', cards: [] },
            { title: 'Выполненные задачи', cards: [] }
        ]
    }
});