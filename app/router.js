import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', function() {
    this.route('tommy');
    this.route('chuckie');
    this.route('dil');
    this.route('phil-lil');
    this.route('angelica');
  });
});

export default Router;
