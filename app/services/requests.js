import Service from '@ember/service';


export default class RequestsService extends Service {

  async getItems() {
    let promise;

    promise = fetch('http://localhost:5000/api/items').then(
      (response) => response.json()
    ).then((data) => {
        return data.map(item => {
          return { 'title': item.item };
        });
    });

    return promise;
  }

}
