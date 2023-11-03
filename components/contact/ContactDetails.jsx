import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

// const contacts = [
//   {
//     id: 1,
//     name: "Poznań, Poland",
//     icon: <FiMapPin />,
//   },
//   {
//     id: 2,
//     name: "email@domain.com",
//     icon: <FiMail />,
//   },
//   {
//     id: 3,
//     name: "555 8888 888",
//     icon: <FiPhone />,
//   },
// ];

function ContactDetails() {
  const poznanCoordinates = "52.407795,16.933761";

  return (
    <div className="w-full">
      <div className="text-left max-w-xl px-6">
        <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          Contact details
        </h2>
        {/* <ul>
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
                {contact.icon}
              </i>
              <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                {contact.name}
              </span>
            </li>
          ))}
        </ul> */}
        <ul>
          <li>
            <a href="tel:+48509949726" className="flex">
              <i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
                <FiPhone />
              </i>
              <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                +48 509 949 726
              </span>
            </a>
          </li>
          <li>
            <a href="mailto:jedrzejkosakowski@gmail.com" className="flex">
              <i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
                <FiMail />
              </i>
              <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                jedrzejkosakowski@gmail.com
              </span>
            </a>
          </li>
          <li className="flex">
            <i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
              <FiMapPin />
            </i>
            <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
              Poznań, Poland
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactDetails;
