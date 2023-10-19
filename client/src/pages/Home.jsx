import { useEffect } from "react";
import { useDispatch } from "react-redux";
import img1 from "../assets/img/1.webp";
import img2 from "../assets/img/2.webp";
import img3 from "../assets/img/3.webp";
import img4 from "../assets/img/4.webp";
import CarouselHome from "../components/CarouselHome/CarouselHome";
import ContainerProperty from "../components/ContainerProperty/ContainerProperty";
import FilterHome from "../components/FilterHome/FilterHome";
import { getAllProperties } from "../redux/actions";

function Home() {
  const images = [img1, img2, img3, img4];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  /*   useEffect(() => {
    setTimeout(() => {
      axios
        .get("/properties")
        .then((response) => {
          if (response.status === 200) {
            const data = response.data;
            setDataAxios(data);
            setLoading(false);
          } else {
            throw new Error("La solicitud no fue exitosa.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener propiedades:", error);
          setLoading(false);
        });
    }, 1500);
  }, []); */

  return (
    <div className="w-full h-full mt-[72px]">
      <CarouselHome images={images} />
      <div className="relative">
        <FilterHome />
      </div>
      <h2 className="text-center pt-4 font-bold text-4xl  dark:bg-black dark:text-white">
        Todas las propiedades
      </h2>
      <ContainerProperty />
    </div>
  );
}

export default Home;
