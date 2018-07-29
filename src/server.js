import Express from 'express';
// import Router from 'named-routes';

const app = new Express();
// const router = new Router();
// router.extendExpress(app);
// router.registerAppHelpers(app);

let tasks = [];
let count = 1;

app.get('/', (req, res) => {
  res.send('Welcome to Express Todo!');
});

app.get('/todos', (req, res) => {
  res.json(tasks);
});

app.get('/todo/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id === Number(id));
  if (task) {
    res.json(task.text);
  }
  res.send(404);
});

app.post('/todo/new', (req, res) => {
  const newTask = { id: count, text: 'new task from POST' };
  tasks = [...tasks, newTask];
  count += 1;
  res.send('Task added succesfully');
});

app.delete('/todo/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id === Number(id));
  if (task) {
    tasks = tasks.filter(t => t !== task);
    res.send('Delete completed succesfully');
  }
  res.send(404);
});

export default app;
