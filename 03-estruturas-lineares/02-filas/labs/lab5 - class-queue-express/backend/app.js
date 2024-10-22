import express from 'express';
import cors from 'cors';
import {Queue} from "./class-queue.js"


const app = express();
const queue = new Queue()


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/queue', (req, res) => {
  res.send({
    'items': queue.items
  })
})

app.post('/enqueue', (req, res) => {
    const element = req.body.element;
    queue.enqueue(element)

    res.send({
      'element': element,
      'pos': queue.size(),
    })
})

app.get('/enqueue/:element', function(req, res) {
    const element = req.params.element
    queue.enqueue(element)
    res.send({
        'element': element,
        'pos': queue.size(),
      })
})

app.get('/dequeue', function(req, res) {
    const element = queue.dequeue()
    res.send({
        'element': element,
      })
})

app.get('/size', function(req, res) {
    const size = queue.size()
    res.send({
        'size': size,
      })
})

app.get('/front', function(req, res) {
    const front = queue.front()
    res.send({
        'front': front,
      })
})

app.get('/rear', function(req, res) {
    const rear = queue.rear()
    res.send({
        'rear': rear,
      })
})

app.get('/isEmpty', function(req, res) {
    const isEmpty = queue.isEmpty()
    res.send({
        'isEmpty': isEmpty,
      })
})

app.listen(8000, () => {
  console.log(`Server is running on port 8000 `);
});

export default app;