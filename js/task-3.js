
class StringBuilder  {
#value

 constructor(initialValue){
    this.#value=initialValue
 }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value = this.#value.concat(str);// this.value=this.value+str;
  }//ab+cd=abcd

  padStart(str) {
    this.#value = str.concat(this.#value);// this.value=str+this.value;
  }//cd+as=cdab

  padBoth(str) {
    this.padEnd(str);
    this.padStart(str);
  }
};

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="