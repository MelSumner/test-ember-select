import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class SelectElementComponent extends Component {
  selectId = 'select-' + guidFor(this); 
  selectOptions = [
    { city: 'Austin' },
    { city: 'Boston'},
    { city: 'Portland'}
  ]; 
  selectLabelText = 'Select A City';
  selectName = 'selectCity';
}