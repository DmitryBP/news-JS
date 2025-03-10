import { CallbackType, DataNews, DataSources, Endpoint } from '../../types/types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: CallbackType<DataSources>) {
        super.getResp<DataSources>(
            {
                endpoint: Endpoint.SOURCES,
            },
            callback
        );
    }

    getNews(e: MouseEvent, callback: CallbackType<DataNews>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<DataNews>(
                        {
                            endpoint: Endpoint.EVERYTHING,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
