import Link from "next/link";

const Navbar = () => (
  <nav className="bg-base-200 p-4 flex justify-between">
    <Link href="/" className="btn btn-ghost text-xl">Home</Link>
    <Link href="/create" className="btn btn-primary">Create Post</Link>
  </nav>
);
export default Navbar;