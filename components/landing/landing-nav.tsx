import Image from "next/image";

import { Button } from "@/ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 container px-4 py-6 flex justify-between items-start">
      <div className="flex gap-3 items-center">
        <Image src="/svg/logo.svg" alt="logo" width={16} height={16} />
        <h2 className="tracking-wider">Nishchay</h2>
      </div>
      <Link
        href={"https://www.linkedin.com/in/nishchay-trivedi-61219978"}
        target="_blank"
        rel="noopener noreferrer"
        prefetch={false}
      >
        <Button variant="outline" size="sm">
          Linkedin
        </Button>
      </Link>
    </nav>
  );
}

export default Navbar;
