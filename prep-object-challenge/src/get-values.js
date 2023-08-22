/* exported getValues */
function getValues(object) {
  const properties = [];
  for (const property in object) {
    properties.push(object[property]);
  }
  return properties;
}
