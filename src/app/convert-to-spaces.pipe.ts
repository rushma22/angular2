import {Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name:'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: number): string {
        return value+"pcs";
    }
}