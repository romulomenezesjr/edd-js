const PriorityQueue = require("./priority-queue");


test('fila prioritaria - itens ordenado', () => {
    const pqueue = new PriorityQueue()
    pqueue.enqueue("Maria", 0)
    pqueue.enqueue("João", 1)
    pqueue.enqueue("Pedro", 2)
    pqueue.enqueue("Ryan", 3)

    expect(pqueue._front.value).toBe("Maria")
    expect(pqueue._tail.value).toBe("Ryan")
  })

  test('fila prioritaria - itens inversamente ordenado', () => {
    const pqueue = new PriorityQueue()
    pqueue.enqueue("Maria", 3)
    pqueue.enqueue("João", 2)
    pqueue.enqueue("Pedro", 1)
    pqueue.enqueue("Ryan", 0)

    expect(pqueue._front.value).toBe("Ryan")
    expect(pqueue._tail.value).toBe("Maria")
  })

  test('fila prioritaria - itens misturados', () => {
    const pqueue = new PriorityQueue()
    pqueue.enqueue("Maria", 2)
    pqueue.enqueue("João", 0)
    pqueue.enqueue("Pedro", 3)
    pqueue.enqueue("Ryan", 1)

    expect(pqueue._front.value).toBe("João")
    expect(pqueue._tail.value).toBe("Pedro")
  })