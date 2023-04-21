import mongoose from "mongoose";
import pirateModel from "../models/pirateModel.js";

export const getPirates = async(req, res) => {
    try {
        const Pirates = await pirateModel.find();
        res.status(200).json(Pirates);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getPirate = async(req, res) => {
    const { id: _id } = req.params;
    try {
        const pirate = await pirateModel.findById(_id);
        res.status(200).json(pirate)
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
};

export const createPirate = async(req, res) => {
    const pirate = req.body;
    const newPirate = new pirateModel(pirate);
    try {
        await newPirate.save();
        res.status(201).json(newPirate);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
export const updatePirate = async(req, res) => {
    const { id: _id } = req.params;
    const pirate = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No pirate exist with ${_id}`);
    const updatedPirate = await pirateModel.findByIdAndUpdate(_id, pirate, { new: true });
    res.json(updatedPirate)
};

export const deletePirate = async(req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No pirate exist with ${_id}`);
    await pirateModel.findByIdAndRemove(_id);
    res.json({ message: "Pirate deleted Successfully" });
};

export const likePirate = async(req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No pirate exist with ${_id}`);
    const post = await pirateModel.findById(_id);
    const updatePirate = await pirateModel.findByIdAndUpdate(_id, { likePirate: post.likePirate + 1 }, { new: true });
    res.json(updatePirate);
};