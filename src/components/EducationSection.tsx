import { eduData } from '../consts';
import TxtSection from './TxtSection';

const EducationSection: React.FC = () => {
  return (
    <div className='eduCol'>
      <h1 className='heading'>Education</h1>

      {eduData.map((expe) => {
        return (
          <TxtSection
            key={expe.id}
            title={expe.title}
            fromDate={expe.fromDate}
            toDate={expe.toDate}
            company={expe.company}
            location={expe.location}
          />
        );
      })}
    </div>
  );
};

export default EducationSection;
