# E-Commerce-Back-End

## Description

This project was to build the back end for an e-commerce site by modifying starter code. Configured the Express.js API, and used Sequelize to interact with a MySQL database.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)

## Installation

1. Download or clone repo
2. Install nodejs https://nodejs.org/en/download/
3. Download Insomnia https://insomnia.rest/download or your favorite API Testing Tool
3. Run npm i in terminal while under the repo directory
4. Create a .env file in the root of this project folder and then add the following to it:
    - DB_NAME = 'ecommerce_db'
    - DB_USER = 'an admin username]'
    - DB_PASSWORD = '[that user's password]'
5. In the terminal login to msql while in project directory 
    - Run 'source db/schema.sql'
    - Run 'exit' to exit mysql cli
    - Run 'node seeds/index.js'

## Usage

* Run `node index.js` to start application
    ### Tags
    * Use the following options:
    - `view all tags`   - GET   http://localhost:3001/api/tags/
    - `view one tag`    - GET   http://localhost:3001/api/tags/[tag-id]
    - `update a tag`    - PUT   http://localhost:3001/api/tags/[tag-id]  
            Add a json to the body:
        ```  
        {  
	        "tag_name": "[new-tag-name]"  
        }  
    - `adding a new tag`    - POST  http://localhost:3001/api/tags/ 
        Add a json to the body:
        ```  
        {  
	        "tag_name": "[new-tag-name]"  
        }  
        ```  
    - `delete a tag` - DELETE http://localhost:3001/api/tags/[tag-id]
    ### Products
    * Use the following options:
    - `view all products`   - GET   http://localhost:3001/api/products/
    - `view one product`    - GET   http://localhost:3001/api/products/[product-id]
    - `add a new product`  - POST  http://localhost:3001/api/products/
            Add a json to the body:
        ```  
        {  
            "product_name": "[new-product-name]",  
            "price": [product-price],  
            "stock": [prodcut-quantity],  
            "tagIds": [tags-ids-to-attach]  
        }  
        ```
    - `update a product`    - PUT   http://localhost:3001/api/products/[product-id]
        Add a json to the body:
        ```  
        {  
	        "product_name": "[new-product-name]"  
        }  
        ```
    - `delete a product` - DELETE http://localhost:3001/api/products/[product-id]
    ### Categories
    * Use the following options:
    - `view all categories` - GET   http://localhost:3001/api/categories/
    - `view one category`   - GET   http://localhost:3001/api/categories/[category-id]
    - `add a new category`  - POST  http://localhost:3001/api/categories/
            Add a json to the body:
        ```  
        {
            "category_name": "[new-category-name]"
        }  
        ```
    - `update a category`   - PUT   http://localhost:3001/api/categories/[category-id]
        Add a json to the body:
        ```  
        {
            "category_name": "[new-category-name]"
        }  
        ```
    - `delete a category`   - DELETE    http://localhost:3001/api/categories/[category-id]

## DEMO

[Demo](https://drive.google.com/file/d/1Rv6a5jNAoB17TU89Qqn3QYb8Z6dalyrZ/view?usp=sharing)

## Credits

[Nodejs](https://nodejs.org/en/)  
[Expressjs](http://expressjs.com/)
[MySql](https://www.mysql.com/)  
[mysql2](https://www.npmjs.com/package/mysql2)  
[Insomnia](https://insomnia.rest/)
[Sequalize](https://sequelize.org/)  
[dotenv](https://www.npmjs.com/package/dotenv)  

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Badges

![E-Commerce-Back-End](https://img.shields.io/github/languages/top/gnimelf/E-Commerce-Back-End)  
![langages](https://img.shields.io/github/languages/count/gnimelf/E-Commerce-Back-End)
