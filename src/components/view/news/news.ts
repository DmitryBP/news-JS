import { Article } from '../../../types/types';
import './news.css';

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const photoElement = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            photoElement.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const authorElement = newsClone.querySelector('.news__meta-author') as HTMLElement;
            authorElement.textContent = item.author || item.source.name;

            const dataElement = newsClone.querySelector('.news__meta-date') as HTMLElement;
            dataElement.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const descriptionTitleElement = newsClone.querySelector('.news__description-title') as HTMLElement;
            descriptionTitleElement.textContent = item.title;

            const descriptionSourceElement = newsClone.querySelector('.news__description-source') as HTMLElement;
            descriptionSourceElement.textContent = item.source.name;

            const descriptionContentElement = newsClone.querySelector('.news__description-content') as HTMLElement;
            descriptionContentElement.textContent = item.description;

            newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);
            fragment.append(newsClone);
        });

        const newsElement = document.querySelector('.news') as HTMLElement;
        newsElement.innerHTML = '';
        document.querySelector('.news')?.appendChild(fragment);
    }
}

export default News;
