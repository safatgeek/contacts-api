const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts !" });
};

const createContact = (req, res) => {
  console.log("The request body is :", req.body)
  const { name, email, phone } = req.body
  if (!name || !email || !phone) {
    res.status(400)
    console.log("inside post")
    throw new Error("All fields are mendatory !")
  }
  res.status(200).json({ message: "Create a contact !" });
};

const getContactById = (req, res) => {
  res.status(200).json({ message: `Get Contact by id ${req.params.id} !` });
};

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact ${req.params.id} !` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id} !` });
};

module.exports = {
  getContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
