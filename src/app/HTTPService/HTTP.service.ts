import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, HTTP_PROVIDERS } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { ModulaMemberService } from './modula-member.service';

@Injectable()
export class HTTPService {
	public auth_token;
	
	constructor (private http: Http, private memberService:ModulaMemberService) { 
		this.auth_token = localStorage.getItem('token');
	}

	_post(url, params):Observable<Any>{
		let headers = appendHeader(new Headers({'Content-Type': 'application/json'}));
		let body = JSON.stringify(params);
		let reqOptions = new RequestOptions({headers: this.headers});
		return this.http.post(url, body, {headers: headers}).map((res:Response) => res.json()).catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
	}

	

	_update(url, params):Observable<Any>{
		let headers = appendHeader(new Headers({'Content-Type': 'application/json'}));
		let body = JSON.stringify(params);
		let reqOptions = new RequestOptions({headers: headers});
		return this.http.get(url, body, {headers : headers}).map((res:Response) => res.json()).catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
	}

	_get(url):Observable<Any>{
		let headers = appendHeader(new Headers({'Content-Type': 'application/json'}));
		return this.http.get(url, {headers:headers}).map((res:Response) => res.json()).catch((error:any)=> Observable.throw(error.json().error || 'Server error'));	
	}

	_delete(url, userId):Observable<Any>{
		return this.http.delete(url + userId).catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
	}

//implement authorization component!
	appendHeader(header:Headers):Headers{
		return header.append('Authorization', 'Basic' + this.auth_token);
	}

}