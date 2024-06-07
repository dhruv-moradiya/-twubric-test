import ButtonGroupCom from "../components/ButtonGroupCom";
import Cardlist from "../components/cardList/Cardlist";
import DatePicker from "../components/DatePicker";

function Home() {

  return (
    <div className="p-5 flex flex-col gap-5">
      <ButtonGroupCom />
      <DatePicker />
      <Cardlist />
    </div>
  );
}

export default Home;
