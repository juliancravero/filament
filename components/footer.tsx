import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFootrer = [
  {
    id: 1,
    name: "Nosotros",
    link: "#",
  },
  {
    id: 2,
    name: "Productos",
    link: "#",
  },  
  {
    id: 4,
    name: "Privacidad",
    link: "#",
  },
]
const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="w-ull max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <p>
                
                <span className="font-bold text-primary">
                    
                </span>
            </p>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400 ">
                {dataFootrer.map((data) => (
                    <li key={data.id}>
                        <Link href={data.link} className="hover:underline me-4 md:me-6">{data.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; 2025 
            <Link href="#"> GST3D </Link>
            Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;