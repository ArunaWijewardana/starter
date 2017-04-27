class Storage {
  constructor() {
    let initstore = {
      boards: [
        {
          id: 0,
          name: "First board",
          slug: "first_board"
        },
        {
          id: 1,
          name: "Temp",
          slug: "temp"
        }
      ],
      columns: [
        {
          id: 0,
          board: 0,
          name: "ToDo",
          slug: "todo"
        },
        {
          id: 1,
          board: 0,
          name: "In Progress",
          slug: "in_progress"
        },
        {
          id: 2,
          board: 0,
          name: "Done",
          slug: "done"
        },
        {
          id: 3,
          board: 1,
          name: "ToDo",
          slug: "todo"
        }
      ],
      cards: [

      ]
    };
    let a = JSON.stringify(initstore);
    this.storage = localStorage.getItem('starter');
    !this.storage ? this.store = localStorage.setItem('starter', a) : this.store = JSON.parse(this.storage);
  }

  addData(key, value) {
    this.store[key] = value;
    this.saveData();
  }

  getData() {
    return this.store;
  }

  removeData(key) {
    this.saveData();
  }

  saveData() {
    let a = JSON.stringify(this.store);
    localStorage.setItem('starter', a);
  }
}

export default Storage;
