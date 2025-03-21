Vue.component('column', {
    props: ['column', 'index'],
    template: `
        <div class="column">
            <h2>{{ column.title }}</h2>
            <button v-if="index === 0" @click="addCard">Добавить задачу</button>
        </div>
    `,
    methods: {
        addCard() {
            const newCard = {
                id: Date.now(),
                title: '',
                description: '',
                createdAt: new Date().toLocaleString(),
                deadline: null,
                lastEdited: null,
                returnReason: null,
                status: null
            };
            this.column.cards.push(newCard);
        }
    }
});


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

