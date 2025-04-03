import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

type Button = {
  link: String;
  text: String;
  target: Boolean;
  className?: String;
};

export default function BlackBtn({ link, text, target, className }: Button) {
  return (
    <Link
      className="Blackbtn"
      href={`${link}`}
      target={target === true ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {text}
      <span>
        <RiArrowLeftSLine color="red" size={20} />
      </span>
    </Link>
  );
}
