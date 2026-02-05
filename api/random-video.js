module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const category = req.query.category || 'all';
        
        const randomUrls = {
            videos: [
                'https://www.pornhub.com/random',
                'https://www.txxx.com/random',
                'https://www.upornia.com/random',
            ],
            hentai: [
                'https://hanime.tv/browse/random',
                'https://multporn.net/random',
                'https://hentaigasm.com/?orderby=rand',
            ],
        };

        let availableUrls = [];
        
        if (category === 'all') {
            availableUrls = [
                ...randomUrls.videos,
                ...randomUrls.hentai
            ];
        } else {
            availableUrls = randomUrls[category] || randomUrls.videos;
        }

        const randomUrl = availableUrls[Math.floor(Math.random() * availableUrls.length)];
        
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