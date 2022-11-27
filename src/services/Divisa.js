const ApiDolar = "https://api.bluelytics.com.ar/json/last_price";

export async function getAllDolar() {
  try {
    const response = await fetch(`${ApiDolar}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}