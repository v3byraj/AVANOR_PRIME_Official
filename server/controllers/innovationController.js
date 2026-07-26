import Innovation from "../models/Innovation.js";
import cloudinary from "../server/config/cloudinary.js";
import streamifier from "streamifier";

export const createInnovation = async (req, res) => {
  try {
    const { title, description, category, readTime, featured } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    const uploadFromBuffer = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "avanor-spectrum",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

    const uploadedImage = await uploadFromBuffer();

    const innovation = await Innovation.create({
      title,
      description,
      category,
      image: uploadedImage.secure_url,
      cloudinaryId: uploadedImage.public_id,
      readTime,
      featured,
    });

    res.status(201).json({
      success: true,
      message: "Innovation Created Successfully",
      innovation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export const getInnovations = async (req, res) => {
  try {
    const innovations = await Innovation.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: innovations.length,
      innovations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




export const getInnovation = async (req, res) => {
  try {
    const innovation = await Innovation.findById(req.params.id);

    if (!innovation) {
      return res.status(404).json({
        success: false,
        message: "Innovation not found",
      });
    }

    res.status(200).json({
      success: true,
      innovation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export const updateInnovation = async (req, res) => {
  try {
    const innovation = await Innovation.findById(req.params.id);

    if (!innovation) {
      return res.status(404).json({
        success: false,
        message: "Innovation not found",
      });
    }

    let image = innovation.image;
    let cloudinaryId = innovation.cloudinaryId;

    // New image uploaded
    if (req.file) {
      // Delete old image
      await cloudinary.uploader.destroy(innovation.cloudinaryId);

      // Upload new image
      const uploadFromBuffer = () =>
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              folder: "avanor-spectrum",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );

          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });

      const uploadedImage = await uploadFromBuffer();

      image = uploadedImage.secure_url;
      cloudinaryId = uploadedImage.public_id;
    }

    innovation.title = req.body.title || innovation.title;
    innovation.description =
      req.body.description || innovation.description;
    innovation.category = req.body.category || innovation.category;
    innovation.readTime = req.body.readTime || innovation.readTime;

    if (req.body.featured !== undefined) {
      innovation.featured = req.body.featured;
    }

    innovation.image = image;
    innovation.cloudinaryId = cloudinaryId;

    await innovation.save();

    res.status(200).json({
      success: true,
      message: "Innovation Updated Successfully",
      innovation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




export const deleteInnovation = async (req, res) => {
  try {
    const innovation = await Innovation.findById(req.params.id);

    if (!innovation) {
      return res.status(404).json({
        success: false,
        message: "Innovation not found",
      });
    }

    // Delete image from Cloudinary
    await cloudinary.uploader.destroy(innovation.cloudinaryId);

    // Delete document from MongoDB
    await innovation.deleteOne();

    res.status(200).json({
      success: true,
      message: "Innovation Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};