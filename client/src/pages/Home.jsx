import imgHome from "../assets/home.avif";
import ContainerProperty from "../components/ContainerProperty/ContainerProperty";
import Filter from "../components/Filter/Filter";
import img1 from "../assets/img/1.webp";
import img2 from "../assets/img/2.webp";
import img3 from "../assets/img/3.webp";
import img4 from "../assets/img/4.webp";
import CarouselHome from "../components/CarouselHome/CarouselHome";

function Home() {
  const images = [img1, img2, img3, img4];
  return (
    <div className="w-full h-full py-1 mt-16">
      <CarouselHome images={images} />
      <div className="relative">
        <Filter />
      </div>
      <ContainerProperty />
    </div>
  );
}

export default Home;
