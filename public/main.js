// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import sectionLinks from '../components/sectionLinks';

const init = () => {
  const html = sectionLinks();
  document.querySelector('#app').innerHTML = html;
};

init();
