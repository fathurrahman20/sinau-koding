import logo from "/assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-[100px] py-[60px]">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-menu flex items-center gap-x-10">
        <p className="text-xl hover:cursor-pointer">About us</p>
        <p className="text-xl hover:cursor-pointer">Services</p>
        <p className="text-xl hover:cursor-pointer">Use Cases</p>
        <p className="text-xl hover:cursor-pointer">Pricing</p>
        <p className="text-xl hover:cursor-pointer">Blog</p>
        <button className="border-[1px] rounded-[14px] py-5 px-[35px] text-xl hover:cursor-pointer">
          Request a quote
        </button>
      </div>
    </nav>
  );
}
