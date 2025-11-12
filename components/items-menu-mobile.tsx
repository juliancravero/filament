import { Import, Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
  return (
    <Popover>
        <PopoverTrigger>
            <Menu/>
        </PopoverTrigger>
        <PopoverContent>
            <Link href="/category/PLA+" className="block">PLA+</Link>
            <Link href="/category/SILK" className="block">SILK</Link>
            <Link href="/category/ASA" className="block">ASA</Link>
            <Link href="/category/ABS" className="block">ABS</Link>
            <Link href="/category/PETG" className="block">PETG</Link>
            <Link href="/category/TPU" className="block">TPU</Link>
            <Link href="/category/FIBRA DE CARBONO" className="block">FIBRA DE CARBONO</Link>
            <Link href="/category/SILK TRICOLOR" className="block">SILK TRICOLOR</Link>
        </PopoverContent>
    </Popover>
  );
}

export default ItemsMenuMobile;