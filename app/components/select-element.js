import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class SelectElementComponent extends Component {
  selectId = 'select-' + guidFor(this); 
  selectOptions = [
    { city: 'austin' },
    { city: 'boston'},
    { city: 'portland'}
  ]; 
  selectLabelText = 'Select A City';
  selectName = 'selectCity';
}