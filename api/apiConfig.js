const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c0a7df694b9bcf6b450b98318fb2d2f1',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;