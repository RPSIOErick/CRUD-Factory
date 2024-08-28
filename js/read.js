export class Read {
    constructor() { }

    // Gera o HTML para exibição das informações do cliente e da lista de clientes
    carregar() {
        const html = `


        <div class='list-model-display'>
            <div class='dark-gray-container' id='c-read'>
                <h1> INFORMAÇÕES DO CLIENTE </h1>

                <form id='form-cad'>
                    <!-- Campo para o nome do cliente, preenchido com valor default -->
                    <span id='name_span'> <label for='nome'> Nome: </label> </span>
                    <input type='text' id='nome_input' name='nome' required placeholder='Maria Silva' value='Maria Silva'>

                    <br>

                    <!-- Campos para idade e sexo do cliente, preenchidos com valores default -->
                    <span id='age-sex'>
                        <span id='age_span'> <label for='idade'> Idade: </label> </span> <br>
                        <input type='text' id='idade_input' name='idade' required placeholder='18' maxlength='3' value='18'>

                        <span id='sex-span'> <label for='sexo'> Sexo: </label> </span>
                        <select id='sexo_select' name='sexo' required>
                            <option value='M'> Masculino </option>
                            <option value='F' selected> Feminino </option>
                        </select>
                    </span>

                    <br>

                    <!-- Botão para adicionar endereços -->
                    <button type='button' id='btn-adress'> ADICIONAR ENDEREÇO </button>

                    <!-- Contêiner para endereços com um formulário padrão preenchido -->
                    <div id="enderecos" style="display: block;">
                        <div class='address-container'>
                            <div class='header' id='address-header'>
                                <span>ENDEREÇO 1</span>
                                <span class='arrow'>&#9660;</span>
                            </div>
                            <div class='address-form' id='address-form'>
                                <label>CEP:</label>
                                <input type='text' placeholder='00000-000' value='08041-130'>

                                <label>Rua:</label>
                                <input type='text' placeholder='Av. Paulista' value='Rua Nova Santa Rosa'>

                                <div id="N-C" class="input-pair">
                                    <span>
                                        <label>Nº:</label>
                                        <input type='text' placeholder='100' id='N-C-Number' value='44'>
                                    </span>

                                    <span>
                                        <label>Complemento:</label>
                                        <input type='text' placeholder='Apartamento 23' id='N-C-Compliment' value='Casa 03'>
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

                    <!-- Botão para salvar todas as informações do formulário -->
                    <button type='submit' class='btn-submit'> SALVAR TUDO </button>
                </form>
            </div>

            <!-- Seção para exibir a lista de clientes -->
            <div id='dark-gray-list-container'>
                <h1> CLIENTES </h1>

                <span> * Para excluir o cliente atual, selecione outro cliente. </span>
                    
                <div id='dark-gray-list'>
                    <!-- Lista de clientes com opções para exclusão -->
                    <p class='selected-p'> Maria Silva <span class='trash-icon'> <img src='../assets/Delete-Icon.png'> </span> </p>
                    <p> José Aguiar <span class='trash-icon'> <img src='../assets/Delete-Icon.png'> </span> </p>
                    <p> Maria Silva <span class='trash-icon'> <img src='../assets/Delete-Icon.png'> </span> </p>
                    <p> José Aguiar <span class='trash-icon'> <img src='../assets/Delete-Icon.png'> </span> </p>
                </div>
            </div>

        </div>
        `;

        return html;
    }

    // Inicializa eventos para interação com o formulário e a lista de clientes
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
