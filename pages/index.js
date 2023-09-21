import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <div className="centered-container">
        <div className="typing-demo">
        <h1>LegalEase.ai</h1>
        </div>
        <p>AI solution to simplify legal documentation for individuals and small businesses in India!</p>
        <button onClick={(e)=>router.push('/home')}>Get started</button>
    </div>
  );
};

export default Home;
