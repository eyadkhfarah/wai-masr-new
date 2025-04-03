import { RiFacebookCircleFill, RiTwitterXLine, RiInstagramLine } from 'react-icons/ri';

const SocialMediaIcons = () => {
  const iconClass = 'text-white text-2xl hover:text-blue-500 transition-colors duration-300';

  return (
    <div className="flex items-center space-x-4">
      <a href="https://web.facebook.com/W3i.EG" target="_blank" rel="noopener noreferrer" aria-label="فيسبوك">
        <RiFacebookCircleFill className={iconClass} />
      </a>
      <a href="https://www.twitter.com/W3iEgy" target="_blank" rel="noopener noreferrer" aria-label="تويتر (X)">
        <RiTwitterXLine className={iconClass} />
      </a>
      <a href="https://www.instagram.com/w3i.eg" target="_blank" rel="noopener noreferrer" aria-label="إنستاجرام">
        <RiInstagramLine className={iconClass} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
