import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [dataAxios, setDataAxios] = useState();

  useEffect(() => {
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
  }, []);
  return (
    <div className="w-full">
      {loading ? (
        <Spinner />
      ) : (
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
