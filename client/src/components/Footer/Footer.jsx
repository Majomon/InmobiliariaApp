import Facebook from "../../assets/redes/facebook.png"
import Instagram from "../../assets/redes/instagram.png"
import Linkedin from "../../assets/redes/linkedin.png"

function Footer() {
  return (
    <div className="mt-2 bg-green-700">
      <div>
        <h2 className="text-center text-3xl font-bold">
          Visitanos en nuestras redes
        </h2>
        <lu>
          <li>
            <img src={Facebook} alt="Facebook" className="" />
          </li>
          <li>
            <img src={Instagram} alt="Instagram" className="" />
          </li>
          <li>
            <img src={Linkedin} alt="Linkedin" className="" />
          </li>
        </lu>
      </div>
    </div>
  );
}

export default Footer;
