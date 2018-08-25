
export module UserModule {
  export class User {

    static user: {};

    static getUser() {
      return this.user;
    }

    static setUser(u) {
      this.user = u;
    }

  }
}
