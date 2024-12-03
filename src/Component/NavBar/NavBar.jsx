
import { Button, Navbar } from "flowbite-react";

export function NavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://i.ibb.co/L8x3srT/Untitled-design-modified.png" className="mr-3 h-9 w-9 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CampusLink</span>
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">Founder</Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2">
        
        <a href="https://campus-link-hieg.vercel.app/choose">
        <Button>Get started</Button>
        </a>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
