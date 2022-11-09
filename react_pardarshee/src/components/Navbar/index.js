export default function Navbar({setIsHome, setIsAbout, setIsContact}) {
  return (
    <nav className="flex justify-evenly border-b-2">
      {/* logo */}
      logo
      <div className="flex justify-between w-64 h-8">
        <button
          className=""
          onClick={() => {
            setIsHome(true);
            setIsContact(false);
            setIsAbout(false);
          }}
        >
          Home
        </button>
        <button
          className=""
          onClick={() => {
            setIsAbout(true);
            setIsHome(false);
            setIsContact(false);
          }}
        >
          About ATC
        </button>
        <button
          className=""
          onClick={() => {
            setIsContact(true);
            setIsAbout(false);
            setIsHome(false);
          }}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}
