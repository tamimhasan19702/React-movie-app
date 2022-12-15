const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '404fa460f74efc817516c4d2d489c40a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;