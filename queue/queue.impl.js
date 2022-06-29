class Queue {
    constructor(size = 20){
        this.queue = []
        this.capacity = size
    }
    front = -1
    rear = -1

    isFull() {
        return this.front === 0 && this.rear === this.capacity -1
    }

    isEmpty() {
        return this.front === -1
    }

    enqueue(item) {
        if(this.isFull()) {
            console.log("Queue is full")
            return
        } else {
            if(this.front === -1) {
                this.front = 0
            }
            this.rear++
            this.queue[this.rear] = item
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("Queue is empty")
            return
        } else {
            const result = this.queue[this.front]
            if(this.front >= this.rear) {
                this.front = -1
                this.rear = -1
            } else {
                this.front++
            }
            return result
        }
    }

    display() {
        for (let i = this.front; i <= this.rear; i++) {
            console.log(this.queue[i])
        }
    }
}

const test = new Queue(10)
test.enqueue(33)
test.enqueue(4)
test.dequeue()
test.display()