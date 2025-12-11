class Store {
  #counter = {
        squares: localStorage.getItem('squares'),
        circles: localStorage.getItem('circles'),
    }
   

  #subscribers = new Set(); // zbiór callbacków

  // Gettery publiczne
  get squares() {

    if (this.#counter.squares !== null)
    return this.#counter.squares;
    else    return 0;
  }

  get circles() {
    if (this.#counter.circles !== null)
    return this.#counter.circles;
    else    return 0;
  }
 

  getState() {
    // kopia całego stanu np. do debugowania
    return { ...this.#counter };
  }

  addSquare() {
    this.#counter.squares++;
    localStorage.setItem('squares', this.#counter.squares);
    this.#notify();
  }

  addCircle() {
    this.#counter.circles++;
    localStorage.setItem('circles', this.#counter.circles);
    this.#notify();
  }

  deleteSquare() {
    if (this.#counter.squares!==0) this.#counter.squares--;
    localStorage.setItem('squares', this.#counter.squares);
    this.#notify();
  }

  deleteCircle() {
    if (this.#counter.circles!==0) this.#counter.circles--;
    localStorage.setItem('circles', this.#counter.circles);
    this.#notify();
  }

  reset(){
    this.#counter.squares=0;
    this.#counter.circles=0;

    localStorage.setItem('squares', 0);
    localStorage.setItem('circles', 0);
  }

  // Subskrypcje
  subscribe(callback) {
    this.#subscribers.add(callback);
    // od razu dajemy aktualny stan
    callback(this.getState());
    // zwracamy funkcję do wypisania się
    return () => this.#subscribers.delete(callback);
  }

  #notify() {
    for (const cb of this.#subscribers) {
      cb(this.getState());
    }
  }
}

// Singleton
const store = new Store();