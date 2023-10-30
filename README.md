ІПЗс-23-1
Партика Олександр

1.Для запуску коду ви можете використовувати як програму по типу"VS code" або ж онлайн сервіси по типу "https://playcode.io/". Скопіюйте код з репозиторія та вставте в середовище в якому ви будете з ним працювати.

2.Для запуску коду ви можете використовувати VS Code.Для того щоб встановити бібліотеку faker.js,ви повинні виконати наступну команду в командному рядку `npm install faker`.Ця команда автоматично завантажить та встановить бібліотеку faker.js,після чого ви можете запускати код, в противному випадку у вас станеться таке:
```
Error: Cannot find module 'faker'
Require stack:
- /tmp/QePbXK0tNt.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1077:15)
    at Module._load (node:internal/modules/cjs/loader:922:27)
    at Module.require (node:internal/modules/cjs/loader:1143:19)
    at require (node:internal/modules/cjs/helpers:119:18)
    at Object.<anonymous> (/tmp/QePbXK0tNt.js:1:15)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:86:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '/tmp/QePbXK0tNt.js' ]
}
