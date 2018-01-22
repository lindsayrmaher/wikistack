var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});



var Page = db.define('page', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        urlTitle: {
            type: Sequelize.STRING,
            allowNull: false, 
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM('open', 'closed')
        },
        route: {
        	type: Sequelize.VIRTUAL,
        	get(){
        		return '/wiki/' + this.getDataValue('urlTitle');	
        	} 

        } 
    
    },
    {
        hooks: {
            beforeValidate: function(page) {
                if(page.title) {
                    page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '')
                } else {
                    page.urlTitle = Math.random().toString(36).substring(2,7);
                }
            }
        }
    }

);

var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
         validate: {
            isEmail: true
        }
    }
});

module.exports = {
  Page: Page,
  User: User,
  db: db
};