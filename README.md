# pows-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Things to do:
1. store the settings file? should be able to update things 
2. make the ipc channels for the following 
  * add new broker credenitals 
  * update broker credentials 
  * get broker catelog (json with fields that each broker needs to be configured)
  * get broker list (not actual credentials)
  * send trade with broker list JSON 
  * get stock info
  * save/update chromedriver 
3. create trade view
4. create sidebar for trade view with accounts, enabled or not
5. implement the trade via api (robinhood and/or tradier)
