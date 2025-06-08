// components/TeamCard.jsx
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const AboutCard = ({
  name,
  title,
  image,
  description,
  linkedin,
  twitter,
  email,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300 w-full max-w-xs">
      <img
        src={image}
        alt={name}
        className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-blue-500"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xs text-gray-600 mt-2">{description}</p>
      <div className="flex justify-center gap-4 mt-4 text-blue-600">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-800" />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-blue-400" />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`}>
            <FaEnvelope className="text-xl hover:text-red-500" />
          </a>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
