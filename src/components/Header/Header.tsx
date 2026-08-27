"use client";
import Link from "next/link";
import "./header.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="header-items">
        <Link href="/">
          {" "}
          <span className="logo-glow  font-griffy text-4xl text-[#ffc907]">
            Nightfall
          </span>
        </Link>

        <nav className="nav-links" aria-label="Главная навигация">
          <ul className="list-items">
            <Link href="/">
              {" "}
              <li
                className={
                  pathname === "/" ? "active" : "font-bold text-[#4a4a4a]"
                }
              >
                HOME
              </li>
            </Link>
            <Link href="/favourite">
              <li
                className={
                  pathname === "/favourite"
                    ? "active"
                    : "font-bold text-[#4a4a4a]"
                }
              >
                FAVOURITE
              </li>
            </Link>
            <li className="font-bold text-[#4a4a4a]">MOVIES</li>
          </ul>
        </nav>

        <form
          className="form text-[#e6e6e6] rounded-2xl bg-[#3a3a3a]"
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
