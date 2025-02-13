
const Card = ({ imageSrc, title, items }) => {
  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={imageSrc} alt={title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <ul className="mb-1 font-normal text-gray-700 dark:text-gray-400">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </a>
      </div>
    </div>
  );
};

export default Card;
