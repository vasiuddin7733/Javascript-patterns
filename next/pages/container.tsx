import React from "react";
import { useState,useEffect } from "react";

const Container = () => {
  const [data, setData] = useState<CharacterResponse | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const getCharacters = async () => {
    setIsLoading(true);
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data: CharacterResponse = await response.json();
    setIsLoading(false);
    if (!data) return;
    setData(data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="container">
      <nav className="navbar">The Software House - Container pattern</nav>
      <main className="main">
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <>
            {data?.results.map(({ id, name, image }) => {
              return (
                <div key={id} className="character">
                  <img className="image" src={image} alt={name} />
                  <p className="name">{name}</p>
                </div>
              );
            })}
          </>
        )}
      </main>
    </div>
  );
};

export default Container;