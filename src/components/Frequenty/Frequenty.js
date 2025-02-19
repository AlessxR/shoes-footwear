import { useState } from 'react';
import styles from './frequenty.module.scss';

import InfoHeader from '../InfoHeader/InfoHeader';

const questions = [
  "WHAT TYPES OF SHOES DO YOU OFFER?",
  "HOW DO I RETURN AN ITEM?",
  "WHERE CAN I TRACK MY ORDER?",
  "DO YOU SHIP INTERNATIONALLY?",
  "WHAT IS YOUR EXCHANGE POLICY?",
];

function Frequenty() {
  // Поиск
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className={styles.frequenty}>
      <InfoHeader />

      <div className={styles.frequenty_search_content}>
        <div className={styles.frequenty_content}>
          <input
            type="text"
            placeholder="SEARCH FAQ"
            value={searchQuery}
            onChange={handleSearchChange}
          />

          {questions
            .filter((question) =>
              question.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((question, index) => (
              <div key={index}>
                <button>{question}</button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Frequenty;
