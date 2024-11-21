'use client'
import { useEffect, useState } from 'react';

function ExempleCycleDeVie() {
  const [count, setCount] = useState(0);

  // Similaire à componentDidMount et componentDidUpdate
  useEffect(() => {
    console.log('Le composant a été monté ou mis à jour');
    
    // Similaire à componentWillUnmount
    return () => {
      console.log('Le composant va être démonté');
      if (count > 10) {
        setCount(0)
      }
    };
  });

  // Similaire à componentDidMount uniquement
  useEffect(() => {
    console.log('Le composant a été monté');
  }, []);

  // S'exécute uniquement lorsque count change
  useEffect(() => {
    console.log(`La valeur de count a changé : ${count}`);
  }, [count]);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

export default ExempleCycleDeVie;