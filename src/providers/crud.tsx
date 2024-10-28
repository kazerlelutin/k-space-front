import { getOrCreateContext } from '@/utils/getOrCreateContext';
import { CrudActions } from '@/types/crud';
import { JSX } from 'preact/jsx-runtime';
import { BASE_CRUD } from '@/utils/baseCrud';

interface CrudProviderProps<T> {
  name: string;
  crud: Partial<CrudActions<T>>;
  children: JSX.Element; 
}

export function CrudProvider<T>({
  children,
  name,
  crud,
}: CrudProviderProps<T>) {
  const Ctx = getOrCreateContext(name);
  return <Ctx.Provider value={() => Object.keys(BASE_CRUD).reduce((acc, obj)=> {
    acc[obj] = {
      ...BASE_CRUD[obj],
      ...crud[obj]
    }
    return acc
  },{})  }>{children}</Ctx.Provider>;
};
