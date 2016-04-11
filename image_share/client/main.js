import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var img_data = [
  {
    img_src: 'laptops.jpg',
    img_alt: 'some laptops'
  },
  {
    img_src: 'bass.jpg',
    img_alt: 'bass player'
  },
  {
    img_src: 'beard.jpg',
    img_alt: 'musicians'
  },
];

Template.images.helpers({
  images() {
    return img_data;
  },
});

Template.images.events({
});
