import React, { FC, useState } from "react";
import Image from "next/image";
import BookingModal from "./BookingModal";
import { AnimatePresence } from "framer-motion";

interface Props {
  id: string;
  imageUrl: string;
  imageAlt: string;
  heading: string;
  description: string;
  buttonText: string;
}

const BookingCard: FC<Props> = ({
  id,
  imageUrl,
  imageAlt,
  heading,
  description,
  buttonText,
}) => {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal(event: React.MouseEvent<HTMLButtonElement>) {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <div className="group relative h-full w-full items-center justify-center overflow-hidden rounded transition-shadow hover:shadow-xl hover:shadow-black/30">
        <AnimatePresence>
          {showModal && (
            <div className="">
              <BookingModal handleClose={handleCloseModal} trainingId={id} />
            </div>
          )}
        </AnimatePresence>
        <div className="z-10 h-full min-w-full">
          <Image
            className="h-full w-full object-fill transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src={imageUrl}
            width={400}
            height={400}
            alt={imageAlt}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="mb-2 text-xs font-bold text-nk-white sm:text-xl md:text-2xl lg:mb-5">
            {heading}
          </h1>
          <p className="mb-1 text-xxs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:mb-3 lg:text-lg 2xl:text-2xl">
            {description}
          </p>
          <button
            onClick={handleShowModal}
            className="font-com rounded-full bg-neutral-900 py-2 px-3.5 text-xs capitalize text-white shadow shadow-black/60 hover:bg-nk-red"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingCard;
