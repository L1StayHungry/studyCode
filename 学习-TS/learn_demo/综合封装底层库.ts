/**
 * 功能： 定义一个操作数据库的库 支持 MYSQL MSSQL MONGODB
 * 要求：功能一致 都有add update delete get方法
 * 注意：约束统一的规范，代码重用
 * 解决方案：
 * 需要约束规范所以要定义接口，需要代码重用所以用到泛型
 */

interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number):boolean;
  delete(id: number):boolean;
  get(id: number):any[];
}

class MYSQL_DB<T> implements DBI<T> {
  add(info: T): boolean {
    console.log(info);
    return true;
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class MSSQL_DB<T> implements DBI<T> {
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class MONGODB_DB<T> implements DBI<T> {
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class User {
  username: string | undefined; 
  password: string | undefined; 
}

let u = new User();
u.username = 'zhangsan' 
u.password = '123456'

let uMySql = new MYSQL_DB<User>()
uMySql.add(u)