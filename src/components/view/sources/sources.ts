import { SourceItem } from '../../../types/types';
import './sources.css';

class Sources {
    draw(data: SourceItem[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: SourceItem) => {
            const sourceClone: HTMLElement = sourceItemTemp?.content.cloneNode(true) as HTMLElement;

            const sourceItemName: HTMLElement = sourceClone.querySelector('.source__item-name') as HTMLElement;
            sourceItemName.textContent = item.name;

            const sourceItemId: HTMLElement = sourceClone.querySelector('.source__item') as HTMLElement;
            sourceItemId.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesElement = document.querySelector('.sources') as HTMLElement;
        sourcesElement.append(fragment);
    }
}

export default Sources;
