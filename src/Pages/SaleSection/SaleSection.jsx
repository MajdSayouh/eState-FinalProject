import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardImage from "../../assets/download.jpeg";
import styles from "./SaleSection.module.css";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Btn from "../../components/Button/Btn";
import ShowAll from "../../components/ShowAll/ShowAll";

function SaleSection() {
  return (
    <div className=" pt-5">
      <div className="container ">
        <div className="text-center d-flex justify-content-between">
          <div></div>
          <h3>Category By:</h3>
          <ShowAll>
            Show All <span>👉🏼</span>
          </ShowAll>
        </div>
        <div className="container text-center pt-5">
          <div className={styles.cards}>
            <div className={`${styles.cardRent}`}>
              <img src={cardImage} className={styles.RentImage} />
              <div
                className={`${styles.cardOverlay} d-flex flex-column text-white  justify-content-between`}
              >
                <div className={styles.cardOverlayText}>
                  <div className="p-3 d-flex align-items-end justify-content-end gap-4 fs-4">
                    <Button variant="success">
                      <FontAwesomeIcon icon={faBath} />
                    </Button>
                  </div>
                </div>
                <div>kn</div>
              </div>
              <div className="pt-2 px-3 d-flex align-items-center justify-content-between">
                <div>
                  <FontAwesomeIcon icon={faBath} />
                  <p>2222</p>
                </div>
                <div>
                  🛁
                  <p>2222</p>
                </div>
                <div>
                  🛏
                  <p>2222</p>
                </div>
              </div>
              <hr className={styles.hrLine} />
              <div className="d-flex align-items-center justify-content-around">
                <Button
                  variant="success"
                  size="sm"
                  className={styles.btnCard}
                  onClick={() => console.log("Success")}
                >
                  🚽
                </Button>

                <Btn type="success" size="sm">
                  +
                </Btn>
              </div>
            </div>
            <div className={`${styles.cardRent} ${styles.card}`}>
              <img src={cardImage} className={styles.RentImage} />
              <div className="p-3 d-flex align-items-center justify-content-between">
                <div>x</div>
                <div>y</div>
                <div>z</div>
              </div>
            </div>
            <div className={`${styles.cardRent}  `}>
              <img src={cardImage} className={styles.RentImage} />
              <div className="p-3 d-flex align-items-center justify-content-between">
                <div>x</div>
                <div>y</div>
                <div>z</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
}

export default SaleSection;
