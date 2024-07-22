import AppHeader from "@/components/ui/dash-header/AppHeader";
import styles from "./style.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={styles.main}>
      <AppHeader />
      <div className="container">
        <div className={styles.main_row}>
          <div className={styles.info}>
            <h1>Важно! Обратите внимание</h1>
            <p>Уважаемые пользователи,</p> <br />
            <p>
              Мы рады приветствовать вас на нашем сайте Studai и благодарим за
              выбор нашего сервиса для создания студенческих работ. Мы стремимся
              предоставлять вам качественные и уникальные материалы, однако
              хотим обратить ваше внимание на следующие важные моменты:
            </p>
            <br />
            <p className={styles.important}>Возможные ошибки и неточности</p>
            <p>
              Несмотря на все наши усилия по обеспечению точности и качества
              генерируемых работ, в некоторых случаях могут возникать ошибки или
              неточности. Это может включать:
            </p>
            <ul>
              <li>
                Орфографические и грамматические ошибки: Автоматическая
                генерация текста не всегда может гарантировать безупречное
                соблюдение всех правил языка.
              </li>
              <li>
                Некорректные данные или ссылки: В некоторых случаях могут быть
                включены устаревшие или неправильные данные и источники.
              </li>
              <li>
                Структурные несоответствия: Возможны незначительные отклонения
                от требуемой структуры работы.
              </li>
            </ul>
            <div className={styles.recommendations}>
              <p>Рекомендации</p>
              <p>Мы настоятельно рекомендуем:</p>
              <ul>
                <li>
                  Проверка и редактирование: Внимательно проверяйте и
                  редактируйте сгенерированные материалы перед их
                  использованием.
                </li>
                <li>
                  Использование дополнительных источников: При необходимости
                  дополняйте работы актуальными данными и источниками.
                </li>
                <li>
                  Консультации с преподавателями: При возникновении сомнений,
                  проконсультируйтесь с преподавателями или научными
                  руководителями.
                </li>
              </ul>
            </div>
            <br />
            <p>
              Мы ценим ваше понимание и стремимся постоянно улучшать наш сервис,
              чтобы предоставлять вам максимально качественные и полезные
              материалы. Спасибо за ваше доверие и за то, что вы с нами!
            </p>
            <p className={styles.footer}>
              С уважением,
              <br />
              Команда Studai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
