import AppDataSource from "../../data-source";
import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";
import { Properties } from "../../entities/properties.entity";
import { Adresses } from "../../entities/adresses.entity";

const PropertieExists = async (req: Request, res: Response, next: NextFunction) => {
    const propertieRepository = AppDataSource.getRepository(Properties)
    const AdressesRepository = AppDataSource.getRepository(Adresses)
    const exists = await AdressesRepository.exist({ where: { id: req.body.addressesId} });
    

     if (exists === true) {
        throw new AppError("Propertie already exists!", 409)
    }
    else if(exists === false){
        next()
    }
    else{
        throw new AppError("Propertie not found!", 404)

    }
    


    next()
}

export default PropertieExists