import {isNull} from 'util';

export module UserModule {
  export class User {

    private static key_name = 'uName';
    private static key_message_tp = 'uMessageTp';
    private static key_message_txt = 'uMessageTxt';

    private static user: string;
    private static message: {};

    static getUser() {
      return this.user;
    }

    static getMessage() {
      return this.message;
    }

    static saveInfo(mes, user) {
      this.message = mes;
      if ( mes['type'] === 'I' ) {
        this.user = user;
      }
    }

    private static clearInfo() {
      this.user = null;
      this.message = {};
    }

    static saveLocal() {
      window.localStorage.clear();
      window.localStorage.setItem(this.key_name, this.user);
      window.localStorage.setItem(this.key_message_tp, this.message['type']);
      window.localStorage.setItem(this.key_message_txt, this.message['message']);
      this.clearInfo();
    }

    static getLocal() {
      this.saveInfo(
        {
                'type': isNull(window.localStorage.getItem(this.key_message_tp))
                  ? this.message['type']
                  : window.localStorage.getItem(this.key_message_tp),
                'message': isNull(window.localStorage.getItem(this.key_message_txt))
                  ? this.message['message']
                  : window.localStorage.getItem(this.key_message_txt)
              },
        isNull(window.localStorage.getItem(this.key_name)) ? this.user : window.localStorage.getItem(this.key_name)
      );
      window.localStorage.clear();
    }

  }
}
