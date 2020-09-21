interface Callback<K, V> {
  (key: K, value: V): void
}
export class Dictionary<K,V> {
  private keys: K[] = []
  private vals: V[] = []
  
  get size() {
    return this.keys.length
  }
  set(k: K, v: V) {
    const i = this.keys.indexOf(k);
    // 不存在
    if(i === -1){
      this.keys.push(k);
      this.vals.push(v);
    } else {
      this.vals[i] = v;
    }
  }

  forEach(callback: Callback<K, V>) {
    this.keys.forEach((k, i) => {
      const v = this.vals[i];
      callback(k, v);
    }) 
  }

  has(k: K) {
    return this.keys.includes(k)
  }
  
  delete(k: K) {
    if(this.keys.includes(k)){
      const i = this.keys.indexOf(k);
      this.keys.splice(i,1);
      this.vals.splice(i,1);
    } else {
      return '未找到该值'
    }
  }
}