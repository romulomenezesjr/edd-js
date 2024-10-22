import {Queue} from "./linked-queue.js"

class Task {
    constructor(pages, user) {
      this.user = user
      this.pages = pages
      this.printedPages = 0
    }
    printPage(){
      this.printedPages += 1
    }
    isDone(){
      return this.printedPages === this.pages
    }
    toString(){
      return `${this.printedPages}/${this.pages} - ${this.user}`
    }
  }

class Printer {
  constructor(ppm) {
    this.pageRate = ppm
    this.currentTask = null
    this.printQueue = new Queue()
  }

  addTask(task){
    this.printQueue.enqueue(task)
  }
  printTasks(){
    while (!this.printQueue.isEmpty()) {
        let task = this.printQueue.dequeue()
        while(!task.isDone()) {
            task.printPage()
            console.log(task.toString())
        }
    }
  }
}

export {Printer, Task}