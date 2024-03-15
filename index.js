const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

const Post = sequelize.define('post', {
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
});

const Comment = sequelize.define('comment', {
  content: Sequelize.TEXT,
});

User.hasMany(Post);
Post.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);
User.hasMany(Comment);
Comment.belongsTo(User);

sequelize.sync();
