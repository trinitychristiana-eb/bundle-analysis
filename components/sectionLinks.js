import getSections from '../utils/dataManager';

const sectionLinks = () => {
  const data = getSections();

  const newDomString = data.map((info) => {
    console.log(info);
    const selectionId = info.title.split(' ').join('');
    return `
    <p class="">
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#${selectionId}" aria-expanded="false" aria-controls="${selectionId}">
        ${info.title}
    </a>
    </p>
    <div class="collapse" id="${selectionId}">
        <ul>
        ${info.analyses.map((analysis) => `
          <li><a href="${analysis.path}">${analysis.title}</a></li>
        `).join('')}
        </ul>
    </div>
    `;
  });

  return newDomString.join('');
};

export default sectionLinks;
