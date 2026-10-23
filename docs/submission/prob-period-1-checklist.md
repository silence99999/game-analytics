# GA-56 - пакет первой сдачи

GameAnalytics · SE-2431 · 23.10.2026 · [GA-56](https://gameanalytics-se2431.youtrack.cloud/issue/GA-56)

Пакет содержит проектные документы, исследования и кликабельный прототип. Это не готовое приложение и не утверждение о выполнении всех требований первой сдачи. Основные материалы сверены с main `3bb8c72`; сборка и уточнения представлены в [PR #9](https://github.com/silence99999/game-analytics/pull/9).

## Опись материалов

| Материал | Файл | Задача / PR |
|---|---|---|
| Описание проекта и навигация | [README](../../README.md) | GA-57 / [#2](https://github.com/silence99999/game-analytics/pull/2) |
| Project Proposal | [Proposal](../proposal/project-proposal.md) | GA-48 / [#1](https://github.com/silence99999/game-analytics/pull/1) |
| Требования и приёмка | [MVP](../requirements/mvp.md) | GA-1 / [#5](https://github.com/silence99999/game-analytics/pull/5) |
| Источники и реальные ответы API | [Исследование](../research/data-sources.md), [evidence](../research/evidence/) | GA-2 / #1 |
| Исследование демок | [Отчёт](../research/demo-match-identification.md) | GA-3 / [#3](https://github.com/silence99999/game-analytics/pull/3) |
| Литература | [Обзор](../literature/review.md), [источники](../literature/sources-table.md), [методика](../literature/requirements-and-evaluation.md) | GA-4 / [#4](https://github.com/silence99999/game-analytics/pull/4) |
| Пять аналогов | [Матрица](../research/competitor-analysis.md) | GA-50 / [#13](https://github.com/silence99999/game-analytics/pull/13); уточнения тарифов и выводов в #9 |
| Выбор технологий | [Альтернативы и ADR](../architecture/technology-decisions.md) | GA-51 / [#6](https://github.com/silence99999/game-analytics/pull/6) |
| Пять сервисов и контракты | [Архитектура](../architecture/service-contracts.md) | GA-5 / [#7](https://github.com/silence99999/game-analytics/pull/7) |
| Схемы и исходник | [Context](../architecture/diagrams/context.svg), [Use Case](../architecture/diagrams/use-cases.svg), [Component](../architecture/diagrams/components.svg), [генератор](../architecture/diagrams/render.mjs) | GA-5 / #7 |
| Прототип и экраны | [Инструкция](../prototype/README.md), [HTML](../prototype/index.html), [экраны](../prototype/screens/) | GA-33 / [#11](https://github.com/silence99999/game-analytics/pull/11) |
| План тестирования | [План](../testing/ga-52-test-plan.md) | GA-52 / [#10](https://github.com/silence99999/game-analytics/pull/10) |
| Этапы, роли, риски | [План](../planning/ga-53-roadmap-risks.md) | GA-53 / [#12](https://github.com/silence99999/game-analytics/pull/12) |
| Скриншоты YouTrack | [PDF](GameAnalytics-YouTrack-prob-period-1.pdf) | GA-56 / #9 |
| Вклады для формы | [Текст](team-contributions.md) | GA-56 / #9 |
| Контрольные суммы | [SHA256SUMS](SHA256SUMS.txt) | GA-56 / #9 |

## Ограничения и невыполненные требования

- **GA-49:** реальных интервью нет (подтверждено Амиром 23.10.2026). [Заметки](../research/interviews/ga-49-interview-notes.md) и [сводка](../research/interviews/ga-49-findings.md) - синтетические примеры для шаблона. Статус «Готово» на снимке доски не подтверждён реальными интервью; они не включены в выполненные вклады.
- **GA-54:** отменена пользователем; фактический отзыв руководителя не приложен. Пункт 11 исходных требований о feedback остаётся невыполненным, пока организатор не подтвердит исключение.
- **GA-55:** отменена как неактуальная; презентация и репетиция не заявляются выполненными.
- **GA-58:** практическая проверка Premier после первой сдачи. Premier остаётся в целевом MVP.
- Идентификация неоднозначных CS2-демок, предельные ресурсные испытания, работающий backend, инфраструктура и качество ML ещё не подтверждены. Прототип использует вымышленные данные.
- Формулировки «для ревью» в старых документах относятся к дате их подготовки. Факты слияния проверяются по PR; слияние не равно согласованию руководителя.
- Форму заполняет и отправляет Амир самостоятельно. Отправка в рамках подготовки пакета не заявляется.

## Проверка и использование

1. Репозиторий публичный. Персональная проверка с аккаунтов комиссии не проводилась. YouTrack может требовать вход - для просмотра без него приложен PDF. Права доступа не расширялись.
2. Локальные ссылки пакета проверяются перед коммитом. HTML-прототип запускается открытием `docs/prototype/index.html`; GitHub Pages не требуется и его доступность не обещается.
3. Сохраняются ровно пять прикладных сервисов, CS2/Premier/FACEIT и Dota 2, ручная загрузка из карточки своего матча, публичная базовая статистика и приватные отчёты. Free - три успешных анализа в календарный месяц UTC, Premium без месячного лимита, один активный job, исходник хранится 30 суток.
4. После слияния PR #9 тег `prob-period-1` должен ссылаться на commit с этим пакетом. Формат ссылки: `https://github.com/silence99999/game-analytics/tree/prob-period-1`. До публикации это не свидетельство сдачи.
5. Исходный документ упоминает `pre-defense-1`, форма - `prob-period-1`. Используется название из формы; если потребуется второй тег, он должен указывать на тот же commit. Отдельное согласование расхождения не получено.
6. Файлы формы берутся из тега или архива того же commit. Тег после публикации не переносится. SHA256SUMS содержит хеши документов, схем, изображений и PDF; сам файл хешей в себя не включается.

## Условия закрытия

Тег фиксирует фактический пакет с перечисленными ограничениями, а не подтверждает выполнение интервью, получение отзыва или принятие работы комиссией. GA-56 не переводится в «Готово» автоматически: остаётся проверить публикацию версии, согласовать незакрытые требования и подтвердить отправку формы.
