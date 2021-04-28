import '../styles/global.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

//context
import { PlayerContextProvider } from '../contexts/PlayerContext';

import React from 'react';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp
