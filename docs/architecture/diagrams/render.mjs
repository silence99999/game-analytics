// Editable diagram source. Run with Node.js; no external dependencies.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('.', import.meta.url));
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;');
const text = (x,y,s,size=18,color='#18344a') => `<text x="${x}" y="${y}" font-size="${size}" fill="${color}">${esc(s)}</text>`;
function box(x,y,w,h,title,lines=[],fill='#e9f2fa') {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="#8ba7bd"/>` +
    text(x+18,y+29,title,20) + lines.map((s,i)=>text(x+18,y+57+i*23,s,16)).join('');
}
function boundary(x,y,w,h,label) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="#f7fafc" stroke="#8ba7bd" stroke-dasharray="8 6"/>`+text(x+18,y+28,label,17);
}
function arrow(x1,y1,x2,y2,label='',lx=(x1+x2)/2,ly=(y1+y2)/2-8) {
  return `<path d="M${x1},${y1} L${x2},${y2}" fill="none" stroke="#446880" stroke-width="2" marker-end="url(#arrow)"/>`+(label?text(lx,ly,label,15):'');
}
function bus(x1,y1,x2,y2,label,lx,ly) {
  return arrow(x1,y1,x2,y2,label,lx,ly)+arrow(x2,y2,x1,y1);
}
function save(name,title,subtitle,body,h=1000) {
  writeFileSync(root+name+'.svg',`<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="${h}" viewBox="0 0 1500 ${h}" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">${esc(subtitle)}</desc><defs><marker id="arrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9" fill="#446880"/></marker></defs><rect width="1500" height="${h}" fill="white"/><g font-family="Arial, sans-serif">${text(48,52,title,30)}${text(48,86,subtitle,17,'#557186')}${body}${text(48,h-25,'GameAnalytics · SE-2431 · GA-5 · 22.10.2026 · Проект для ревью, не работающая реализация',15,'#557186')}</g></svg>\n`);
}
save('context','System Context — GameAnalytics','Публичный просмотр и защищённый анализ; стрелка показывает инициатора взаимодействия.',
  boundary(440,180,580,540,'Граница GameAnalytics')+
  box(50,240,300,110,'Гость / зритель',['Поиск по SteamID','Просмотр доступных данных'])+
  box(50,465,300,130,'Владелец аккаунта',['Вход через Steam','Своя демка из карточки','Личный отчёт'])+
  box(485,300,490,190,'GameAnalytics',['Публичные профили и карточки матчей','Проверка собственной записи','Статистика и объяснимые эпизоды','Web UI + API + пять сервисов'])+
  box(1110,180,340,105,'Steam',['Подтверждение аккаунта','Данные публичного профиля'])+
  box(1110,340,340,105,'FACEIT / OpenDota',['История и статистика','Ключи только на сервере'])+
  box(1110,500,340,125,'Premier / Steam GC',['История: адаптер GA-58','В MVP обязателен','Интеграция ещё не проверена'])+
  arrow(350,290,485,330,'HTTPS',365,280)+arrow(350,520,485,440,'HTTPS',365,505)+
  arrow(975,330,1110,240)+arrow(975,390,1110,390)+arrow(975,450,1110,550)+
  text(485,570,'Внешние API: таймауты, валидация, ограничение частоты',16)+
  text(485,604,'Файл и личный отчёт доступны только владельцу',16)+
  text(485,638,'Автоскачивания демки и общего «Добавить матч» нет',16)+
  text(50,805,'Граница доверия: браузер и внешние ответы недоверенные; сервер проверяет права и входные данные.',19)+
  text(50,845,'Доступный публичный профиль не означает полную историю всех матчей произвольного игрока.',19),940);

const ellipse=(cx,cy,rx,ry,lines)=>`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#e9f2fa" stroke="#8ba7bd"/>`+lines.map((s,i)=>`<text x="${cx}" y="${cy-8+(i*24)}" text-anchor="middle" font-size="17" fill="#18344a">${esc(s)}</text>`).join('');
const line=(x1,y1,x2,y2)=>`<path d="M${x1},${y1} L${x2},${y2}" stroke="#446880" stroke-width="2" fill="none"/>`;
save('use-cases','Use Case — пользовательские сценарии','Линия — участие актора; коды FR соответствуют требованиям GA-1.',
  boundary(400,130,1000,740,'Система GameAnalytics')+
  box(50,210,280,85,'Гость',['Без авторизации'])+
  box(50,525,280,110,'Владелец',['Подтверждённый Steam','Может также смотреть профиль'])+
  ellipse(880,230,370,60,['Найти профиль и посмотреть доступную статистику','FR-01, FR-02, FR-09'])+
  ellipse(880,365,370,60,['Открыть существующую карточку матча','FR-03'])+
  ellipse(880,500,370,60,['Подтвердить Steam и загрузить свою демку','FR-04, FR-05, FR-06'])+
  ellipse(880,635,370,60,['Запустить анализ, узнать статус и остаток квоты','FR-07, FR-08, FR-11'])+
  ellipse(880,770,370,60,['Открыть личный отчёт / доступный исходник','FR-10, FR-12, FR-13'])+
  line(330,250,510,230)+line(330,270,510,365)+line(330,545,510,500)+line(330,580,510,635)+line(330,615,510,770)+
  text(50,925,'Условия загрузки: существующая карточка, владелец в составе, поддерживаемый файл, свободный активный слот.',18)+
  text(50,960,'Ошибки проверки не расходуют квоту. Неподтверждённое соответствие матчу останавливает анализ.',18),1040);

save('components','Component — пять сервисов и инфраструктура','Сплошные стрелки — API; шина Kafka — события. Хранилища доступны только внутренним ролям.',
  box(50,130,340,90,'Браузер / frontend',['Қажмұрат · недоверенная зона'])+
  box(1090,130,360,90,'Внешние API',['Steam / FACEIT / OpenDota / Premier'])+
  boundary(35,260,1430,1000,'Внутренняя зона Kubernetes · кластер / CI / наблюдаемость: Ерхан')+
  box(70,315,340,85,'API Gateway',['HTTPS → REST · JWT · rate limit'])+
  box(70,465,350,140,'1. Users / Profiles',['Амир · Go','Аккаунты, профиль, тариф','PostgreSQL: users'])+
  box(575,465,350,140,'2. Matches / Uploads',['Амир · Go','Карточки, jobs, quota, outbox','PostgreSQL: matches'])+
  box(1080,465,350,140,'4. Statistics',['Амир · Go','Публичные агрегаты','PostgreSQL: statistics'])+
  box(70,800,350,140,'3. Data Processing',['Ерхан · parser workers','Валидация, распаковка, события','PostgreSQL: processing'])+
  box(1080,800,350,140,'5. Mistake Analysis',['Қажмұрат · Python','Baseline / ML / личный отчёт','PostgreSQL: analysis'])+
  box(575,800,350,140,'Kafka · Амир',['requested → parsed → completed','Ошибки → Matches; inbox/outbox','В сообщениях нет файлов'])+
  box(70,1070,350,110,'PostgreSQL',['Отдельные схемы / роли','Нет межсервисных SQL-записей'],'#eef6ed')+
  box(575,1070,350,110,'S3-совместимое · Амир',['Приватные raw / datasets','Обработка: read/write по роли'],'#eef6ed')+
  box(1080,1070,350,110,'Redis',['Кэш и rate limit','Не источник истины квоты'],'#eef6ed')+
  arrow(220,220,220,315,'HTTPS',235,245)+arrow(240,400,240,465)+
  arrow(410,355,750,465,'REST',500,397)+arrow(410,345,1255,465,'REST',950,395)+
  arrow(750,465,1270,220,'HTTPS API',970,315)+
  arrow(575,535,420,535,'gRPC',450,523)+
  bus(750,605,750,800,'pub / sub',765,710)+
  bus(575,850,420,850,'pub / sub',445,833)+bus(925,850,1080,850,'pub / sub',940,833)+
  arrow(925,815,1255,605,'parsed',1080,718)+
  text(75,975,'Дополнительные API: Gateway → Analysis (личный отчёт); Users → Steam (вход и профиль).',17)+
  text(75,1005,'S3: Matches пишет raw; Processing читает raw / пишет dataset; Analysis и Statistics читают dataset.',17)+
  text(75,1035,'Каждый сервис пишет только свою схему PostgreSQL. Gateway / сервисы используют Redis по назначению.',17)+
  text(75,1220,'API Gateway, frontend, Kafka, БД, Redis и S3 не считаются дополнительными бизнес-сервисами.',17),1330);
