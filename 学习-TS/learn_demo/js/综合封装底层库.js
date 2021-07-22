"use strict";
/**
 * 功能： 定义一个操作数据库的库 支持 MYSQL MSSQL MONGODB
 * 要求：功能一致 都有add update delete get方法
 * 注意：约束统一的规范，代码重用
 * 解决方案：
 * 需要约束规范所以要定义接口，需要代码重用所以用到泛型
 */
var MYSQL_DB = /** @class */ (function () {
    function MYSQL_DB() {
    }
    MYSQL_DB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MYSQL_DB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MYSQL_DB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MYSQL_DB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MYSQL_DB;
}());
var MSSQL_DB = /** @class */ (function () {
    function MSSQL_DB() {
    }
    MSSQL_DB.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MSSQL_DB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MSSQL_DB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MSSQL_DB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MSSQL_DB;
}());
var MONGODB_DB = /** @class */ (function () {
    function MONGODB_DB() {
    }
    MONGODB_DB.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MONGODB_DB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MONGODB_DB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MONGODB_DB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MONGODB_DB;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = 'zhangsan';
u.password = '123456';
var uMySql = new MYSQL_DB();
uMySql.add(u);
