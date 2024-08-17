const omit = (obj, keys) => {
  const result = { ...obj };
  keys.forEach(key => {
    delete result[key];
  });
  return result;
};

const fieldDef = {
  legend: 'some legend',
  axis: 'some axis',
  header: 'some header',
  scale: 'some scale',
  otherProp: 'some other prop'
};

const updatedFieldDef = omit(fieldDef, ['legend', 'axis', 'header', 'scale']);

console.log(updatedFieldDef);
// Output: { otherProp: 'some other prop' }
