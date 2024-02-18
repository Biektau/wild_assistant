import fs from "fs";

export function get_home_page(request, response) {
  try {
    fs.readFile("./views/home.html", "utf8", (err, html) => {
      if (err) {
        response.status(500).send("Ошибка чтения файла");
      } else {
        const renderedHtml = html.replace("{{title}}", "Главная");

        response.send(renderedHtml);
      }
    });
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}

export function get_instagram_bonus_page(request, response) {
  try {
    fs.readFile("./views/instagram_bonus.html", "utf8", (err, html) => {
      if (err) {
        response.status(500).send("Ошибка чтения файла");
      } else {
        const renderedHtml = html.replace("{{title}}", "Бонус");
        response.send(renderedHtml);
        console.log(request.body);
      }
    });
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}

export function get_feedback_bonus_page(request, response) {
  try {
    fs.readFile("./views/feedback_bonus.html", "utf8", (err, html) => {
      if (err) {
        response.status(500).send("Ошибка чтения файла");
      } else {
        const renderedHtml = html.replace("{{title}}", "Бонус");
        response.send(renderedHtml);
      }
    });
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}

export function get_question_page(request, response) {
  try {
    fs.readFile("./views/question.html", "utf8", (err, html) => {
      if (err) {
        response.status(500).send("Ошибка чтения файла");
      } else {
        const renderedHtml = html.replace("{{title}}", "Вопрос");
        response.send(renderedHtml);
      }
    });
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}

export function get_action_page(request, response) {
  try {
    fs.readFile("./views/action.html", "utf8", (err, html) => {
      if (err) {
        response.status(500).send("Ошибка чтения файла");
      } else {
        const renderedHtml = html.replace("{{title}}", "Вопрос");
        response.send(renderedHtml);
      }
    });
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}

export function get_items_page(request, response) {
  try {
    fs.readFile("./views/items.html", "utf8", (err, html) => {
      if (err) {
        response.status(500).send("Ошибка чтения файла");
      } else {
        const renderedHtml = html.replace("{{title}}", "Вопрос");
        response.send(renderedHtml);
      }
    });
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}