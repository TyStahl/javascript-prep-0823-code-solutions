/* exported getKeys */
function getKeys(object) {
  const properties = [];
  for (const property in object) {
    properties.push(property);
  }
  return properties;
}
