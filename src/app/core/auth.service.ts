import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
// import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable()
export class AuthService {
  authState: any = null; // 用户信息
  userRef: any = null;

  get authenticated() {
    return this.authState !== null;
  }

  // 当前用户
  get currentUser() {
    return this.authenticated ? this.authState : null;
  }


  // 当前登录用户id
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // 用户账号
  get currentUserName(): string {
    if (!this.authState) {
      return 'Stbui';
    } else {
      return this.authState['displayName'] || '佚名';
    }
  }

  // 匿名用户
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.anonymous : false;
  }

  constructor(
  ) {

  }

}
