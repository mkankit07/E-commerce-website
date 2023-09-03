export function fetchAllProduct() {

  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductByFilter(filter) {
  console.log("fetchProductByFilter",filter);
  let queriString=""
  for(let key in filter){
    queriString += `${key}=${filter[key]}&`
  }
  console.log(queriString);
  return new Promise(async (resolve) =>{
    const response = await fetch(`http://localhost:8080/products?${queriString}`) 
    const data = await response.json()
    resolve({data})
  }
  );
}