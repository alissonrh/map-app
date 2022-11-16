import Location from "../database/models/location.model";

class LocationController {
    async create(req: any, res: any) {      
        const { name, geometry: boundaries } = req.body;
        const location = await Location.create({ name, boundaries });
        return res.status(200).json(location);
    }

    async findAll(_req: any, res: any) {
      const response = await Location.findAll();
      return res.status(200).json(response);
    }
}

export default LocationController;
