import mysql, { Connection, FieldPacket, RowDataPacket } from "mysql2";
import UserError from "../dto/error";

export type user = {
  username: string;
  id?: string | number;
};

interface UserInterface {
  getUsers(): Promise<user>;

  addUser(data: user): void;

  updateUser(id: string, data: user): void;

  deleteUser(id: string): void;
}

class UserModel implements UserInterface {
  private connection: Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "efftoreff",
      database: "test",
    });
  }

  async getUsers(): Promise<any> {
    const result: [any, FieldPacket[]] = await this.connection
      .promise()
      .query("SELECT * FROM users;");
    const data: Array<user> = result[0];
    return data;
  }

  async addUser({ username }: user) {
    const result: [any, FieldPacket[]] = await this.connection
      .promise()
      .query(`SELECT * FROM users WHERE username = '${username}';`);
    const data: Array<user> = result[0];
    const targetUser: user = data[0];
    if (targetUser) {
      const newError: UserError = new UserError("User already exist", 409);
      throw newError;
    }

    const query = `INSERT INTO test.users (username) VALUES('${username}');`;
    await this.connection.promise().query(query);
  }

  async updateUser(id: string, { username }: user) {
    const result: [any, FieldPacket[]] = await this.connection
      .promise()
      .query(`SELECT * FROM users WHERE id = ${id};`);
    const data: Array<user> = result[0];
    const targetUser: user = data[0];
    if (!targetUser) {
      const newError: UserError = new UserError("User not found", 404);
      throw newError;
    }

    const result2: [any, FieldPacket[]] = await this.connection
      .promise()
      .query(`SELECT * FROM users WHERE username = '${username}';`);
    const data2: Array<user> = result2[0];
    const targetUser2: user = data2[0];
    if (targetUser2 && targetUser.id !== targetUser2.id) {
      const newError: UserError = new UserError(
        "User already exist with this username",
        409
      );
      throw newError;
    }

    const query = `UPDATE users SET username='${username}' WHERE id=${id};`;
    await this.connection.promise().query(query);
  }

  async deleteUser(id: string) {
    const result: [any, FieldPacket[]] = await this.connection
      .promise()
      .query(`SELECT * FROM users WHERE id = ${id};`);
    const data: Array<user> = result[0];
    const targetUser: user = data[0];
    if (!targetUser) {
      const newError: UserError = new UserError("User not found", 404);
      throw newError;
    }

    const query = `DELETE FROM users WHERE id=${id};`;
    await this.connection.promise().query(query);
  }
}

// class UserModel2 extends UserModel implements UserInterface2 {
//
// }

export const userOrm = new UserModel();
