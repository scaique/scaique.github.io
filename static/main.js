function pagina(nomePagina) {
    if (nomePagina == 'index') {
        window.location.href = '/';
    }

    nomePagina = nomePagina.trim();
    const urlCompleta = `/${nomePagina}.html`;
    window.location.href = urlCompleta;
};