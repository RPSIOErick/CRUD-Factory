export class Read {
    constructor() {

    }

    carregar() {
        return `
            <div class='dark-gray-container'>
                <h1> INFORMAÇÕES DO CLIENTE </h1>

                <form id='form-cad'>
                
                    <span id='name_span'> <label for='nome'> Nome: </label> </span>
                    <input type='text' id='nome_input' name='nome' required placeholder='Maria Silva'>

                    <br>

                    <span id='age-sex'>
                        
                        <span id='age_span'> <label for='idade'> Idade: </label> </span> <br>
                        <input type='text' id='idade_input' name='idade' required placeholder='18'>

                        <span id='sex-span'> <label for='sexo'> Sexo: </label> </span>
                        <select id='sexo_select' name='sexo' required>
                            <option value='M'> Masculino </option>
                            <option value='F' selected> Feminino </option>
                        </select>
                    
                    </span>

                    <br>

                    <button type='button' id='btn-adress'> ADICIONAR ENDEREÇO </button>

                    <div id='enderecos'>
                    </div>

                    <button type='submit' class='btn-submit'> SALVAR TUDO </button>

                </form>
            </div>
        `
    }
}