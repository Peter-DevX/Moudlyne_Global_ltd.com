 // send to home page

const CoolWaterBg = ({ children, className = "", image, alt }) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt={alt}
        className={className}
        loading="lazy"
      />
      {children}
    </div>
  );
};

export default CoolWaterBg;
