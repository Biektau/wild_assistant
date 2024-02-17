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
      }
    });
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
