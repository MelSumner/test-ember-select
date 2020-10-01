import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class SelectElementComponent extends Component {
  @tracked selectElementOption;
  selectId = 'select-' + guidFor(this); 
  selectLabelText = 'Select A City';
  selectName = 'city preference';

  @action
  setSelection(changeEvent) {
    let value = changeEvent.target.value;
    this.setSelection = value;
    console.log('Selected option is ' + this.selectElementOption);    
  }

}