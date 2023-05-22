<h1 align="center">
    <img alt="Gobarber" src="https://repository-images.githubusercontent.com/341683746/42e1ab80-77af-11eb-9e07-47f9e46b3e6e" width="550px" />
</h1>


**Fastify**: é um framework web leve e eficiente para Node.js, conhecido por seu alto desempenho e baixa latência. Ele oferece modularidade, um sistema de plugin flexível, manipulação de erros avançada e validação de entrada embutida. O Fastify é amplamente utilizado por desenvolvedores que buscam construir aplicativos web rápidos, escaláveis e de alta qualidade.

É uma excelente escolha para desenvolvedores que precisam de um framework Node.js rápido, extensível e altamente personalizável para construção de APIs web e serviços em rede.

## Iniciando back-end
```bash
  # Instalar as dependências:
  $ npm i

  # Criar as migrations:
  $ npm run knex -- migrate:make create-

  # Rodar as migrations:
  $ npm run knex -- migrate:latest

   # Rodar as migrations:
  $ npm run knex -- migrate:rollback

  # Rodar a aplicação:
  $ yarn dev
```




# Desafio 02

Desafio referente ao módulo: Criando APIs RESTfull com Node.js


<aside>
⚠️ A partir desse desafio **não** vamos informar detalhadamente rotas e propriedades dos registros a serem criadas, mas sim, as regras e requisitos que a API deve ter.

O motivo disso é para vocês **também** exercitarem ****o desenvolvimento e a estruturação dessa parte.

</aside>

Nesse desafio desenvolveremos uma API para controle de dieta diária, a Daily Diet API.

### Regras da aplicação

- Deve ser possível criar um usuário
- Deve ser possível identificar o usuário entre as requisições
- Deve ser possível registrar uma refeição feita, com as seguintes informações:
    
    *As refeições devem ser relacionadas a um usuário.*
    
    - Nome
    - Descrição
    - Data e Hora
    - Está dentro ou não da dieta
- Deve ser possível editar uma refeição, podendo alterar todos os dados acima
- Deve ser possível apagar uma refeição
- Deve ser possível listar todas as refeições de um usuário
- Deve ser possível visualizar uma única refeição
- Deve ser possível recuperar as métricas de um usuário
    - Quantidade total de refeições registradas
    - Quantidade total de refeições dentro da dieta
    - Quantidade total de refeições fora da dieta
    - Melhor sequência por dia de refeições dentro da dieta
- O usuário só pode visualizar, editar e apagar as refeições o qual ele criou

### Contexto da aplicação

É comum ao estar desenvolvendo uma API, imaginar como esses dados vão estar sendo utilizados pelo cliente web e/ou mobile.

Por isso, deixamos abaixo o link para o layout da aplicação que utilizaria essa API.

[Daily Diet](https://www.figma.com/community/file/1218573349379609244)


##  💛 Contato
<div style="margin-top: 20px">
  <a href="https://wa.me/qr/RTYW74WDLJHBC1" target="_blank"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" target="_blank"></a> 
  <a href = "mailto:jonesbass.tb@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/jones-souza-58a31a177/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href="https://www.instagram.com/jonesbass_/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a> 
</div>