export const goToHome = (navigate) => {
  navigate('/');
};

export const goToPokedex = (navigate) => {
  navigate('/pokedex');
};

export const goToDetails = (navigate, name) => {
    navigate(`/detalhes/${name}/`);
    console.log(name)
};
