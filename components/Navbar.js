import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="navbar">
      <h2 onClick={(e) => router.push("/")} className="nav-head">
        LegalEase.ai
      </h2>
      <div style={{ display: "flex" }}>
        <div className="github-btn">
          <a
            href="https://github.com/adhirajkar3103/legalease.ai"
            style={{ color: "black" }}
            target="_blank"
          >
            <FaGithub size={28} />
          </a>
        </div>
        <p className="login-btn">Login</p>
      </div>
    </div>
  );
};

export default Navbar;
