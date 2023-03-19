const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {

  Category.findAll({include: Product}).then((categories) => {
    res.json(categories);
  });
});

router.get('/:id', (req, res) => {

  Category.findByPk(req.params.id, {include: Product}).then((category) => {
    res.json(category);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then((category) => {
    res.json(category);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where: {id: req.params.id}}).then((category) => {
    res.json(category);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where: {id: req.params.id}}).then((category) => {
    res.json(category);
  });
});

module.exports = router;
