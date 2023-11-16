const defaultNS = 'ber';
const statusPrefix = 'is';

interface IS {
  (status?: string): string,

  (status?: string, f?: boolean): string,

  (status: boolean, s: string): string
}

export const useNS = function (name: string) {
  const namespace = `${defaultNS}-${name}`;

  /**
   * @description 此处使用了BEM(block element modifier) 命名规范 
   * ber-button--primary
   */
  const b = (block: string | number) => {
    return block ? `${namespace}-${block}` : '';
  }

  const m = (modifier: string | number) => {
    return modifier ? `${namespace}--${modifier}` : '';
  }

  const is: IS = (status?: boolean | string, s?: string | boolean) => {
    if (typeof status === 'string'){
      if(typeof s === 'boolean') {
        return `${statusPrefix}-${status}`
      }
    }
    if (typeof status === 'boolean' && status) {
      return `${statusPrefix}-${s}`
    } 
    return ''
  }
  

  return {
    namespace,
    b,
    m,
    is,
  }
}
