import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

const information = [
  {
    id: "phone-icon",
    name: "Phone",
    description: "(21) 98672-1163",
    icon: <AiFillPhone />,
  },
  {
    id: "email-icon",
    name: "E-mail",
    description: "davidxd32@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    id: "pin-icon",
    name: "Localization",
    description: "Rio de Janeiro / RJ",
    icon: <AiFillEnvironment />,
  },
];

const InformationContainer = () => {
  return (
    <section id="information">
      {information.map((info) => (
        <div className="info-card" id={info.id} key={info.id}>
          {info.icon}
          <div>
            <h3>{info.name}</h3>
            <p>{info.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InformationContainer;
