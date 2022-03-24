const brand = require("../Models/brand");

exports.addBrand = async (req, res) => {
  try {
    let findBrand = await brand.findOne({
      email: req.body.email,
    });
    if (findBrand) {
      res.status(400).json({ message: "brand already exists" });
      return;
    }

    const { firstName, lastName, email, userName, selectGender } = req.body;
    console.log(req.body);
    const newBrand = await brand.create({
      firstName,
      lastName,
      email,
      userName,
      selectGender,
    });

    if (!newBrand) {
      res.status(400).json({ message: "brand not save successfully" });
      return;
    }
    await newBrand.save();
    res.status(200).json({ message: "brand save successfully", newBrand });
  } catch (e) {
    res.send(e);
  }
};

exports.getAllBrand = async (req, res) => {
  try {
    const getallBrand = await brand.find();
    if (!brand) {
      res.status(400).json({ message: "brand data not present" });
    }
    res.status(200).json({ message: "brand data", getallBrand });
  } catch (err) {
    res.status(400).json({ message: "something went wrong", err });
    console.log(err);
  }
};
exports.getBrandById = async (req, res) => {
    try {
      const brandId = await brand.findById(req.params.id);
      console.log(brandId);
      if (!brandId) {
        res.status(400).json({ message: "brand details not found" });
      }
      res.status(200).json({ message: "brand details  by id", brandId });
    } catch (err) {
      res.status(400).json({ message: "Something went wrong", err });
      console.log(err);
    }
  };
  exports.updateBrand = async (req, res) => {
    try {
      const updatebrand = await brand.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      console.log(updatebrand);
      if (!brand) {
        res.status(400).json({ message: "brand data not present" });
      }
      res.status(200).json({ message: "brand updated", updatebrand });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", err });
      console.log(err);
    }
  };
  
  exports.deleteBrand = async (req, res) => {
    try {
      const deletebrand = await brand.findByIdAndDelete(req.params.id);
      console.log(deletebrand);
      if (!req.params.id) {
        res.status(400).json({ message: "brand data not present" });
      }
      res.status(200).json({ message: "brand deleted", deletebrand });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", err });
      console.log(err);
    }
  };