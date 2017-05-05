import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';

Template.cache.onCreated(function() {
  let _this = this;
  _this.cacheData = new ReactiveVar(null);
  Meteor.call('getCacheData', function (err, res) {
  	_this.cacheData.set(res);
  })
});

Template.cache.helpers({
  getCacheData() {
    return Template.instance().cacheData.get();
  },
});

Template.cache.events({
  // Events will go here
  'click #updateCacheData': function (e) {
  	e.preventDefault();
  	const _this = Template.instance();
  	Meteor.call('updateCacheData', function (err, res) {
  		_this.cacheData.set(res);
  	})
  }
});
