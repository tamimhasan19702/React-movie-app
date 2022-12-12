const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c2f70e3771bb638e351a05c7519dc169',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;