import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { DialogService } from "./dialog.service";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor
{
    constructor(public dialogService: DialogService) {}
    intercept (request:HttpRequest<any>, next: HttpHandler): Observable<any> {
        // can modify or set XSRF TOKEN and authentication/authorization token 
        // e.g. 
        // const clonedRequest = request.clone({setHeaders: { 'CUSTOM-XSRF-TOKEN': token }, withCredentials: false });
        // const clonedRequest = request.clone({setHeaders: { Authorization: authToken }, withCredentials: true });
        // return next.handle(clonedRequest).pipe(

        return next.handle(request).pipe(
            map((resp: any) => {
                // can check the response body and do some operations 
                return resp;
            }),
            catchError((error: any) => {
                let data = {
                    // if you have a custom message set the message else set the default messages or "unknown error"" 
                    message: (error.message) ? error.message : (error && error.error && error.error.reason ? error.error.reason : 'unknown error'),
                    status: error.status 
                }
                this.dialogService.openDialog(data)
                return of (error)
            })
            
        );

    }

    
}