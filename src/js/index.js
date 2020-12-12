import axios from 'axios';

async function getRecipe(query) {
  try {

    const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
    const recipes = res.data.recipes[0];
    console.log(recipes);

  }catch(err) {
      console.log(err);
  }
}

getRecipe('pizza');