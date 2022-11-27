const Api = "https://rickandmortyapi.com/api/character";

export async function getAllNews() {
  try {
    const response = await fetch(`${Api}`);
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getNewsByFlightNumber(flightNumber) {
  try {
    const response = await fetch(`${Api}/${flightNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
