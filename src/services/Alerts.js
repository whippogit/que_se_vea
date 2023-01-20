const ApiAlert = "http://localhost:4000/api";

export async function getAllAlerts() {
  try {
    const response = await fetch(`${ApiAlert}`);
    const data = await response.json();
    console.log(data.results);
    return data.results.reverse();
  } catch (error) {
    console.log(error);
  }
}


