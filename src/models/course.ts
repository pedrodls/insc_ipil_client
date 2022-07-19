import { AreaModel } from "../environments/models";

export default class CourseModel {
    
    id!: string;
    name!: string;
	code!: string;
    isActive!: boolean;
    createdAt!: string;
    updatedAt!: string;
    areaId!: string;
    area!: AreaModel
    
    constructor() {}

   						
}