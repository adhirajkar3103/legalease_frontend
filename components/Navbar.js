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
        {/* <p className="login-btn">Login</p> */}
      </div>
    </div>
  );
};

export default Navbar;
