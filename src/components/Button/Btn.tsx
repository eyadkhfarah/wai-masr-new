import { cn } from "@/lib/utils";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

interface ButtonLinkProps {
  label: string;
  link: string;
  newTab?: boolean;
  className?: string;
}

const Btn: React.FC<ButtonLinkProps> = ({ label, link, newTab = false, className }) => {
  return (
    <Link
      href={link}
      className={cn("group whitespace-nowrap flex items-center justify-between w-full px-4 dark:bg-light dark:text-dark bg-primary text-light rounded-2xl py-3 h-fit font-bold transition-all ease-in-out duration-300 transform hover:scale-105", className)}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      aria-label={label}
    >
      <span>{label}</span>
      <RiArrowLeftSLine size={20} className="" />
    </Link>
  );
};

export default Btn;
