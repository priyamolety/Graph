import Route from '@ember/routing/route';

export default class GraphRoute extends Route {
    constructor(...args) {
        super(...args);
      }

    async model() {
        let response =  await fetch('/api/chart.json');
        let {data} = await response.json()
        return data
      }
}
