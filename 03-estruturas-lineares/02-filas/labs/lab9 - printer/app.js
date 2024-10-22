import {Printer, Task} from "./printer.js"
const printer = new Printer(30)
printer.addTask(new Task(3,"Romulo"))
printer.addTask(new Task(1,"Maria"))
printer.addTask(new Task(10,"Joao"))
printer.addTask(new Task(2,"Pedro"))
printer.printTasks()