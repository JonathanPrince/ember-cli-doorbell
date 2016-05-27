# Ember-cli-doorbell

Injects doorbell into Ember CLI app.

## Installation

1. `ember install ember-cli-doorbell`
2. Add Doorbell api key to `config/environment.js` for the environment that Doorbell should run in.

```
if (environment === 'production') {
  ENV.APP.DOORBELL_APIKEY = <yourApiKeyHere>;
}
```

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
