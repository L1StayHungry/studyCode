// map和object有很大的相似之，但是map的键值对是有序的
/**
 * map的方法：
 * 设值：map.set("key","value");
 * 取值：map.get("key");
 * 判断键值对是否存在：map.has("key");
 * 删除：map.delete("key")
 */

class LRUCache {
    constructor(capacity) {
      this.capacity = capacity
      this.map = new Map()
    }
   
    get(key) {
      let val = this.map.get(key)
      if (typeof val === 'undefined') { return -1 }
      this.map.delete(key)
      this.map.set(key, val)
      return val
    }
   
    put(key, value) {
      if (this.map.has(key)) { 
        this.map.delete(key) 
      }
   
      this.map.set(key, value)
      let keys = this.map.keys()
      while (this.map.size > this.capacity) { this.map.delete(keys.next().value) }
    }
  }

cache = new LRUCache( 2 );

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(2));       // 返回  1
// cache.put(3, 3);    // 该操作会使得关键字 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得关键字 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */