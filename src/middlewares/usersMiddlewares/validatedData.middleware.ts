import { Request, Response, NextFunction } from "express";

const validateDataMiddleware =
  (schema: any) => async (req: any, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.validatedBody = validated;
      next();
    } catch (error:any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  };

export default validateDataMiddleware;
