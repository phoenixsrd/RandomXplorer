// SOLUÇÃO SIMPLIFICADA - Usa as páginas /random dos próprios sites
// Muito mais confiável que scraping!

module.exports = async (req, res) => {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const category = req.query.category || 'all';
        
        // URLs diretas de páginas random que FUNCIONAM
        const randomUrls = {
            videos: [
                'https://www.pornhub.com/random',
                'https://www.xvideos.com/random',
                'https://www.xnxx.com/random',
                'https://www.redtube.com/random/porn',
                'https://www.youporn.com/random/video/',
                'https://spankbang.com/random/video/',
                'https://www.tube8.com/random/',
                'https://beeg.com/random',
                'https://xhamster.com/random',
                'https://www.txxx.com/random/',
                'https://www.porntrex.com/random',
                'https://hqporner.com/random',
                'https://www.eporner.com/random/',
                'https://www.tnaflix.com/random.php',
                'https://www.4tube.com/random',
                'https://www.porn300.com/random/',
                'https://fapster.xxx/random/',
                'https://www.upornia.com/random/',
            ],
            hentai: [
                'https://hanime.tv/browse/hentai-videos?order_by=views',
                'https://multporn.net/random',
                'https://www.simply-hentai.com/random',
                'https://animeporn.xxx/random/',
                'https://hentaigasm.com/random/',
                'https://3dhentai.xxx/random/',
                'https://www.pornhub.com/video/random?c=73',
                'https://hentaiworld.tv/videos',
            ],
            legendado: [
                'https://www.pornhub.com/random',
                'https://www.xvideos.com/random',
                'https://spankbang.com/random/video/',
                'https://xhamster.com/random',
            ]
        };

        let availableUrls = [];
        
        if (category === 'all') {
            // Combinar todas as categorias
            availableUrls = [
                ...randomUrls.videos,
                ...randomUrls.hentai
            ];
        } else {
            availableUrls = randomUrls[category] || randomUrls.videos;
        }

        // Escolher URL aleatória
        const randomUrl = availableUrls[Math.floor(Math.random() * availableUrls.length)];
        
        // Log para debug
        console.log(`Categoria: ${category}, URL escolhida: ${randomUrl}`);
        
        return res.status(200).json({
            success: true,
            url: randomUrl,
            category: category,
            message: 'Redirecionando para vídeo aleatório'
        });
        
    } catch (error) {
        console.error('Erro:', error);
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};
