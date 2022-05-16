import Component from '@glimmer/component';
import { task } from 'ember-concurrency';

export default class CardComponent extends Component {

  @task({ drop: true })
  *onLoadItems() {
    yield this.args.onLoadItems();
  }

}