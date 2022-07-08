const STATE = {
  FULLFILLED: "fullfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};

class MyPromise {
  #thenCbs = [];
  #catchCbs = [];
  #state = STATE.PENDING;
  #value;
  constructor(cb) {
    try {
      cb(this.#onSucess, this.#onFail);
    } catch (error) {
      // any time promise fails it rejects with error
      this.onFail(error);
    }
  }

  #runCallbacks() {
    if (this.#state === STATE.FULLFILLED) {
      this.#thenCbs.forEach((callback) => {
        callback(this.#value);
      });
      this.#thenCbs = [];
    }

    if (this.#state === STATE.REJECTED) {
      this.#catchCbs.forEach((callback) => {
        callback(this.#value);
      });
    }
    this.#catchCbs = [];
  }

  #onSucess(value) {
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = STATE.FULLFILLED;
    this.#runCallbacks();
  }
  #onFail(value) {
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = STATE.REJECTED;
    this.#runCallbacks();
  }

  then(cb) {
    this.#thenCbs.push(cb);
  }
}

export default MyPromise;

new Promise((resolve, reject) => {});
new Promise(cb);
