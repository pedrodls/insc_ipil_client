import { AreaModel } from "../environments/models";

export default class CourseModel {
    
    constructor() {}

    id!: string;
    name!: string;
	code!: string;
    isActive!: boolean;
    createdAt!: string;
    updatedAt!: string;
    areaId!: string;
    area!: AreaModel						
}