import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="group relative block py-3 px-4 text-luxury-platinum/80 font-medium text-lg rounded-lg transition-all duration-300 hover:text-luxury-gold hover:bg-luxury-gold/10 hover:scale-105"
    >
      <span className="relative z-10">{title}</span>
      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-luxury-gradient group-hover:w-3/4 transform -translate-x-1/2 transition-all duration-300"></div>
    </Link>
  );
};

export default NavLink;
