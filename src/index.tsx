import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import * as IPFS from 'ipfs';

import { EveesEthereumWrapper } from '@uprtcl/evees-ethereum';
import { EveesReader } from '@uprtcl/evees-reader';

import { env } from './env';

export let readerP: Promise<EveesReader>;

const ipfsJSConfig = {
  preload: { enabled: false },
  relay: { enabled: true, hop: { enabled: true, active: true } },
  EXPERIMENTAL: { pubsub: true },
  config: {
    init: true,
    Addresses: {
      Swarm: env.pinner.Swarm,
    },
    Bootstrap: env.pinner.Bootstrap,
  },
};

readerP = new Promise((resolve) =>
  IPFS.create(ipfsJSConfig).then((ipfs) => {
    const wrapper = new EveesEthereumWrapper(
      ipfs,
      env.ethers.provider,
      env.pinner
    );
    wrapper.load().then(() => {
      const reader = new EveesReader(wrapper.remotes, wrapper.ipfsStore);
      resolve(reader);
    });
  })
);

const rootEl = document.getElementById('root');

render(<App />, rootEl);
