import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked, TrackedArray } from 'tracked-built-ins';


export default class EmberAPIController extends Controller {
  @service requests;
  @tracked items = new TrackedArray([]);
  @tracked inProgress = false;

  @action
  loadItems() {
    let that = this;

    this.inProgress = true;
    this.requests.getItems().then(
      (data) => {
        that.items = new TrackedArray(data);
        this.inProgress = false;
      }
    );
  }
}
