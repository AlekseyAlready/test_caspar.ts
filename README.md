# UI tests for Analitycs

```
 npm install
```

---

workaround for bug in old chrome:

open file

```
node_modules/selenium-standalone/lib/default-config.js
```

change chrome version to 2.46

```
 chrome: {
    version: '2.46',
```

run

```
 ./node_modules/.bin/selenium-standalone install
```

---

```

npm run jwt-local

```

## Running tests

Method 1 : Path in parameter

example

```

npm test -- --spec=./specs/deviceStatus/devicesHistory.spec.ts

```

short line

```

npm test -- --spec=./

```

Method 2 : Path in file

Add path in file wdio.local.conf.js: specs: ['./tests/phonesDevices/devicesHistory.spec.ts']

```

npm test

```

## Tests structure

### tests

location:
📁 alerts
📁 companyNumbers
📁 deviceStatus
📁 performanceReport
📁 subscriptions
📁 qualityOfService

functionality:
📁 common
📁 filters
📁 login

### pages

📁 alerts
📁 companyNumbers
📁 components
📁 deviceStatus
📁 performanceReport
📁 qualityOfService
📁 subscriptions
📄 loginPage.ts

## Users

**First:** autotester1 (206) 257-7803#8019 Ext. 8019 Password10
**Second:** autotester2 (206) 257-7803#8020 Ext. 8020 Password10 PIN: 01011900 Answer: 01010

## Passing URL into tests

If you want to pass URL into test (for example testing on prod or branches), you should do next steps:

1. Choose ui_tests Project
2. Press CI / CD -> Pipelines
3. Click on Run Pipeline (top right corner)
4. In section Variables:
5. In key section write - URL
6. In value section write - %Your Url%
7. Press Create Pipeline
8. When click Play in tests that you need

By default stage url will be used

```

```
