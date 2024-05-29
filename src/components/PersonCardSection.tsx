const PersonCardSection: React.FC = () => {
  const IMAGES = {
    myProfilePic: new URL('../assets/myProfilePic.JPG', import.meta.url).href,
  };

  return (
    <div className='firstContainerCol'>
      <img
        className='myProfilePic'
        src={IMAGES.myProfilePic}
        alt='myProfilePic'
      />
      <br />
      <div className='firstColTxt'>
        <h1 className='myName heading'>Fadi Hanna</h1>
        <h4> Frontend developer </h4>
        <br />
        Skills:
        <section className='skillSec'> HTML CSS JAVASCRIPT </section>
      </div>
    </div>
  );
};

export default PersonCardSection;
