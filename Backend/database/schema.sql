CREATE TABLE product (
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    img TEXT NOT NULL,
    value NUMBER NOT NULL,
    CONSTRAINT PK_PRODUCT PRIMARY KEY (name),
    CONSTRAINT CHECK_VALUE_PRODUCT CHECK (value > 0)
);

INSERT INTO product (name, description, img, value)
    VALUES 
        (
            'Poção Blue Sky',
            'Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando)',
            'https://nmytawznwspmwbzruofj.supabase.co/storage/v1/object/public/web-pratica-2/Blue-Sky.png',
            300
        ),
        (
            'Poção do Perfume Misterioso',
            'Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.',
            'https://nmytawznwspmwbzruofj.supabase.co/storage/v1/object/public/web-pratica-2/Perfume-Misterioso.png',
            200
        ),
        (
            'Poção de Pinus',
            'Essa poção faz com que você fique 10 cm mais alto! Observação: efeitos colaterais desconhecidos.',
            'https://nmytawznwspmwbzruofj.supabase.co/storage/v1/object/public/web-pratica-2/Pinus.png',
            3000
        ),
        (
            'Poção da Beleza Eterna',
            'Veneno que mata rápido.',
            'https://nmytawznwspmwbzruofj.supabase.co/storage/v1/object/public/web-pratica-2/Beleza-Eterna.png',
            100
        ),
        (
            'Poção do Arco Íro',
            'Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.',
            'https://nmytawznwspmwbzruofj.supabase.co/storage/v1/object/public/web-pratica-2/Arco-Iro.png',
            120
        ),
        (
            'Caldeirão das Verdades Secretas',
            'As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5L.',
            'https://nmytawznwspmwbzruofj.supabase.co/storage/v1/object/public/web-pratica-2/Caldeirao-Das-Verdades-Secretas.png',
            150
        )