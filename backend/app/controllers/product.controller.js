const ProductService = require("../services/product.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.create = async (req, res, next) => {
  try {
    if (!req.files) {
      return res.status(500).send({ msg: "file is not found" });
    }
    const productService = new ProductService(MongoDB.client);
    const document = await productService.create(req.files.file, req.body);
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
};

exports.findAll = async (req, res, next) => {
  let documents = [];
  console.log('kdkdjkd', documents)
  try {
    const productService = new ProductService(MongoDB.client);
    documents = await productService.find({});
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
  return res.send(documents);
};
exports.findOne = async (req, res, next) => {
  try {
    const productService = new ProductService(MongoDB.client);
    const document = await productService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `Error retrieving contact with id=${req.params.id}`)
    );
  }
};
exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }

  try {
    const document = {};
    const productService = new ProductService(MongoDB.client);
    if(!req.files){
       document = await productService.update(req.params.id,null, req.body);
      
    }else{
       document = await productService.update(req.params.id,req.files.file, req.body);

    }
    if (!document) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send({ message: "Contact was updated successfully" });
  } catch (error) {
    return next(
      new ApiError(500, `Error updating contact with id=${req.params.id}`)
    );
  }
};
exports.delete = async (req, res, next) => {
  try {
    const productService = new ProductService(MongoDB.client);
    const document = await productService.delete(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send({ message: "Contact was deleted successfully" });
  } catch (error) {
    return next(
      new ApiError(500, `Could not delete contact with id=${req.params.id}`)
    );
  }
};
exports.deleteAll = async (_req, res, next) => {
  try {
    const productService = new ProductService(MongoDB.client);
    const deletedCount = await productService.deleteAll();
    return res.send({
      message: `${deletedCount} contacts were deleted successfully`,
    });
  } catch (error) {
    return next(
      new ApiError(500, "An error while retrieving favorite contacts")
    );
  }
};
