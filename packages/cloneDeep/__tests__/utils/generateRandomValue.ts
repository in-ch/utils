const generateRandomValue = (depth: number) => {
  const types = ['string', 'number', 'boolean', 'object', 'array', 'null'];
  const type = types[Math.floor(Math.random() * types.length)];

  switch (type) {
    case 'string':
      return Math.random().toString(36).substring(2, 10);
    case 'number':
      return Math.random() * 1000;
    case 'boolean':
      return Math.random() > 0.5;
    case 'object':
      return depth > 0 ? generateRandomObject(depth - 1) : null;
    case 'array':
      return depth > 0 ? generateRandomArray(depth - 1) : [];
    case 'null':
      return null;
    default:
      return undefined;
  }
};

const generateRandomObject = depth => {
  const obj = {};
  const keysCount = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < keysCount; i++) {
    const key = Math.random().toString(36).substring(2, 6);
    obj[key] = generateRandomValue(depth);
  }

  return obj;
};

const generateRandomArray = depth => {
  const arr: any[] = [];
  const itemsCount = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < itemsCount; i++) {
    arr.push(generateRandomValue(depth));
  }

  return arr;
};

export default generateRandomValue;
