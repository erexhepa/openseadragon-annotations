import sinon from 'sinon';
import shapesFactory from './shapesFactory';

const fakeFactory = {
  getDispatcher() {
    return { dispatch: sinon.spy() };
  },

  resetDispatcher(Dispatcher) {
    Dispatcher.dispatch.reset();
  },

  getStore() {
    return {
      isActivityInProgress: sinon.stub(),
      getMode: sinon.stub(),
      getLast: sinon.stub(),
    };
  },

  resetStore(Store) {
    Store.isActivityInProgress.reset();
    Store.getMode.reset();
    Store.getLast.reset();
  },
};

export { fakeFactory };

export function generateAnnotations() {
  return [
    generatePath(),
    generatePath(),
    generatePath(),
  ];
}

export function generatePath() {
  const x = random(100);
  const y = random(100);
  const path = shapesFactory.getPath(x, y);
  for (let i = 0; i < 10; i++) {
    path[1].d += ` L ${random(100)} ${random(100)}`;
  }
  return path;
}

function random(max) {
  return Math.floor((Math.random() * max * 100)) / 100;
}
