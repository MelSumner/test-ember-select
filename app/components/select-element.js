import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action, set } from '@ember/object';


export default class SelectElementComponent extends Component {

  selectId = 'select-' + guidFor(this); 
  selectOptions = [
    { city: 'Austin' },
    { city: 'Boston'},
    { city: 'Portland'}
  ]; 
  selectLabelText = 'Select A City';
  selectName = 'selectCity';

  selectedOption = null;

  @action
  setSelection(selected) {
    this.set('selectedOption', selected, true)
    console.log(this.selectedOption)
  }

}