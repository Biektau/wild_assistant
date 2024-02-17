// Подключаем необходимые модули - express и path
import express from "express";
import path from "path";

// Подключаем маршруты страниц из отдельного файла
import page_routes from "./routes/page_routes.js";

// Инициализируем приложение express
const app = express();

// Устанавливаем папку со статическими файлами
app.use(express.static("public"));

// Устанавливаем middleware для обработки POST запросов
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Используем маршруты страниц для обработки запросов
app.use("/", page_routes);

// Запускаем сервер на порту 5000 и выводим сообщение в консоль при успешном запуске
app.listen(5000, () => {
  console.log("server started on http://localhost:5000");
});
