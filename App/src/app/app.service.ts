import {} from '@angular/common/'
import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()

class AppService {
    constructor(private client : HttpClient){}


    public getStartWarsCars = () => {
        return 
    }

    
    
}