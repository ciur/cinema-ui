import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked, TrackedArray } from 'tracked-built-ins';
import { task } from 'ember-concurrency';


export default class TaskAPIController extends Controller {
  @service requests;
  @tracked items = new TrackedArray([]);

  @task({ drop: true })
  *loadItems() {
    let data;

    this.items = new TrackedArray([]);
    data = yield this.requests.getItems();

    this.items = data;
  }
}
