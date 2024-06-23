import { IsString, IsNotEmpty, IsInt, IsDate } from 'class-validator';

export class CreateFridgeDto {
    @IsString()
    @IsNotEmpty()
    creator_id: string;

    @IsString()
    @IsNotEmpty()
    fridge_name: string;
}


export class addProductToFridgeDto {
    @IsString()
    @IsNotEmpty()
    barcode: string;

    @IsInt()
    @IsNotEmpty()
    quantity: number;

    @IsDate()
    @IsNotEmpty()
    expire_date: Date;

    @IsString()
    @IsNotEmpty()
    is_shared: boolean;

}

export class updateProductFromFridgeDto {
    @IsString()
    @IsNotEmpty()
    operation: "add" | "remove";

    @IsInt()
    @IsNotEmpty()
    quantity: number;

    @IsDate()
    @IsNotEmpty()
    expire_date: Date;

}
