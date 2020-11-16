import * as firebase from 'firebase/app';
import { SemanticICONS } from 'semantic-ui-react';

export type User = firebase.User;

export type Provider =
  | firebase.auth.FacebookAuthProvider
  | firebase.auth.GoogleAuthProvider
  | firebase.auth.TwitterAuthProvider;

export type TagLabel =
  | 'その他'
  | '食費'
  | '家賃'
  | '電気代'
  | '水道代'
  | 'ガス代'
  | '電話'
  | '交通費';

export type ColorLabel =
  | 'green'
  | 'grey'
  | 'teal'
  | 'violet'
  | 'yellow'
  | 'blue'
  | 'red'
  | 'orange'
  | 'olive'
  | 'purple'
  | 'pink'
  | 'brown'
  | 'black';

export interface Store {
  expense: {
    ids: string[];
    entities: Record<string, StoreExpense>;
  };
  isLoading: boolean;
  device: StoreDevice;
}

export interface StoreExpense {
  id: string;
  date: Date;
  formatedDate: string;
  amount: number;
  tagLabel: TagLabel;
  tagIcon: SemanticICONS;
}

export type StoreDevice = 'widescreen' | 'largeScreen' | 'computer' | 'tablet' | 'mobile';

export interface Expense {
  id: string;
  date: Date;
  formatedDate: string;
  amount: number;
  tag: string;
}
