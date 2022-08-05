// The `/api/categories` endpoint
const router = require('express').Router();
const { Category, Product } = require('../../models');


  // find all categories
router.get('/', async (req, res) => {

  try {
    const categoryData = await Category.findAll({
      //include the associated Products
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // find one category by its `id` value
router.get('/:id', async (req, res) => {

  try {
    const categoryData = await Category.findOne({
      //include the associated Products
      include: [{model: Product}],
      where:{id: req.params.id}
    })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // create a new category
router.post('/', async (req, res) => {

  try{
    const newCategory = await Category.create({
      category_name: req.body.category_name
    })
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
