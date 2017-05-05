import { Meteor } from 'meteor/meteor';
import MeteorCache from 'meteor/nodexpert:meteor-cache';

const cache = new MeteorCache();

Meteor.startup(() => {
  // code to run on server at startup
  // Setting cache data on server start up
  cache.set('serverCache', 'From server side cache');
});

Meteor.methods({
	'getCacheData': function () {
		console.log('Inside getCaheData');
		// returning data cached inside 'serverCache' key
		return cache.get('serverCache'); 
	},
	'updateCacheData': function () {
		console.log('Inside updateCacheData');
		//Updating cache object here just like Session on client
		cache.set('serverCache', 'Updated server side cache');
		return cache.get('serverCache'); 
	}
})
