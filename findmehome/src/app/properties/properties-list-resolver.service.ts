import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PropertiesService } from './shared/properties.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PropertiesListResolverService implements Resolve<any>
{
    constructor(private propertiesService:PropertiesService)
    {

    }

    resolve()
    {
        return this.propertiesService.getProperties().pipe(map(props => props));
    }
}