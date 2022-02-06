let app = new Vue({
    el: '#app',
    data: {
        tabs: ['all', 'incomplete', 'completed'],
        tabIndex: 0,
        list: [
            
        ],
        newInput: '',
        editingItem: {},
        editingInput: {},
    },
    methods: {
        addItem: function () {
            if (this.newInput.trim()) {
                this.list.push({
                    id: Math.floor(Date.now()),
                    content: this.newInput,
                    done: false,
                });
                this.newInput = '';
            }
        },
        deleteItem: function (target) {
            let list = this.list;
            list.forEach((item, index) => {
                if (item.id === target.id) {
                    list.splice(index, 1);
                    return;
                }
            });
        },
        editItem: function (target) {
            target.content = this.editingInput;
            this.editingItem = {};
        },
        clearList: function () {
            let newList = [];
            switch (this.tabs[this.tabIndex]) {
                case 'all':
                    break;
                case 'undone':
                    this.list.forEach(item => {
                        if (item.done === true) {
                            newList.push(item);
                        }
                    });
                    break;
                case 'completed':
                    this.list.forEach(item => {
                        if (item.done === false) {
                            newList.push(item);
                        }
                    });
                    break;
            }
            this.list = newList;
        },
    },
    computed: {
        filteredList: function () {
            let newList = [];
            switch (this.tabs[this.tabIndex]) {
                case 'all':
                    return this.list;
                case 'undone':
                    this.list.forEach(item => {
                        if (item.done === false) {
                            newList.push(item);
                        }
                    });
                    return newList;
                case 'completed':
                    this.list.forEach(item => {
                        if (item.done === true) {
                            newList.push(item);
                        }
                    });
                    return newList;
            }
        },
    },
});