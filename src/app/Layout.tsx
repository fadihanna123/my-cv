import { TxtSection } from "../components";
import { eduData, expeData } from "../consts";

const Layout: React.FC = () => {
  const IMAGES = {
    myProfilePic: new URL("../assets/myProfilePic.jpg", import.meta.url).href,
  };

  return (
    <div className="container">
      <div className="containerRow">
        <div className="containerCol">
          <div className="firstContainerCol">
            <img
              className="myProfilePic"
              src={IMAGES.myProfilePic}
              alt="myProfilePic"
            />
            <br />
            <div className="firstColTxt">
              <h1 className="myName heading">Fadi Hanna</h1>
              <h4> Frontend developer </h4>
              <br />
              Skills:
              <section className="skillSec"> HTML CSS JAVASCRIPT </section>
            </div>
          </div>
        </div>
        <div className="containerCol">
          <div className="secondContainerCol">
            <div className="expeeduRow">
              <div className="expeCol">
                <h1 className="heading">Experience</h1>

                {expeData.map((expe) => {
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
              <div className="eduCol">
                <h1 className="heading">Education</h1>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
