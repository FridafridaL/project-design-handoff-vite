import MiniCardOne from "../../assets/images/miniCard1.png";

export const MiniFitSwiperCard = ({ miniCardOne }) => {
  return (
    <div className="miniCard">
      <div className="miniCardOne">
        {miniCardOne}
        <img src={MiniCardOne} alt="slide card one" />
        <p>Friends</p>
      </div>
    </div>
  );
};
