import { Controller, Get } from '@nestjs/common';

@Controller('luciano')
export class LucianoController {

    @Get()
    sayHello() {
        return {
            "name": "Luciano",
            "school": "DNC"
        }
    }

}
