const xhr = new XMLHttpRequest();
const url = 'health_article.json';

// GET request initialization
xhr.open('GET', url, true);

// Indicate the response format type expected is in JSON
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const articles = xhr.response?.articles || [];
        const articlesDiv = document.getElementById('articles');

        if (!articlesDiv) {
            console.error('The #articles container was not found.');
            return;
        }

        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            const title = document.createElement('h2');
            title.textContent = article.title;

            const description = document.createElement('p');
            description.textContent = article.description;

            const waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to achieve';

            const waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(way => {
                const listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            const benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';

            const benefitsList = document.createElement('ul');
            article.benefits.forEach(benefit => {
                const listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error('Failed to load articles:', xhr.status, xhr.statusText);
    }
};

xhr.onerror = function () {
    console.error('Request failed while loading health articles.');
};

xhr.send();

