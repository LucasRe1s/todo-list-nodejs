import Task from "../entities/task";
import { UUIDV4 } from "uuid";
// const { v4: uuidv4, v4 } = require('uuid');

function createTask(){
    const task = new Task(UUIDV4, title);
    return task;
}

module.exports = {
    createTask,
};