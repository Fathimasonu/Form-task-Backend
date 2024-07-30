const Form =require('../models/Form')

// Get all forms
exports.getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new form
exports.createForm = async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single form
exports.getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a form
exports.updateForm = async (req, res) => {
  try {
    const updatedForm = await Form.updateOne({ id: req.params.id })
                .set({
                    title: req.body.title,
                    inputs: req.body.inputs,
                });
            if (!updatedForm) return res.status(404).json({ error: 'Form not found' });
            return res.status(200).json(updatedForm);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },


// Delete a form
exports.deleteForm = async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.json({ message: 'Form deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
