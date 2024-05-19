function pagina(nomePagina) {
    if (nomePagina == 'index') {
        window.location.href = '/';
    }

    nomePagina = nomePagina.trim();
    const urlCompleta = `/${nomePagina}.html`;
    window.location.href = urlCompleta;
};

document.addEventListener("DOMContentLoaded", function() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const conteudoDiv = document.querySelector('.conteudo');
    
    
    const conteudo1 = `<ul class="lista">
    <li>
        <p class="texto"><a target="_blank" href="https://blue-games-oficial.itch.io/confront-space/" class="texto-link">Confront Space (GameMaker Studio)</a></p>
    </li>

    <li>
        <p style="color: #007bff;" class="texto">Confront Space Mobile (Unity Engine)</p>
        <ul style="list-style-type: disc;">
            <li>
                <p class="texto"><a target="_blank" href="https://gamejolt.com/games/confrontspacemobile/500906/" class="texto-link">GameJolt</a></p>
            </li>

            <li>
                <p class="texto"><a target="_blank" href="https://blue-games-oficial.itch.io/confront-space-mobile/" class="texto-link">Itch.io</a></p>
            </li>
        </ul>
    </li>

    <li>
        <p class="texto"><a target="_blank" href="https://github.com/scaique/Faculdade_DevWeb/" class="texto-link">Faculdade DevWeb</a></p>
    </li>

    <li>
        <p class="texto"><a href="/versionamento-git.html" class="texto-link">Versionamento de Código</a></p>
    </li>

    <li>
        <p class="texto"><a target="_blank" href="https://github.com/scaique/Rocketseat_Java_ToDoList/" class="texto-link">to-do list (Spring Web)</a></p>
    </li>

    <li>
        <p class="texto"><a target="_blank" href="https://github.com/scaique/IntensivaoPython/" class="texto-link">Intensivão de Python</a></p>
    </li>

    <li>
        <p style="color: #007bff;" class="texto">Intensivão de JavaScript</p>
        <ul style="list-style-type: disc;">
            <li class="texto"><a target="_blank" href="https://github.com/scaique/IntensivaoJavaScript/" class="texto-link">GitHub</a></li>
            <li class="texto"><a target="_blank" href="https://scaique.github.io/IntensivaoJavaScript/" class="texto-link">GitHub Pages</a></li>
        </ul>
    </li>

    <li>
        <p class="texto"><a target="_blank" href="https://github.com/scaique/automacao-vendas/" class="texto-link">Automação de Registro de Vendas</a></p>
    </li>
</ul>`;

    const conteudo2 = `<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>IDE/Engine</th>
            <th>Link</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Confront Space</td>
            <td>GameMaker Studio</td>
            <td><a target="_blank" href="https://blue-games-oficial.itch.io/confront-space/" class="texto-link">Itch.io</a></td>
        </tr>
        <tr>
            <td>Confront Space Mobile</td>
            <td>Unity Engine</td>
            <td>
                <a target="_blank" href="https://gamejolt.com/games/confrontspacemobile/500906/" class="texto-link">- GameJolt</a><br>
                <a target="_blank" href="https://blue-games-oficial.itch.io/confront-space-mobile/" class="texto-link">- Itch.io</a>
            </td>
        </tr>
        <tr>
            <td>Faculdade DevWeb</td>
            <td>VSCode</td>
            <td><a target="_blank" href="https://github.com/scaique/Faculdade_DevWeb/" class="texto-link">GitHub</a></td>
        </tr>
        <tr>
            <td>Versionamento de Código</td>
            <td>IDX Project</td>
            <td><a target="_blank" href="https://github.com/scaique/VersionamentoDeCodigoGit/" class="texto-link">GitHub</a></td>
        </tr>
        <tr>
            <td>to-do list (Spring Web)</td>
            <td>IntelliJ IDEA</td>
            <td><a target="_blank" href="https://github.com/scaique/Rocketseat_Java_ToDoList/" class="texto-link">GitHub</a>
            </td>
        </tr>
        <tr>
            <td>Intensivão de Python</td>
            <td>PyCharm</td>
            <td><a target="_blank" href="https://github.com/scaique/IntensivaoPython/" class="texto-link">GitHub</a></td>
        </tr>
        <tr>
            <td>Intensivão de JavaScript</td>
            <td>VS Code</td>
            <td>
                <a target="_blank" href="https://github.com/scaique/IntensivaoJavaScript/" class="texto-link">- GitHub</a><br>
                <a target="_blank" href="https://scaique.github.io/IntensivaoJavaScript/" class="texto-link">- GitHub Pages</a>
            </td>
        </tr>
        <tr>
            <td>Automação de Registro de Vendas</td>
            <td>IDX Project</td>
            <td><a target="_blank" href="https://github.com/scaique/automacao-vendas/" class="texto-link">GitHub</a></td>
        </tr>
    </tbody>
</table>`;

    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('click', function() {
            if (this.checked) {
                // Verifica qual botão foi marcado
                if (this.value === 'conteudo1') {
                    // Insere o conteúdo da lista
                    conteudoDiv.innerHTML = conteudo1;
                } else if (this.value === 'conteudo2') {
                    // Insere o conteúdo da tabela
                    conteudoDiv.innerHTML = conteudo2;
                }
            }
        });
    });
    
    const checkedRadioButton = document.querySelector('input[type="radio"]:checked');
    if (checkedRadioButton) {
        const conteudo = checkedRadioButton.value;
        if (conteudo === 'conteudo1') {
            conteudoDiv.innerHTML = conteudo1;
        } else if (conteudo === 'conteudo2') {
            conteudoDiv.innerHTML = conteudo2;
        }
    }
});

