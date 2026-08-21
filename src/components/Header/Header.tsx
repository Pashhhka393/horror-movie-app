const Header = () => {
  return (
    <header>
      <div className="header-items">
        <span className="logo-glow  font-griffy text-4xl text-[#ffc907]">
          Nightfall
        </span>

        <nav aria-label="Главная навигация">
          <ul className="list-items">
            <li className="active">HOME</li>
            <li className="font-bold text-[#4a4a4a]">FAVOURITE</li>
            <li className="font-bold text-[#4a4a4a]">MOVIES</li>
          </ul>
        </nav>

        <form
          className="form text-[#4a4a4a] rounded-2xl bg-[#1a1a1a]"
          action="#"
        >
          <input
            className="bg-transparent border-none outline-none flex-1 font-bold"
            type="search"
            placeholder="SEARCH"
          />
          <img src="/search-image.svg" alt="search-image" />
        </form>
      </div>
    </header>
  );
};

export default Header;
