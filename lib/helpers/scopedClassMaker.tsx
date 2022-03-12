const libName = 'rui'

export const scopedClassMaker = (prefix: string) => {
  return (name?: string) => {
    return [libName, prefix, name].filter(Boolean).join('-');
  };
};
