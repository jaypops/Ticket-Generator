import logo from "./logo.png";
function Navbar() {
  const nav = [
    { id: 1, name: "Event" },
    { id: 2, name: "My Tickets" },
    { id: 3, name: "About project" },
  ];
  return (
    <div className="navCoun">
      <div className="navb">
        <img src={logo} />
        <ul className="nav">
          {nav.map((navx) => (
            <li
              key={navx.id}
              style={{ color: navx.id === 1 ? "#fffff" : "#B3B3B3" }}
            >
              {navx.name}
            </li>
          ))}
        </ul>
        <button>My Ticket</button>
      </div>
    </div>
  );
}

export default Navbar;
