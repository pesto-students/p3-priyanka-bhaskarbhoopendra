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
  #onSuccessBind = this.#onSucess.bind(this);
  #OnFailBind = this.#onFail.bind(this);

  constructor(cb) {
    try {
      cb(this.#onSuccessBind, this.#OnFailBind);
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
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;

      if (value instanceof MyPromise) {
        value.then(this.#onSuccessBind, this.#onFailBind);
        return;
      }

      this.#value = value;
      this.#state = STATE.FULFILLED;
      this.#runCallbacks();
    });
  }

  #onFail(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;
      if (value instanceof MyPromise) {
        value.then(this.#onSuccessBind, this.#onFailBind);
        return;
      }
      if (this.#catchCbs.length === 0) {
        throw new UncaughtPromiseError(value);
      }
      this.#value = value;
      this.#state = STATE.REJECTED;
      this.#runCallbacks();
    });
  }

  then(thenCb, catchCb) {
    return new MyPromise((resolve, reject) => {
      this.#thenCbs.push((result) => {
        if (thenCb == null) {
          resolve(result);
          return;
        }
        try {
          resolve(thenCb(result));
        } catch (error) {
          reject(error);
        }
      });

      this.#catchCbs.push((result) => {
        if (catchCb == null) {
          reject(result);
          return;
        }
        try {
          resolve(catchcb(result));
        } catch (error) {
          reject(error);
        }
      });

      this.#runCallbacks();
    });
  }

  catch(cb) {
    this.then(undefined, cb);
  }
}

export default MyPromise;

new Promise((resolve, reject) => {});
new Promise(cb);
