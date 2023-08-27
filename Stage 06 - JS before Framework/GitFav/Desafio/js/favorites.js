import { GitFavUser } from "./githubUser.js";

// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites{
    constructor(root){
        this.root = document.querySelector(root);
        this.load();
    }

    async add(username){
        try {
            const userExists = this.entries.find(entry => entry.login.toLowerCase() === username.toLowerCase());

            if(userExists){
                throw new Error('Usuário já está na lista de favoritos!');
            }

            const user = await GitFavUser.search(username);
            
            if(user.login === undefined){
                throw new Error('Usuário não encontrado!');
            }

            this.entries = [user, ...this.entries];
            this.update();    
            this.save();
        } 
        catch (error) {
            alert(error.message);
        }
    }

    load(){
        this.entries = JSON.parse(localStorage.getItem('@github-favorites')) || [];
    }

    delete(userDelete){
        const filteredEntries = this.entries.filter(entry => entry.login !== userDelete.login);
        
        this.entries = filteredEntries;
        this.update();
        this.save();
    }

    save(){
        localStorage.setItem('@github-favorites', JSON.stringify(this.entries));
    }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites{
    constructor(root){
        super(root);

        this.tbody = this.root.querySelector('table tbody');
        
        this.update();
        this.onAdd();
    }

    onAdd(){
        const addButton = this.root.querySelector('.search button');

        addButton.onclick = () => {
            const { value } = this.root.querySelector('#txtSearch');
            this.add(value);
        }
    }

    update(){
        this.removeAllTr();

        this.entries.forEach((user) => {
            const row = this.createRow();

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
            row.querySelector('.user img').alt = `Imagem de ${user.name}`;
            row.querySelector('.user a').href = `https://github.com/${user.login}`;
            row.querySelector('.user p').textContent = user.name;
            row.querySelector('.user span').textContent = user.login;
            row.querySelector('.repositories').textContent = user.public_repos;
            row.querySelector('.followers').textContent = user.followers;

            row.querySelector('.remove').onclick = () => {
                const isOK = confirm('Tem certeza que deseja remover essa linha?');

                if(isOK){
                    this.delete(user);
                }
            };
            
            this.tbody.append(row);
        });
    }

    removeAllTr(){
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove();
        })
    }

    createRow(){
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="user">
                <img src="https://github.com/IgaoSS.png" alt="Avatar do usuário">
                <a href="https://github.com/IgaoSS" target="_blank">
                    <p>Igor Sousa</p>
                    <span>IgaoSS</span>
                </a>
            </td>
            <td class="repositories">
                100
            </td>
            <td class="followers">
                0
            </td>
            <td>
                <button class="remove">Remover</button>
            </td>
        `;

        return tr;
    }
}