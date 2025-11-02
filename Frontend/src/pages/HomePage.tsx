import EnsuredComponnent from "../components/layout/EnsuredComponnent";
import FooterComp from "../components/layout/Footer";
import GalleryComponent from "../components/layout/GalleryComponent";
import HeroComponnent from "../components/layout/HeroComponnent";
import NewsComponent from "../components/layout/NewsComponent";

function HomePage() {
  return (
    <main>
      <HeroComponnent />
      <EnsuredComponnent />
      <GalleryComponent />
      <NewsComponent />
      <FooterComp />
    </main>
  );
}

export default HomePage;
