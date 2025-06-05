import Header from "@/components/header";
import LoadingBar from "@/components/loading-bar";
import HomeClientPage from "@/components/home-client-page";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <LoadingBar />
      <Header />
      <HomeClientPage />
    </div>
  );
}
