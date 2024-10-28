import { createContext } from 'preact';
import { Context } from 'preact';

const Contexts: { [key: string]: Context<any> } = {};

export function getOrCreateContext(name: string): Context<any> {
  if (!Contexts[name]) {
    Contexts[name] = createContext({});
  }
  return Contexts[name];
}
