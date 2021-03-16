import { Request, Response } from 'express';

import Lab from '../models/Laboratory';

export const createLab = async (req: Request, res: Response): Promise<Response> => {
  const {
    title,
    description,
    subjectCode,
    subjectName,
    numberLab,
    semester,
    docent,
    publishDate,
    deliberyDate,
    bodyPath,
    codePath,
    imagePath
  } = req.body;
  const newLab = new Lab({
    title,
    description,
    subjectCode,
    subjectName,
    numberLab,
    semester,
    docent,
    publishDate,
    deliberyDate,
    bodyPath,
    codePath,
    imagePath
  });
  const labSaved = await newLab.save();
  return res.status(201).json(labSaved);
}

export const getLabs = async (req: Request, res: Response): Promise<Response> => {
  const labs = await Lab.find();
  return res.status(200).json(labs);
}

export const getLabById = async (req: Request, res: Response): Promise<Response> => {
  const lab = await Lab.findById(req.params.labId);
  return res.status(200).json(lab);
}

export const updateLabById = async (req: Request, res: Response): Promise<Response> => {
  const updatedLab = await Lab.findByIdAndUpdate(req.params.labId, req.body, {
    new: true
  });
  return res.status(200).json(updatedLab);
}

export const deleteLabById = async (req: Request, res: Response): Promise<Response> => {
  const { labId } = req.params;
  await Lab.findByIdAndDelete(labId);
  return res.status(204).json();
}