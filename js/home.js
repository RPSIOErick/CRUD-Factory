export class Home {
    constructor() { }

    // Gera o HTML para o formulário de cadastro do cliente
    carregar() {
        const html = `
            <div class='dark-gray-container' id='c-cadastro'>
                <h1> CLIENTE - CADASTRO </h1>

                <form id='form-cad'>
                    <!-- Campo para o nome do cliente -->
                    <span id='name_span'> <label for='nome'> Nome: </label> </span>
                    <input type='text' id='nome_input' name='nome' required placeholder='Maria Silva'>

                    <br>

                    <!-- Campos para idade e sexo do cliente -->
                    <span id='age-sex'>
                        <span id='age_span'> <label for='idade'> Idade: </label> </span> <br>
                        <input type='text' id='idade_input' name='idade' required placeholder='18' maxlength='3'>

                        <span id='sex-span'> <label for='sexo'> Sexo: </label> </span>
                        <select id='sexo_select' name='sexo' required>
                            <option value='M'> Masculino </option>
                            <option value='F' selected> Feminino </option>
                        </select>
                    </span>

                    <br>

                    <!-- Botão para adicionar endereços -->
                    <button type='button' id='btn-adress'> ADICIONAR ENDEREÇO </button>

                    <!-- Contêiner para endereços -->
                    <div id="enderecos">
                        <div class='address-container'>
                            <!-- Cabeçalho do endereço -->
                            <div class='header' id='address-header'>
                                <span>ENDEREÇO 1</span>
                                <span class='arrow'>&#9660;</span>
                            </div>
                            <!-- Formulário para detalhes do endereço -->
                            <div class='address-form' id='address-form'>
                                <label>CEP:</label>
                                <input type='text' placeholder='00000-000'>

                                <label>Rua:</label>
                                <input type='text' placeholder='Av. Paulista'>

                                <div id="N-C" class="input-pair">
                                    <span>
                                        <label>Nº:</label>
                                        <input type='text' placeholder='100' id='N-C-Number'>
                                    </span>

                                    <span>
                                        <label>Complemento:</label>
                                        <input type='text' placeholder='Apartamento 23' id='N-C-Compliment'>
                                    </span>
                                </div>
                      
                                <label for="cidade">Cidade:</label>

                                <br>

                                <select id="cidade_select">
                                    <option value="São Paulo">São Paulo</option>
                                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                                    <option value="Belo Horizonte">Belo Horizonte</option>
                                    <option value="Curitiba">Curitiba</option>
                                    <option value="Porto Alegre">Porto Alegre</option>
                                </select>

                                <br>

                                <label for="estado">Estado:</label>

                                <br>

                                <select id="estado_select">
                                    <option value="SP">SP</option>
                                    <option value="RJ">RJ</option>
                                    <option value="MG">MG</option>
                                    <option value="PR">PR</option>
                                    <option value="RS">RS</option>
                                </select>

                                <br>

                                <label for="pais">País:</label>

                                <br>

                                <select id="pais_select">
                                    <option value="Brasil">Brasil</option>
                                    <option value="Estados Unidos">Estados Unidos</option>
                                    <option value="Canadá">Canadá</option>
                                    <option value="Reino Unido">Reino Unido</option>
                                    <option value="Alemanha">Alemanha</option>
                                </select>
                                
                                <br>
                                
                                <button>SALVAR</button>
                            </div>
                        </div>
                    </div>

                    <!-- Botão para salvar todo o formulário -->
                    <button type='submit' class='btn-submit'> SALVAR TUDO </button>
                </form>
            </div>
        `;

        return html;
    }

    // Inicializa eventos para interação com o formulário
    inicializarEventos() {
        // Seleciona elementos relevantes do DOM
        const header = document.getElementById('address-header');
        const addressForm = document.getElementById('address-form');
        const arrow = header.querySelector('.arrow');
        const divEnderecos = document.getElementById('enderecos');
        const btnAdress = document.getElementById('btn-adress');

        // Alterna a visibilidade do formulário de endereço e a rotação da seta
        header.addEventListener('click', () => {
            if (addressForm.style.display === "block") {
                addressForm.style.display = "none";
                arrow.style.transform = "rotate(0deg)";
            } else {
                addressForm.style.display = "block";
                arrow.style.transform = "rotate(180deg)";
            }
        });

        // Exibe a seção de endereços ao clicar no botão
        btnAdress.addEventListener('click', (e) => {
            divEnderecos.style.display = 'block';
        });
    }
}
