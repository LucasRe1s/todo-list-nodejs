class Task {

    constructor(id, title, complete = false){
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

module.exports = Task;