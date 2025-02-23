import { DataNews, DataSources } from '../../types/types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sourceElement = document.querySelector('.sources') as HTMLElement;
        sourceElement.addEventListener('click', (e) => this.controller.getNews(e, (data: DataNews) => this.view.drawNews(data)));

        this.controller.getSources((data: DataSources) => this.view.drawSources(data)); // data: DataSources
    }
}

export default App;
