const url = "https://appwhippo.onrender.com/api";

export async function getAllNews() {
  try {
    const response = await fetch(`${url}/noticias`);
    const data = await response.json();
    console.log(data.results);
    return data.results.reverse();
  } catch (error) {
    console.log(error);
  }
}

export async function getNewsById(id) {
  try {
    const response = await fetch(`${url}/noticias/${id}`);
    const peticion = await response.json();
    console.log(peticion.noticia);
    return peticion.noticia;
  } catch (error) {
    console.log(error);
  }
}
