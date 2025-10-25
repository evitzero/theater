import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const app = express();
app.use(cors());
app.use(bodyParser.json());

let db;
(async () => {
  db = await open({
    filename: './news.db',
    driver: sqlite3.Database
  });
  await db.run(`CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT,
    date TEXT
  )`);
})();

// Получить все новости
app.get('/news', async (req, res) => {
  const news = await db.all('SELECT * FROM news ORDER BY id DESC');
  res.json(news);
});

// Добавить новость (для админа)
app.post('/news', async (req, res) => {
  const { title, content } = req.body;
  const date = new Date().toISOString();
  const result = await db.run('INSERT INTO news (title, content, date) VALUES (?, ?, ?)', [title, content, date]);
  res.json({ id: result.lastID });
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));

