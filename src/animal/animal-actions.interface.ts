import { CommonPayload } from "./dto/common.dto";
import { Animal } from "./entities/animal.entity";

export interface AnimalActions {
    eat(id: number): Promise<Animal>;
    sleep(id: number): Promise<Animal>;
    speak(id: number): Promise<CommonPayload>;
}