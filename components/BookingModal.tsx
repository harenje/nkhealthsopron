import Calendar from "./Helpers/Calendar";
import Backdrop from "./Layout/Backdrop";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import TrainingCardList from "./Helpers/TrainingCardList";

export interface BookingModalProps {
  handleClose?: () => void;
  trainingId: string;
}

interface CardData {
  title: string;
  content: string;
}

interface AppProps {
  cardsData: CardData[];
}

export default function BookingModal({
  handleClose,
  trainingId,
}: BookingModalProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTraining, setSelectedTraining] = useState<Object>("");
  const [selectedTrainer, setSelectedTrainer] = useState<string>("");

  const cardsData: CardData[] = [
    {
      title: "Card 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    { title: "Card 2", content: "Sed cursus tincidunt lorem vitae fringilla." },
    {
      title: "Card 3",
      content: "Fusce congue dolor eu tortor finibus laoreet.",
    },
  ];

  const handleCardClick = (card: CardData) => {
    console.log("Clicked card:", card);
    setSelectedTraining(card);
    setCurrentPage(3);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    trainingId === "csoportos_koredzes" ? setCurrentPage(2) : setCurrentPage(3);
    console.log(date);
  };

  const handleSelectTrainer = (id: string) => {
    setSelectedTrainer(id);
    setCurrentPage(2);
  };

  return (
    <div>
      <div onClick={handleClose}>
        <Backdrop />
      </div>
      <motion.section
        className="fixed top-1/4 left-1/4 z-50 w-[130rem] overflow-hidden"
        initial={{ y: -300, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -900, opacity: 1 }}
        transition={{
          type: "easeInOut",
          duration: 0.4,
        }}
      >
        <div className="h-1/2 w-1/2 rounded bg-nk-white">
          {/* {currentPage === 1 && (
            <div className="flex flex-col items-center">
              <div>
                <Image
                  src="/middle3modal.png"
                  height={144}
                  width={144}
                  alt="Brand Logo"
                ></Image>
              </div>
              <header className="mb-5 flex justify-center p-3 text-2xl font-bold text-nk-black">
                Egy lépéssel közelebb a céljaid eléréséhez!
              </header>
              <h2 className="mb-2 text-lg font-bold text-nk-black">
                Edzés kiválasztása
              </h2>
              <select
                onChange={handleTrainingTypeChange}
                className="focus:shadow-outline block w-1/3 appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-400 focus:outline-none"
              >
                <AnimatePresence>
                  <motion.option
                    value=""
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    Válassz edzéstípust
                  </motion.option>
                  <motion.option
                    value="funkcionalis-csoportos-koredzes"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    Funkcionális csoportos köredzés
                  </motion.option>
                  <motion.option
                    value="szemelyi-edzes"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    Személyi edzés
                  </motion.option>
                </AnimatePresence>
              </select>
            </div>
          )} */}
          {trainingId === "csoportos_koredzes" && currentPage === 1 && (
            <div className="flex flex-col items-center">
              <p>Válassz egy dátumot:</p>
              <Calendar
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
              />
            </div>
          )}
          {trainingId === "csoportos_koredzes" && currentPage === 2 && (
            <div className="flex flex-col">
              <h1 className="self-center">
                Elérhető edzéseink az alábbi időponton:{" "}
                {selectedDate.toDateString()}
              </h1>
              <div className="m-5">
                <TrainingCardList
                  cardsData={cardsData}
                  onCardClick={handleCardClick}
                />
              </div>
            </div>
          )}
          {trainingId === "szemelyi_edzes" && currentPage === 1 && (
            <div className="flex items-center justify-center">
              <a
                href="#"
                id="Kevin"
                className="flex w-1/5 flex-col items-center p-5"
                onClick={() => handleSelectTrainer("Kevin")}
              >
                <Image
                  src="/images/Kevin.jpg"
                  alt="Kevin Modal Image"
                  width={200}
                  height={200}
                />
                <span className="flex flex-col items-center justify-center">
                  Varga Kevin
                </span>
              </a>
              <a
                href="#"
                id="Norbi"
                className="flex w-1/5 flex-col items-center p-5"
                onClick={() => handleSelectTrainer("Norbi")}
              >
                <Image
                  src="/images/Norbi.jpg"
                  alt="Norbi Modal Image"
                  width={200}
                  height={200}
                />
                <span>Baranyai Norbert</span>
              </a>
              <a
                href="#"
                id="Adrienn"
                className="flex w-1/5 flex-col items-center p-5"
                onClick={() => handleSelectTrainer("Adrienn")}
              >
                <Image
                  src="/images/Adrienn.jpg"
                  alt="Adrienn Modal Image"
                  width={200}
                  height={200}
                />
                <span>Ivancsics Adirenn</span>
              </a>
              <a
                href="#"
                id="Judit"
                className="flex w-1/5 flex-col items-center p-5"
                onClick={() => handleSelectTrainer("Judit")}
              >
                <Image
                  src="/images/Judit.jpg"
                  alt="Judit Modal Image"
                  width={200}
                  height={200}
                />
                <span>Palotai Fodor Judit</span>
              </a>
            </div>
          )}
          {trainingId === "szemelyi_edzes" && currentPage === 2 && (
            <div className="flex flex-col items-center">
              <p>Válassz egy dátumot:</p>
              <Calendar
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
              />
            </div>
          )}
          {trainingId === "csoportos_koredzes" && currentPage === 3 && (
            <div className="flex flex-col items-center">
              <h2>Rögzítés</h2>
              <p>
                Megerősítjük, hogy szeretnél időpontot foglalni a következő
                edzésre:
              </p>
              <ul>
                <li>Típus: {trainingId}</li>
                <li>Idő: {selectedDate.toDateString()}</li>
                <li>Edzés: {JSON.stringify(selectedTraining)}</li>
              </ul>
            </div>
          )}
          {trainingId === "szemelyi_edzes" && currentPage === 3 && (
            <div className="flex flex-col items-center">
              <h1>Elérhető időpontok, {selectedTrainer}-nél:</h1>
              <div className="">
                <ul>
                  <li>
                    <a>11:00-12:00</a>
                  </li>
                  <li>
                    <a>15:00-16:00</a>
                  </li>
                  <li>
                    <a>16:00-17:00</a>
                  </li>
                  <li>
                    <a>17:00-18:00</a>
                  </li>
                  <li>
                    <a>18:00-19:00</a>
                  </li>
                  <li>
                    <a>19:00-20:00</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <footer className="flex justify-center">
            <motion.button
              className="my-2 rounded-sm bg-nk-red p-3 text-nk-white"
              onClick={() => {
                if (currentPage === 1) {
                  handleClose?.();
                } else if (currentPage === 2) {
                  setCurrentPage(1);
                } else if (currentPage === 3) {
                  setCurrentPage(2);
                } else if (currentPage === 4) {
                  setCurrentPage(3);
                }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Vissza
            </motion.button>
          </footer>
        </div>
      </motion.section>
    </div>
  );
}
