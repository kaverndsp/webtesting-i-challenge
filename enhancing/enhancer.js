module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement > 15){
    const newItem = {
      ...item,
      durability: item.durability - 10,
      enhancement: item.enhancement + 1
  }
    return newItem;
  
}
}


  


function fail(item) {
   if(item.enhancement < 15){
    const newItem = {
      ...item,
      durability: item.durability - 5,
      }
      return newItem; 
  }
}

function repair(item) {

  const newItem = {
    ...item,
    durability: 100,
    }
  return newItem;
}

function get(item) {
  return { ...item };
}
