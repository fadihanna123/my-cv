import { ExperienceSection } from '../components';
import EducationSection from '../components/EducationSection';
import PersonCardSection from '../components/PersonCardSection';

const Layout: React.FC = () => (
  <div className='container'>
    <div className='containerRow'>
      <div className='containerCol'>
        <PersonCardSection />
      </div>
      <div className='containerCol'>
        <div className='secondContainerCol'>
          <div className='expeeduRow'>
            <ExperienceSection />
            <EducationSection />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
