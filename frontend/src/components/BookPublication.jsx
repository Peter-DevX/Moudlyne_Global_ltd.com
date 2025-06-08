import PublicationBg from "../assets/Publication.jpg";

const BookPublication = ({ className = "", image = "", title=""}) => {
  return (
    <div className="w-full h-[70vh] relative">
      <img
        src={image}
        alt="Publication"
        className={className}
      />
      <h2 className="absolute top-8 left-1/2 -translate-x-1/2 text-white text-4xl drop-shadow-lg uppercase tracking-widest">
        {title}
      </h2>
    </div>
  );
};

export default BookPublication;
