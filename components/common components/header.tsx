/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import logo from "../../images/logo.png";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

function Header() {
  const router = useRouter();

  return (
    <div className="p-8 text-center justify-between text-white mx-auto header">
      <div className="ml-10 flex items-center space-x-4 ">
        {navLinks.map((link,id) => {
          return (
            <Link
              className={
                router.asPath === link.href && link.name !== "Home"
                  ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  : `text-gray-300 ${
                      link.name !== "Home" &&
                      "hover:bg-gray-700 hover:text-white"
                    }rounded-md px-3 py-2 text-sm font-medium`
              }
              key={id}
              href={link.href}
            >
              {link.type === "" && <>{link.name}</>}
              {link.type === "Image" && (
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={150}
                  height={150}
                  priority
                  className="mx-auto"
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Header;

const navLinks = [
  {
    href: "/",
    name: <AiFillHome />,
    type: "",
  },
  {
    href: "/services",
    name: "Services",
    type: "",
  },
  {
    href: "/amenities",
    name: "Amenities",
    type: "",
  },
  {
    href: "/",
    name: "Home",
    type: "Image",
  },
  {
    href: "/testimonials",
    name: "Testimonials",
    type: "",
  },
  {
    href: "/faq",
    name: "FAQ",
    type: "",
  },
  {
    href: "/contact",
    name: "Contact",
    type: "",
  },
];
