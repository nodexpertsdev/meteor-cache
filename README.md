# nodexpert:meteor-cache

Meteor wrapper for node-cache.

It allows you to store the values in cache on server same as the client side cache or session variables.

## To install package

`meteor add nodexpert:meteor-cache`

---

## How to use?
`import MeteorCache from 'meteor/nodexpert:meteor-cache';`

`const cache = new MeteorCache();` //

### To set the value in cache

`cache.set('cahe-name', value)`

### To get value from cache

`cache.get('cache-name')`

### To delete value from cache

`cache.del('cache-name')`


#### For demo run the example-app and go through it's README.md file.

##### For more features please go through https://www.npmjs.com/package/node-cache