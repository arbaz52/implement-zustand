import React from "react";
import useStore from "./useStore";

export const Honey: React.FC = () => {
  console.debug("render: honey");
  const honey = useStore((state) => state.honey);
  const addHoney = useStore((state) => state.addHoney);
  return <button onClick={addHoney}>Honey: {honey}</button>;
};
export const Beer: React.FC = () => {
  console.debug("render: beer");
  const beer = useStore((state) => state.beer);
  const addBeer = useStore((state) => state.addBeer);
  return <button onClick={addBeer}>Beer: {beer}</button>;
};
