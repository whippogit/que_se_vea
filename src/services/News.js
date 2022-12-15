const Api = "https://appwhippo.onrender.com/api";

export async function getAllNews() {
  try {
    const response = await fetch(`${Api}`);
    const data = await response.json();
    console.log(data.results);
    return data.results.reverse();
  } catch (error) {
    console.log(error);
  }
}

export async function getNewsByTitle(title) {
  try {
    const response = await fetch(`${Api}/${title}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
