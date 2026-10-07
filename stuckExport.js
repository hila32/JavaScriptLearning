//private
const _array = new WeakMap();

//public
export class Stack {
  constructor() {
    _array.set(this, []);
  }

  get count() {
    return _array.get(this).length;
  }

  push(val) {
    const array = _array.get(this);
    array.push(val);
  }

  pop() {
    const array = _array.get(this);

    if (array.length === 0) throw new Error("stuck is empty");
    return array.pop();
  }

  peek() {
    const array = _array.get(this);

    if (array.length === 0) throw new Error("stuck is empty");
    return array[array.length - 1];
  }
}
